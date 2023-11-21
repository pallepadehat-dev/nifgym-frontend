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
import { LoaderIcon, Send } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const formSchema = z.object({
  firstname: z.string().min(1, {
    message: "Du skal udfylde dit navn og efternavn.",
  }),
  email: z.string().email({
    message: "Du skal bruge en gyldig email adresse",
  }),
  message: z.string().min(1, {
    message: "Du skal beskrive dit problem.",
  }),
  subject: z.string().min(1, {
    message: "Du skal skrive et subject!",
  }),
});

const KontaktForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // await axios.post("/api/send", values);
    toast.success("Vi har modtaget din mail.");
    router.replace("/");
    form.reset();
  }

  const { isSubmitting, isValid } = form.formState;

  return (
    <div className="w-full flex justify-center items-center pb-5 pt-5 flex-col">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-2xl font-semibold lg:text-5xl">Kontakt Formular</h1>
        <p className="text-lg text-gray-600 lg:text-xl">
          Vi svarer hurtigtst muligt.
        </p>
      </div>
      <div className="w-1/2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fornavn</FormLabel>
                  <FormControl>
                    <Input placeholder="Dit fornavn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Kort overskrift" {...field} />
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
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Skirv din email her"
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
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Beskrivelse</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Skriv din besked her." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="mt-2 flex flex-row gap-2 items-center"
              disabled={!isValid}
            >
              {isSubmitting && <LoaderIcon className="w-4 h-4 animate-spin" />}
              {!isSubmitting && <Send className="w-4 h-4" />} <span>Send</span>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default KontaktForm;
