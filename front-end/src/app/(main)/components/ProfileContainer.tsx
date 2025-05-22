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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Camera } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const profileSchema = z.object({
  photo: z.string().min(1, { message: "Please enter image" }),
  name: z.string().min(1, { message: "Please enter name" }),
  about: z.string().min(1, { message: "Please enter info about yourself" }),
  media: z.string().min(1, { message: "Please enter a social link" }),
});

export const ProfileContainer = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      photo: "",
      name: "",
      about: "",
      media: "",
    },
  });

  const onSubmit = (values: z.infer<typeof profileSchema>) => {
    console.log(values.photo, values.name, values.about, values.media);
    setStep(1);
  };

  return (
    <Card className="w-[510px] border-0 shadow-none">
      <Form {...form}>
        <form
          className="flex flex-col gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <CardHeader>
            <CardTitle className="text-2xl">
              Complete your profile page
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div>
              <FormField
                control={form.control}
                name="photo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Add photo</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="w-40 h-40 rounded-full border-dashed border-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>About</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write about yourself here"
                        className="resize-none h-[131px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="media"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Social media URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="w-[246px]" type="submit">
              Continue
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
