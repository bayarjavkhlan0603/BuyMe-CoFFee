"use client";

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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { CircleX } from "lucide-react";

const formSchema = z.object({
  username: z
    .string({ required_error: "Enter username" })
    .min(4, { message: "please enter at least 4 letters" }),
});

export const UsernameCard = ({
  setStep,
  setUsername,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setUsername(values.username);
    setStep(1);
  };

  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-[407px] border-0 shadow-none">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <CardHeader>
              <CardTitle className="text-2xl">Create Your Account {}</CardTitle>
              <CardDescription className="text-[14px] ">
                Choose a username for your page
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter username here"
                        type="username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Continue
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      <Button
        onClick={handleClick}
        className="text-black text-[14px] bg-[#F4F4F5] absolute right-20 top-8"
      >
        Login
      </Button>
    </div>
  );
};
