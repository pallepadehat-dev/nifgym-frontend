"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import Image from "next/image";

const formSchema = z.object({
  firstname: z.string(),
  email: z.string().email({
    message: "DU skal bruge en gyldig mail adresse.",
  }),
  message: z.string().min(10, {
    message: "Du skal skrive mindst 10 ord.",
  }),
});

const KontaktForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full h-auto bg-gray-100 flex justify-center pb-5">
      <div className="w-1/2">
        <div className="flex flex-col items-center justify-center pb-8 w-full">
          <h1 className="text-3xl font-semibold lg:text-5xl">
            Kontakt Formular
          </h1>
          <p className="text-lg text-gray-600">Vi svarer hurtigst muligt</p>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="w-full lg:w-2/3 pr-0 md:pr-8 mb-6 md:mb-0">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Navn</FormLabel>
                      <FormControl>
                        <Input placeholder="Fornavn & Efternavn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-Mail</FormLabel>
                      <FormControl>
                        <Input placeholder="eksample@mail.dk" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Besked</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Skriv din besked her"
                          {...field}
                          style={{ resize: "vertical" }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Indsend</Button>
              </form>
            </Form>
          </div>
          <div className="md:w-1/2 lg:w-1/3 relative h-64 md:h-[auto] mt-6 md:mt-0 hidden lg:block">
            <div className="w-full h-full rounded-xl overflow-hidden">
              <div style={{ position: "relative", paddingBottom: "100%" }}>
                <Image src="/forsideImage3.jpg" alt="image" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktForm;
