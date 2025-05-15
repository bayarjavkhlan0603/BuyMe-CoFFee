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
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({ message: "please enter a valid email" }),
  password: z
    .string()
    .min(8, { message: "please should be more than 8 letters" }),
});

export const EmailPasswordCard = ({ username }: { username: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values.email, values.password);
  };

  const router = useRouter();

  const handleClickProfile = () => {
    router.push("/profile");
  };

  const handleClick = () => {
    router.push("/login");
  };
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-[407px] border-0 shadow-none">
        <Form {...form}>
          <form
            className="flex flex-col gap-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <CardHeader>
              <CardTitle className="text-2xl">Welcome, {username}</CardTitle>
              <CardDescription className="text-[14px]">
                Connect email and set a password
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter email here"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter password here"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="">
              <Button onClick={handleClickProfile} className="w-full">
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
