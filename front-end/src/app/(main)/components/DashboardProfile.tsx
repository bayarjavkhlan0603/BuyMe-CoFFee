import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";

export const DashboardProfile = () => {
  return (
    <div className="px-6 flex flex-col gap-6 w-[907px] pb-[59px]">
      <div className="p-6 flex flex-col gap-3 border-[1px] border-[#E4E4E7] rounded-lg">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="font-bold">Jacke</p>
              <p>buymeacoffee.com/baconpancakes1</p>
            </div>
          </div>
          <Button>Share page link</Button>
        </div>
        <div>
          <Separator className="my-4" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <p className="text-[20px] font-semibold">Earnings</p>
            <Select>
              <SelectTrigger className="w-[175px] px-4 py-2">
                <SelectValue placeholder="Last 30 days" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Last 30 days</SelectItem>
                  <SelectItem value="banana">Last 90 days</SelectItem>
                  <SelectItem value="blueberry">All time</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <p className="text-4xl font-bold">$450</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-semibold">Recent transactions</p>
          <Select>
            <SelectTrigger className="w-[109px]">
              <SelectValue placeholder="Amount" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      $1
                    </label>
                  </div>
                </SelectItem>
                <SelectItem value="banana">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      $2
                    </label>
                  </div>
                </SelectItem>
                <SelectItem value="blueberry">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      $5
                    </label>
                  </div>
                </SelectItem>
                <SelectItem value="grapes">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      $10
                    </label>
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <ScrollArea className="p-6 border-[1px] border-[#E4E4E7] rounded-lg flex flex-col gap-4 max-h-165">
          <div className="p-3 flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">Guest</p>
                  <p>instagram.com/welesley</p>
                </div>
              </div>
              <div></div>
            </div>
            <p>
              Thank you for being so awesome everyday! You always manage to
              brighten up my day when I’m feeling down. Although $1 isn’t that
              much money it’s all I can contribute at the moment
            </p>
          </div>
          <div className="p-3 flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">Guest</p>
                  <p>instagram.com/welesley</p>
                </div>
              </div>
              <div></div>
            </div>
            <p>
              Thank you for being so awesome everyday! You always manage to
              brighten up my day when I’m feeling down. Although $1 isn’t that
              much money it’s all I can contribute at the moment{" "}
            </p>
          </div>
          <div className="p-3 flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">Guest</p>
                  <p>instagram.com/welesley</p>
                </div>
              </div>
              <div></div>
            </div>
            <p>
              Thank you for being so awesome everyday! You always manage to
              brighten up my day when I’m feeling down. Although $1 isn’t that
              much money it’s all I can contribute at the moment{" "}
            </p>
          </div>
          <div className="p-3 flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">Guest</p>
                  <p>instagram.com/welesley</p>
                </div>
              </div>
              <div></div>
            </div>
            <p>
              Thank you for being so awesome everyday! You always manage to
              brighten up my day when I’m feeling down. Although $1 isn’t that
              much money it’s all I can contribute at the moment{" "}
            </p>
          </div>
          <div className="p-3 flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">Guest</p>
                  <p>instagram.com/welesley</p>
                </div>
              </div>
              <div></div>
            </div>
            <p>
              Thank you for being so awesome everyday! You always manage to
              brighten up my day when I’m feeling down. Although $1 isn’t that
              much money it’s all I can contribute at the moment{" "}
            </p>
          </div>
          <div className="p-3 flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">Guest</p>
                  <p>instagram.com/welesley</p>
                </div>
              </div>
              <div></div>
            </div>
            <p>
              Thank you for being so awesome everyday! You always manage to
              brighten up my day when I’m feeling down. Although $1 isn’t that
              much money it’s all I can contribute at the moment{" "}
            </p>
          </div>
          <div className="p-3 flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">Guest</p>
                  <p>instagram.com/welesley</p>
                </div>
              </div>
              <div></div>
            </div>
            <p>
              Thank you for being so awesome everyday! You always manage to
              brighten up my day when I’m feeling down. Although $1 isn’t that
              much money it’s all I can contribute at the moment{" "}
            </p>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
