"use client"

import React from "react";
import { LuChevronRight } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

import { adminAppSidebarMenu } from "@/lib/adminSidebarMenu";
import logoBlack from "@/public/assets/images/logo-black.png";
import logoWhite from "@/public/assets/images/logo-white.png";

const AppSidebar = () => {
  const {toggleSidebar}= useSidebar()
  return (
   // AppSidebar.jsx
<Sidebar className="z-50">
  {/* HEADER */}
  <SidebarHeader className="border-b h-14 p-0 flex-shrink-0">
    <div className="flex justify-between items-center px-4">
      <Image
        src={logoBlack.src}
        height={50}
        width={logoBlack.width}
        className="block dark:hidden h-[50px] w-auto"
        alt="logo black"
      />
      <Image
        src={logoWhite.src}
        height={50}
        width={logoWhite.width}
        className="hidden dark:block h-[50px] w-auto"
        alt="logo white"
      />
      <Button type="button" size="icon">
        <IoMdClose className="text-xl" />
      </Button>
    </div>
  </SidebarHeader>

  {/* CONTENT */}
  <SidebarContent className="p-3 overflow-auto">
    <SidebarMenu>
      {adminAppSidebarMenu.map((menu, index) => (
        <Collapsible key={index} className="group/collapsible transition-all">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton
                asChild
                className="flex items-center gap-3 px-4 py-3 font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                <Link href={menu.url} className="flex items-center gap-3 w-full">
                  <menu.icon className="text-2xl" />
                  <span className="flex-1">{menu.title}</span>
                  {menu.submenu && menu.submenu.length > 0 && (
                    <LuChevronRight className="ml-auto text-xl transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90" />
                  )}
                </Link>
              </SidebarMenuButton>
            </CollapsibleTrigger>

            {menu.submenu && menu.submenu.length > 0 && (
              <CollapsibleContent>
                <SidebarMenuSub className="ml-8 mt-1">
                  {menu.submenu.map((submenuItem, subIndex) => (
                    <SidebarMenuSubItem key={subIndex}>
                      <SidebarMenuSubButton
                        asChild
                        className="px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <Link href={submenuItem.url}>{submenuItem.title}</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            )}
          </SidebarMenuItem>
        </Collapsible>
      ))}
    </SidebarMenu>
  </SidebarContent>
</Sidebar>

  );
};

export default AppSidebar;
