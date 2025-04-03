import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Landing() {
  return (
    <section className="flex items-center flex-col justify-center min-h-screen bg-gradient-to-br from-background to-sidebar">
      <section className="text-foreground flex flex-col justify-center items-center px-6 py-70">
        <p className="text-red-500">todo: fix this bum ahh logo</p>
        <img
          src="/logo.png"
          alt="CoachGo Logo"
          className="w-32 h-32 mb-6 drop-shadow-2xl animate-fade-in"
        />

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center leading-tight animate-slide-up">
          Welcome to{" "}
          <span className="text-gradient-mask text-landing-gradient">
            CoachGo
          </span>
        </h1>

        <p className="text-lg md:text-xl text-center text-muted-foreground max-w-3xl mb-12 animate-fade-in delay-200">
          Your ultimate hub for connecting with certified baseball coaches in
          hitting, pitching, fielding, strength training, and physical therapy.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in delay-300">
          <Link href="/coaches">
            <button className="bg-primary hover:bg-primary-foreground px-10 py-4 rounded-full font-semibold shadow-lg transition duration-300">
              View Coaches
            </button>
          </Link>
          <Link href="/about">
            <button className="border border-foreground hover:bg-foreground hover:text-background text-foreground px-10 py-4 rounded-full font-semibold transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      <div className="flex items-center gap-32 animate-bounce">
        <ChevronDown className="size-10 text-muted-foreground" />
        <ChevronDown className="size-10 text-muted-foreground" />
      </div>
    </section>
  );
}
