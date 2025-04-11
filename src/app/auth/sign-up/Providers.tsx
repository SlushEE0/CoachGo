"use client";

import Image from "next/image";
import { type OAuthResponse } from "@supabase/supabase-js";

import { toast } from "sonner";
import { Button } from "@/components/shadcn/button";

const providers = [
  {
    name: "google",
    icon: "/google.png",
    alt: "Google Image"
  },
  {
    name: "apple",
    icon: "/apple.png",
    alt: "Apple Image"
  }
];

type Props = {
  getGoogleOAuthLink: () => Promise<OAuthResponse>;
};

export default function Providers({ getGoogleOAuthLink }: Props) {
  const handleProviderAuth = async function (provider: string) {
    switch (provider) {
      case "google":
        const { data, error } = await getGoogleOAuthLink();

        console.log(data);

        if (error) {
          return;
        }

        window.open(data.url, "_self");
        break;
      case "apple":
        toast.error("Apple Sign In is not yet supported", {
          style: {
            background: "var(--destructive)"
          }
        });
        // window.open("/api/auth/signin/apple", "_self");
        break;
      default:
        break;
    }
  };

  return (
    <>
      {providers.map((provider) => {
        const handle = handleProviderAuth.bind(null, provider.name);

        return (
          <Button
            variant="outline"
            className="aspect-square p-0"
            size={"lg"}
            key={provider.name}
            onClick={handle}>
            <Image
              src={provider.icon}
              alt={provider.alt}
              width={24}
              height={24}
            />
          </Button>
        );
      })}
    </>
  );
}
