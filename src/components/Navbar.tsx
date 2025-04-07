"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "./shadcn/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar
} from "@/components/shadcn/sidebar";
import { FONTS } from "@/lib/fonts";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar
  },
  {
    title: "Search",
    url: "#",
    icon: Search
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings
  }
];

export default function AppSidebar() {
  const { state, setOpen } = useSidebar();

  useEffect(() => setOpen(false), []);

  return (
    <Sidebar
      collapsible="offcanvas"
      variant="floating"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuItem>
          <SidebarMenuButton asChild size="lg">
            <Link href="/profile" className={FONTS.geistMono}>
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={
                    "https://cdn.shopify.com/s/files/1/0163/6622/files/Do_you_need_a_perfect_location_for_amazing_photos.jpg?v=1682103069"
                  }
                  alt={" sigma"}
                />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{"sigma"}</span>
                <span className="truncate text-xs">{"sigma"}</span>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  );
}
