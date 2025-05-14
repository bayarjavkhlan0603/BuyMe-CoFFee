import { Button } from "@/components/ui/button";
import Image from "next/image";

export const LayoutProfile = () => {
  return (
    <div className="py-2 px-4 w-screen ">
      <div className="flex justify-between items-center">
        <Image src={"/Logo.png"} alt="logo" width={160} height={50} />
        <Button className="bg-[#F4F4F5] text-black">Log out</Button>
      </div>
    </div>
  );
};
