"use client";

import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import UserDropdown from "./UserDropdown";
import { Button } from "@/components/ui/button";
import { RiMenu4Fill } from "react-icons/ri";
import { useSidebar } from "@/components/ui/sidebar";

const Topbar = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <div
      className="fixed top-0 left-0 z-30 w-full h-14 border-b bg-white dark:bg-card flex justify-between items-center
                    px-1 md:pl-[17rem] md:pr-4 flex-shrink-0"
    >
      {/* Search */}
      <div className="flex-1 mr-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-md border px-3 py-2 text-sm
                     focus:outline-none focus:ring focus:ring-primary
                     dark:bg-background dark:border-gray-700 dark:text-white"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <ThemeSwitch />
        <UserDropdown />
        <Button type="button" size="icon" className="text-xl ms-2 md:hidden">
          <RiMenu4Fill />
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
