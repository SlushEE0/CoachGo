"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset
} from "@/components/shadcn/sidebar";

import {
  LayoutDashboard,
  Users,
  Info,
  HelpCircle,
  LogIn,
  UserPlus
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/shadcn/avatar";
import { Button } from "@/components/shadcn/button";
import Link from "next/link";

// Function to get user data
function getUserData() {
  // Mock function - replace with actual authentication implementation
  return {
    data: {
      displayName: "John Doe",
      photoURL: "https://ss.com",
      email: "johndoe@gmail.com"
    },
    error: false
  };

  // Example of authenticated user data:
  // return {
  //   data: {
  //     displayName: "John Doe",
  //     photoURL: "https://github.com/shadcn.png"
  //   },
  //   error: false
  // }
}

export default function Navbar() {
  const { data, error } = getUserData();

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <span className="font-semibold text-lg">C</span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link href="/dashboard" passHref legacyBehavior>
                  <SidebarMenuButton tooltip="Dashboard">
                    <LayoutDashboard />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Link href="/coaches" passHref legacyBehavior>
                  <SidebarMenuButton tooltip="Coaches">
                    <Users />
                    <span>Coaches</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Link href="/about" passHref legacyBehavior>
                  <SidebarMenuButton tooltip="About">
                    <Info />
                    <span>About</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Link href="/support" passHref legacyBehavior>
                  <SidebarMenuButton tooltip="Support">
                    <HelpCircle />
                    <span>Support</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                {error ? (
                  <div className="w-full flex flex-col items-center justify-between gap-2">
                    <Button className="w-full" variant={"outline"}>
                      Log In
                    </Button>
                    <Button className="w-full" variant={"outline"}>
                      Sign Up
                    </Button>
                  </div>
                ) : (
                  <Button variant={"outline"} className="w-full h-max p-4 flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={data.photoURL} alt={data.displayName} />
                      <AvatarFallback className="rounded-lg">
                        {data.displayName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {data.displayName}
                      </span>
                      <span className="truncate text-xs">{data.email}</span>
                    </div>
                  </Button>
                )}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          {/* Your page content goes here */}
          <div className="p-4">
            <SidebarTrigger className="mb-4" />
            {/* Page content */}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
