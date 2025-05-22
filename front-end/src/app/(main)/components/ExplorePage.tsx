import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";

export const ExplorePage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/view-page");
  };

  return (
    <ScrollArea className="h-165">
      <div className="w-[957px] h-full p-6 flex flex-col gap-6">
        <p className="text-[20px] font-semibold">Explore creators</p>
        <Input placeholder="Search name" className="w-64" />
        <div className="p-6 border-[1px] border-[#E4E4E7] rounded-lg flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-[20px] font-semibold">Space ranger</p>
            </div>
            <Button onClick={handleClick} className="bg-[#F4F4F5] text-black">
              View profile
            </Button>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-[420.5px]">
              <p className="font-semibold">About Space ranger</p>
              <p className="leading-5">
                All day, every day, we're watching, listening to, reading and
                absorbing politics. It's exhausting. We then report on what
                we've seen in a way that's as chill as possible. None of the
                sensationalism and division you'll find elsewhere. It's about
                clarity, focus, approachability, and having a little wry smile
                almost all the time.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Social media URL</p>
              <p>https://buymeacoffee.com/baconpancakes1</p>
            </div>
          </div>
        </div>
        <div className="p-6 border-[1px] border-[#E4E4E7] rounded-lg flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-[20px] font-semibold">Space ranger</p>
            </div>
            <Button className="bg-[#F4F4F5] text-black">View profile</Button>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-[420.5px]">
              <p className="font-semibold">About Space ranger</p>
              <p className="leading-5">
                All day, every day, we're watching, listening to, reading and
                absorbing politics. It's exhausting. We then report on what
                we've seen in a way that's as chill as possible. None of the
                sensationalism and division you'll find elsewhere. It's about
                clarity, focus, approachability, and having a little wry smile
                almost all the time.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Social media URL</p>
              <p>https://buymeacoffee.com/baconpancakes1</p>
            </div>
          </div>
        </div>
        <div className="p-6 border-[1px] border-[#E4E4E7] rounded-lg flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-[20px] font-semibold">Space ranger</p>
            </div>
            <Button className="bg-[#F4F4F5] text-black">View profile</Button>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-[420.5px]">
              <p className="font-semibold">About Space ranger</p>
              <p className="leading-5">
                All day, every day, we're watching, listening to, reading and
                absorbing politics. It's exhausting. We then report on what
                we've seen in a way that's as chill as possible. None of the
                sensationalism and division you'll find elsewhere. It's about
                clarity, focus, approachability, and having a little wry smile
                almost all the time.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Social media URL</p>
              <p>https://buymeacoffee.com/baconpancakes1</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};
