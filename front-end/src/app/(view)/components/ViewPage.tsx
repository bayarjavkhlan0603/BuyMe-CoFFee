"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Camera, Coffee } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const ViewPage = () => {
  const [coverImage, setCoverImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);
    }
  };

  return (
    <div className="relative">
      <div className="relative w-full h-[319px]">
        <div
          className="w-full h-full bg-gray-100 flex items-center justify-center bg-center bg-cover"
          style={{
            backgroundImage: coverImage ? `url(${coverImage})` : "none",
          }}
        >
          {!coverImage && (
            <label className="px-4 py-2 bg-gray-900 text-white rounded-md cursor-pointer hover:opacity-90">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="flex gap-2 items-center">
                <Camera className="w-4 h-4" /> Add a cover image
              </div>
            </label>
          )}
        </div>
      </div>

      <div className="flex gap-5 absolute top-[75%] left-[10%]">
        <div className="flex flex-col gap-5 w-158">
          <div className="flex flex-col gap-2 p-6 border-[1px] border-[#E4E4E7] rounded-lg bg-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-[20px] font-bold">Jake</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Edit page</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[558px]">
                  <Card className="p-0 border-0 shadow-none">
                    <CardHeader className="p-0">
                      <CardTitle className="text-[20px] font-semibold">
                        Edit profile
                      </CardTitle>
                      <CardDescription className="text-[14px] text-[#71717A]">
                        Make changes to your profile here. Click save when
                        you're done.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <form>
                        <div className="grid w-full items-center gap-4">
                          <div className="flex flex-col space-y-1.5">
                            <Label>Add photo</Label>
                            <Input
                              className="w-40 h-40 rounded-full"
                              type="file"
                            />
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label>Name</Label>
                            <Input placeholder="Name of your project" />
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label>Framework</Label>
                            <Textarea
                              placeholder="Please write your message here"
                              className="resize-none h-[131px]"
                            />
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label>Name</Label>
                            <Input placeholder="Name of your project" />
                          </div>
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter className="p-0 gap-3 justify-end">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save changes</Button>
                    </CardFooter>
                  </Card>
                </DialogContent>
              </Dialog>
            </div>
            <Separator className="my-4" />
            <div className="flex flex-col gap-3">
              <p className="font-semibold">About Jake</p>
              <p>
                I’m a typical person who enjoys exploring different things. I
                also make music art as a hobby. Follow me along.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-6 border-[1px] rounded-lg border-[#E4E4E7]">
            <p className="font-semibold">Social media URL</p>
            <p>https://buymeacoffee.com/spacerulz44</p>
          </div>
          <div className="flex flex-col gap-3 p-6 border-[1px] rounded-lg border-[#E4E4E7]">
            <p className="font-semibold">Recent Supporters</p>
            <div className="p-6 border-[1px] border-[#E4E4E7] rounded-lg">
              <div className="flex flex-col justify-center items-center">
                <div className="p-[17.7px]">
                  <Image
                    src={"/heart.svg"}
                    alt="heart"
                    width={28}
                    height={28}
                  />
                </div>
                <p className="font-semibold">
                  Be the first one to support Jake
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 w-157 h-full flex flex-col gap-8 border-[1px] border-[#E4E4E7] rounded-lg bg-white">
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-semibold">Buy Jake a Coffee</p>
            <div className="flex flex-col gap-2">
              <p className="text-[14px]">Select amount:</p>
              <div className="flex gap-3">
                <Button className="bg-[#F4F4F5] text-black">
                  <Coffee />
                  $1
                </Button>
                <Button className="bg-[#F4F4F5] text-black">
                  <Coffee />
                  $2
                </Button>
                <Button className="bg-[#F4F4F5] text-black">
                  <Coffee />
                  $5
                </Button>
                <Button className="bg-[#F4F4F5] text-black">
                  <Coffee />
                  $10
                </Button>
              </div>
            </div>
          </div>

          <Card className="p-0 border-0 shadow-none">
            <CardContent className="p-0">
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label>Enter BuyMeCoffee or social acount URL:</Label>
                    <Input id="name" placeholder="URL" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label>Special message:</Label>
                    <Textarea
                      placeholder="Please write your message here"
                      className="resize-none h-[131px]"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          <Button>Support</Button>
        </div>
      </div>
    </div>
  );
};
