// // components/layout/header.tsx
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Globe,
//   Bell,
//   Settings,
//   Menu,
//   X,
//   Maximize2,
//   User,
//   Sun,
//   Moon,
// } from "lucide-react";
// import { useTheme } from "next-themes";

// export function Header() {
//   const { setTheme } = useTheme();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const languages = [
//     { code: "en", name: "English", flag: "/flags/us.svg" },
//     { code: "fr", name: "French", flag: "/flags/fr.svg" },
//     { code: "ja", name: "Japanese", flag: "/flags/jp.svg" },
//     { code: "tr", name: "Turkish", flag: "/flags/tr.svg" },
//     { code: "zh", name: "Chinese", flag: "/flags/cn.svg" },
//     { code: "de", name: "German", flag: "/flags/de.svg" },
//   ];

//   const notifications = [
//     {
//       id: 1,
//       title: "Withdrawal Request",
//       message: "You have requested a withdrawal",
//       time: "2 hrs ago",
//       unread: true,
//     },
//     {
//       id: 2,
//       title: "Product Alert",
//       message: "2 product quantity alerts",
//       time: "5 hrs ago",
//       unread: true,
//     },
//     {
//       id: 3,
//       title: "Products Added",
//       message: "4 product added",
//       time: "6 hrs ago",
//       unread: false,
//     },
//   ];

//   return (
//     <header className="border-b bg-background w-full sticky top-0 z-50">
//       <div className="container-fluid mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Left Section */}
//           <div className="flex items-center gap-4">
//             <Link href="/" className="flex items-center">
//               <Image
//                 src="/logo-light.png"
//                 alt="Pyle Logo"
//                 width={100}
//                 height={40}
//                 className="hidden dark:block"
//               />
//               <Image
//                 src="/logo-dark.png"
//                 alt="Pyle Logo"
//                 width={100}
//                 height={40}
//                 className="dark:hidden"
//               />
//             </Link>

//             {/* Mobile Menu Trigger */}
//             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon" className="lg:hidden">
//                   <Menu className="h-5 w-5" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="left" className="w-[300px] sm:w-[400px]">
//                 <MobileNavigation />
//               </SheetContent>
//             </Sheet>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center gap-4">
//             {/* POS Link */}
//             <Button asChild variant="outline" size="sm">
//               <Link href="/pos">POS</Link>
//             </Button>

//             {/* Language Dropdown */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Globe className="h-4 w-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-48">
//                 {languages.map((language) => (
//                   <DropdownMenuItem
//                     key={language.code}
//                     className="flex items-center gap-3"
//                   >
//                     <Image
//                       src={language.flag}
//                       alt={language.name}
//                       width={20}
//                       height={15}
//                       className="rounded-sm"
//                     />
//                     <span>{language.name}</span>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>

//             {/* Light-Dark Theme Dropdown */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="outline" size="icon">
//                   <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
//                   <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
//                   <span className="sr-only">Toggle theme</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuItem onClick={() => setTheme("light")}>
//                   Light
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => setTheme("dark")}>
//                   Dark
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => setTheme("system")}>
//                   System
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>

//             {/* Notifications Dropdown */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon" className="relative">
//                   <Bell className="h-4 w-4" />
//                   <Badge
//                     className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
//                     variant="destructive"
//                   >
//                     3
//                   </Badge>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-80">
//                 <div className="p-2">
//                   <h4 className="text-sm font-semibold mb-2">Notifications</h4>
//                   <div className="space-y-2">
//                     {notifications.map((notification) => (
//                       <div
//                         key={notification.id}
//                         className={`p-3 rounded-lg border ${
//                           notification.unread ? "bg-muted/50" : ""
//                         }`}
//                       >
//                         <div className="flex items-start gap-3">
//                           {notification.unread && (
//                             <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
//                           )}
//                           <div className="flex-1">
//                             <p className="text-sm font-medium">
//                               {notification.title}
//                             </p>
//                             <p className="text-sm text-muted-foreground">
//                               {notification.message}
//                             </p>
//                             <p className="text-xs text-muted-foreground mt-1">
//                               {notification.time}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </DropdownMenuContent>
//             </DropdownMenu>

//             {/* Profile Dropdown */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
//                     <User className="h-4 w-4 text-primary" />
//                   </div>
//                   <div className="hidden md:block text-left">
//                     <p className="text-sm font-medium">Andrew Smith</p>
//                     <p className="text-xs text-muted-foreground">Admin</p>
//                   </div>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-48">
//                 <DropdownMenuItem asChild>
//                   <Link href="/my-profile">My Profile</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link href="/system-settings">Settings</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link href="/login">Logout</Link>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>

//             {/* Settings Toggler */}
//             <Button variant="ghost" size="icon">
//               <Settings className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// function MobileNavigation() {
//   return (
//     <div className="flex flex-col h-full">
//       <div className="flex items-center justify-between p-4 border-b">
//         <Link href="/" className="flex items-center">
//           <Image src="/logo-dark.png" alt="Pyle Logo" width={80} height={32} />
//         </Link>
//         <SheetTrigger asChild>
//           <Button variant="ghost" size="icon">
//             <X className="h-5 w-5" />
//           </Button>
//         </SheetTrigger>
//       </div>

//       <nav className="flex-1 p-4">
//         <div className="space-y-4">
//           <Button asChild variant="outline" className="w-full justify-start">
//             <Link href="/pos">POS System</Link>
//           </Button>

//           <div className="space-y-2">
//             <h4 className="text-sm font-semibold text-muted-foreground px-2">
//               Quick Links
//             </h4>
//             <div className="space-y-1">
//               <Button asChild variant="ghost" className="w-full justify-start">
//                 <Link href="/dashboard">Dashboard</Link>
//               </Button>
//               <Button asChild variant="ghost" className="w-full justify-start">
//                 <Link href="/products">Products</Link>
//               </Button>
//               <Button asChild variant="ghost" className="w-full justify-start">
//                 <Link href="/customers">Customers</Link>
//               </Button>
//               <Button asChild variant="ghost" className="w-full justify-start">
//                 <Link href="/reports">Reports</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// components/layout/header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Bell,
  Settings,
  Menu,
  X,
  Maximize2,
  User,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "../ui/sidebar";


export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "/flags/us.svg" },
    { code: "fr", name: "French", flag: "/flags/fr.svg" },
    { code: "ja", name: "Japanese", flag: "/flags/jp.svg" },
    { code: "tr", name: "Turkish", flag: "/flags/tr.svg" },
    { code: "zh", name: "Chinese", flag: "/flags/cn.svg" },
    { code: "de", name: "German", flag: "/flags/de.svg" },
  ];

  const notifications = [
    {
      id: 1,
      title: "Withdrawal Request",
      message: "You have requested a withdrawal",
      time: "2 hrs ago",
      unread: true,
    },
    {
      id: 2,
      title: "Product Alert",
      message: "2 product quantity alerts",
      time: "5 hrs ago",
      unread: true,
    },
    {
      id: 3,
      title: "Products Added",
      message: "4 product added",
      time: "6 hrs ago",
      unread: false,
    },
  ];

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full sticky top-0 z-50 transition-colors duration-200">
      <div className="container-fluid mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <SidebarTrigger />
          {/* Left Section */}
          <div className="flex items-center gap-4">
            {/* <Link href="/" className="flex items-center">
              <Image
                src="/logo-light.png"
                alt="Pyle Logo"
                width={100}
                height={40}
                className="hidden dark:block transition-opacity duration-200"
              />
              <Image
                src="/logo-dark.png"
                alt="Pyle Logo"
                width={100}
                height={40}
                className="dark:hidden transition-opacity duration-200"
              />
            </Link> */}

          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* POS Link */}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-border hover:bg-muted/50 transition-colors duration-200"
            >
              <Link href="/pos">POS</Link>
            </Button>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-muted/50 transition-colors duration-200"
                >
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-popover border-border transition-colors duration-200"
              >
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    className="flex items-center gap-3 hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
                  >
                    <Image
                      src={language.flag}
                      alt={language.name}
                      width={20}
                      height={15}
                      className="rounded-sm"
                    />
                    <span className="text-foreground">{language.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-border hover:bg-muted/50 transition-colors duration-200"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-popover border-border transition-colors duration-200"
              >
                <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className="hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className="hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
                >
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className="hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
                >
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Notifications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-muted/50 transition-colors duration-200"
                >
                  <Bell className="h-4 w-4" />
                  <Badge
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-destructive text-destructive-foreground border-0 transition-colors duration-200"
                    variant="destructive"
                  >
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-80 bg-popover border-border transition-colors duration-200"
              >
                <div className="p-2">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">
                    Notifications
                  </h4>
                  <div className="space-y-2">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-3 rounded-lg border border-border transition-colors duration-200 ${
                          notification.unread
                            ? "bg-muted/50 dark:bg-muted/30"
                            : "bg-transparent"
                        } hover:bg-muted/30 cursor-pointer`}
                      >
                        <div className="flex items-start gap-3">
                          {notification.unread && (
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 transition-colors duration-200" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">
                              {notification.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {notification.message}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 hover:bg-muted/50 transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-colors duration-200">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-foreground">
                      Andrew Smith
                    </p>
                    <p className="text-xs text-muted-foreground">Admin</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-popover border-border transition-colors duration-200"
              >
                <DropdownMenuItem
                  asChild
                  className="hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
                >
                  <Link href="/my-profile" className="text-foreground">
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
                >
                  <Link href="/system-settings" className="text-foreground">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
                >
                  <Link href="/login" className="text-foreground">
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Settings Toggler */}
            {/* <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-muted/50 transition-colors duration-200"
            >
              <Settings className="h-4 w-4" />
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  );
}


