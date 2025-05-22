import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const LayoutHome = () => {
  return (
    <div className="py-2 px-4 w-screen flex justify-center">
      <div className="flex justify-between items-center w-[90%]">
        <Image src={"/Logo.png"} alt="logo" width={160} height={50} />
        <Select>
          <SelectTrigger className="w-[180px] px-4 border-0 shadow-none">
            <div className="flex gap-2 items-center">
              <Avatar>
                <AvatarImage
                  className="w-10 h-10 object-cover"
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-black text-[14px] font-medium">Jake</p>
            </div>
          </SelectTrigger>
          <SelectContent className="p-0">
            <SelectGroup className="p-0">
              <Button className="w-full bg-white text-black flex p-0">
                Log out
              </Button>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
