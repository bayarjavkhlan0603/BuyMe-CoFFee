"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export const LoginCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/sign-up");
  };
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-[407px] border-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col gap-2">
                <Label>Email</Label>
                <Input type="email" placeholder="Enter email here" />
              </div>
            </div>
          </form>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col gap-2">
                <Label>Password</Label>
                <Input type="password" placeholder="Enter password here" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="">
          <Button className="w-full">Continue</Button>
        </CardFooter>
      </Card>
      <Button
        onClick={handleClick}
        className="text-black text-[14px] bg-[#F4F4F5] absolute right-20 top-8"
      >
        Sign up
      </Button>
    </div>
  );
};
