// "use client";

import { Button } from "@/components/shadcn/button";
import {
  CheckCircle,
  Star,
  Award,
  Users,
  Search,
  Calendar,
  Target,
  Brain,
  Dumbbell,
  Heart
} from "lucide-react";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="flex items-center flex-col justify-center min-h-screen bg-gradient-to-br from-background to-sidebar relative">
        <div className="text-foreground flex flex-col justify-center items-center px-6 py-24 max-w-7xl mx-auto">
          <p className="text-red-500">todo: fix this bum ahh logo</p>
          <img
            src="/logo.png"
            alt="CoachGo Logo"
            className="w-32 h-32 mb-6 drop-shadow-2xl animate-fade-in"
          />

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center leading-tight animate-slide-up">
            Find Your{" "}
            <span className="landing-text-gradient">Perfect Coach</span>
          </h1>

          <p className="text-lg md:text-xl text-center text-muted-foreground max-w-3xl mb-12 animate-fade-in delay-200">
            The ultimate hub for connecting with certified baseball coaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in delay-300 w-full max-w-lg">
            <Link href="/coaches" className="grow-1">
              <button className="w-full outline-2 outline-primary bg-transparent hover:outline-2 hover:bg-secondary text-white px-10 py-4 rounded-full font-semibold shadow-lg transition-all duration-300">
                Find Coaches
              </button>
            </Link>
            <a
              href="#scroll_learn-more"
              className="grow-1">
              <button className="w-full outline-2 outline-foreground bg-transparent hover:outline-2 hover:bg-secondary text-white px-10 py-4 rounded-full font-semibold shadow-lg transition-all duration-300">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </section>

      <section id="scroll_learn-more" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            How CoachGo Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <Search className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Find</h3>
              <p className="text-muted-foreground">
                Search specialized coaches that match your specific training
                needs and goals.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <Calendar className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Book</h3>
              <p className="text-muted-foreground">
                Schedule sessions that fit your calendar with our easy booking
                system.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Train</h3>
              <p className="text-muted-foreground">
                Get personalized coaching and reach your athletic potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-sidebar relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6 text-primary">
            Specialized Coaching
          </h2>
          <p className="text-lg text-center text-sidebar-foreground mb-16 max-w-3xl mx-auto">
            Our certified coaches specialize in various aspects of baseball
            training to help you excel
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Hitting",
                link: "/coaches",
                description: "Perfect your swing and batting technique"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Pitching",
                link: "/coaches",
                description: "Master your delivery and pitch selection"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Fielding",
                link: "/coaches",
                description: "Improve your defensive skills and positioning"
              },
              {
                icon: <Dumbbell className="w-8 h-8" />,
                title: "Strength Training",
                link: "/coaches",
                description: "Build sport-specific power and endurance"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Physical Therapy",
                link: "/coaches",
                description: "Recover from injuries and prevent future ones"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Mental Performance",
                link: "/coaches",
                description: "Develop focus, confidence and game strategy"
              }
            ].map((specialty, index) => (
              <Link
                href={specialty.link}
                key={index}
                className="bg-card border border-primary/20 p-8 rounded-xl shadow-md hover:shadow-lg hover:border-primary transition-all duration-200 group">
                <div className="flex items-center mb-5">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    {specialty.icon}
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    {specialty.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">{specialty.description}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10 pointer-events-none"></div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Why Choose CoachGo</h2>

              <div className="space-y-6">
                {[
                  "Verified certified coaches with proven expertise",
                  "Personalized training plans tailored to your goals",
                  "Flexible scheduling to fit your busy lifestyle",
                  "Progress tracking to measure improvements",
                  "Direct communication with coaches"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <p className="text-lg">{feature}</p>
                  </div>
                ))}
              </div>

              <Link href="/coaches">
                <button className="outline-2 outline-primary bg-transparent hover:outline-2 hover:bg-secondary text-white px-10 py-4 mt-10 rounded-full font-semibold shadow-lg transition-all duration-300">
                  Browse All Coaches
                </button>
              </Link>
            </div>

            <div className="bg-sidebar p-1 rounded-lg shadow-lg">
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">
                  [Coach profile preview image]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-sidebar/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            About the Creators
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Alex Johnson", role: "Founder & CEO" },
              { name: "Maria Rodriguez", role: "Lead Developer" },
              { name: "David Chen", role: "Head of Coach Relations" }
            ].map((person, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-md text-center">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                  <p className="text-muted-foreground">[Photo]</p>
                </div>
                <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                <p className="text-primary font-medium mb-4">{person.role}</p>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. Sed euismod, nisl vel ultricies lacinia, nisl nisl
                  aliquam nisl.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold pb-6 text-primary">
            Ready to Level Up Your Game?
          </h2>
          <Link href="/signup">
            <button className="outline-2 outline-primary bg-transparent hover:outline-2 hover:bg-secondary text-white px-10 py-4 rounded-full font-semibold shadow-lg transition-all duration-300">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      <footer className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p className="text-red-500">{"<misc links ... copyright info?>"}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
