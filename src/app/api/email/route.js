import Email from "@/app/components/emails/certificateSubmitEmail";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req, res) {
  try {
    const body = await req.json();
    console.log(body);
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "shindepraveen002@gmail.com",
      subject: `hello wordl ${body.certificate_name}`,
      react: Email({
        certificate_name: body.certificate_name,
        company: body.company,
        level: body.level,
        email: body.email,
        site_url: body.site_url,
      }),
    });
    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
