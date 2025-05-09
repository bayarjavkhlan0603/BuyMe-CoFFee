import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const EmailPasswordCard = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-[407px] border-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome, baconpancakes1</CardTitle>
          <CardDescription className="text-[14px]">
            Connect email and set a password
          </CardDescription>
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
    </div>
  );
};
