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
import { FormInput } from "./FormInput";

export const UsernameCard = ({ setStep }: { setStep: () => void }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-[407px] border-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl">Create Your Account</CardTitle>
          <CardDescription className="text-[14px] ">
            Choose a username for your page
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormInput
            type="name"
            label="Username"
            placeholder="Enter username here"
            error="userName!!!"
          />
        </CardContent>
        <CardFooter>
          <Button onClick={setStep} className="w-full">
            Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
