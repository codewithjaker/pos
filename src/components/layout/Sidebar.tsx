// // components/sidebar.tsx
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Sidebar as ShadcnSidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarMenuSub,
//   SidebarMenuSubItem,
// } from "@/components/ui/sidebar";
// import { menuItems } from "@/data/HomeData";

// export function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <ShadcnSidebar>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel>Navigation</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {menuItems.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   {item.children ? (
//                     <>
//                       <SidebarMenuButton asChild>
//                         <Link href="#" className="flex items-center gap-2">
//                           <item.icon className="h-4 w-4" />
//                           <span>{item.title}</span>
//                         </Link>
//                       </SidebarMenuButton>
//                       <SidebarMenuSub>
//                         {item.children.map((child) => (
//                           <SidebarMenuSubItem key={child.title}>
//                             <SidebarMenuButton asChild>
//                               <Link
//                                 href={child.href}
//                                 className={`flex items-center gap-2 ${
//                                   pathname === child.href ? "bg-accent" : ""
//                                 }`}
//                               >
//                                 <child.icon className="h-4 w-4" />
//                                 <span>{child.title}</span>
//                               </Link>
//                             </SidebarMenuButton>
//                           </SidebarMenuSubItem>
//                         ))}
//                       </SidebarMenuSub>
//                     </>
//                   ) : (
//                     <SidebarMenuButton asChild>
//                       <Link
//                         href={item.href!}
//                         className={`flex items-center gap-2 ${
//                           pathname === item.href ? "bg-accent" : ""
//                         }`}
//                       >
//                         <item.icon className="h-4 w-4" />
//                         <span>{item.title}</span>
//                       </Link>
//                     </SidebarMenuButton>
//                   )}
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </ShadcnSidebar>
//   );
// }

// components/sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Icons from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import { menuItems } from "@/data/HomeData";

export function AppSidebar() {
  const pathname = usePathname();

  // Get icon component from string name
  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons];

    // Ensure it's a valid React component
    if (typeof Icon === "function") {
      return <Icon className="h-4 w-4" />;
    }

    return null;
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div>
          {/* <h1 className="text-blue-600">YOUR LOGO</h1> */}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isParent = item.children && item.children.length > 0;

                return (
                  <SidebarMenuItem key={item.id}>
                    {isParent ? (
                      <>
                        {/* Parent Button (Not a link) */}
                        <SidebarMenuButton>
                          <div className="flex items-center gap-2 cursor-pointer">
                            {getIcon(item.icon)}
                            <span>{item.title}</span>
                          </div>
                        </SidebarMenuButton>

                        {/* Dropdown Children */}
                        <SidebarMenuSub>
                          {item.children.map((child) => (
                            <SidebarMenuSubItem key={child.id}>
                              <SidebarMenuButton asChild>
                                <Link
                                  href={child.href}
                                  className={`flex items-center gap-2 ${
                                    pathname === child.href
                                      ? "bg-accent text-accent-foreground"
                                      : ""
                                  }`}
                                >
                                  {getIcon(child.icon)}
                                  <span>{child.title}</span>
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </>
                    ) : (
                      // Single-level item
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.href!}
                          className={`flex items-center gap-2 ${
                            pathname === item.href
                              ? "bg-accent text-accent-foreground"
                              : ""
                          }`}
                        >
                          {getIcon(item.icon)}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
