import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";

const resend = new Resend("re_47KSkyNi_HyqxiAsUD8kbp1sPp3x8o5pm");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, firstname, message, subject } = body;
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: subject,
      react: EmailTemplate({
        firstName: firstname,
        Message: message,
        Email: email,
      }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
