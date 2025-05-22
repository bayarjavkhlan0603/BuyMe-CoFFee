"use client";

import { AccountSetings } from "@/app/(main)/components/AccountSetting";
import { DashboardProfile } from "@/app/(main)/components/DashboardProfile";
import { ExplorePage } from "@/app/(main)/components/ExplorePage";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

type type = "home" | "explore" | "settings";

export default function () {
  const [activeComponent, setActiveComponent] = useState<type>("home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <DashboardProfile />;
      case "explore":
        return <ExplorePage />;
      case "settings":
        return <AccountSetings />;
      default:
        return <DashboardProfile />;
    }
  };

  const router = useRouter();

  const handleClick = () => {
    router.push("/view-page");
  };

  return (
    <div className="flex px-20 justify-between">
      <div className="flex flex-col gap-1 w-[250px]">
        <Button
          onClick={() => setActiveComponent("home")}
          className="flex rounded-md py-2 px-4 bg-white text-black justify-between shadow-none hover:bg-[#F4F4F5]"
        >
          Home
        </Button>
        <Button
          onClick={() => setActiveComponent("explore")}
          className="flex rounded-md py-2 px-4 bg-white text-black justify-between shadow-none hover:bg-[#F4F4F5]"
        >
          Explore
        </Button>
        <Button
          onClick={handleClick}
          className="flex rounded-md py-2 px-4 bg-white text-black justify-between shadow-none hover:bg-[#F4F4F5]"
        >
          View page
        </Button>
        <Button
          onClick={() => setActiveComponent("settings")}
          className="flex rounded-md py-2 px-4 bg-white text-black justify-between shadow-none hover:bg-[#F4F4F5]"
        >
          Account settings
        </Button>
      </div>
      <div>{renderComponent()}</div>
    </div>
  );
}
