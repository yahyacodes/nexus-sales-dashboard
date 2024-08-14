"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  Grid,
  FileText,
  Users,
  Store,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${isOpen ? "block" : "hidden"} md:block`}>
      <div className="w-64 bg-card h-screen p-4">
        <div className="flex gap-0 mb-8 mt-2.5">
          <svg
            id="logo-72"
            width="40"
            height="20"
            viewBox="0 0 53 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z"
              className="fill-black dark:fill-white"
            ></path>
          </svg>
          <h1 className="font-bold">NexusSales</h1>
        </div>
        <nav className="space-y-2">
          <Button variant="default" className="w-full justify-start">
            <Grid className="mr-2 h-4 w-4" /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="mr-2 h-4 w-4" /> Orders
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <ShoppingCart className="mr-2 h-4 w-4" /> Products
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" /> Customers
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Store className="mr-2 h-4 w-4" /> Store
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" /> Setting
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
