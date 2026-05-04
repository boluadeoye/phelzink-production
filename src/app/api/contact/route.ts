import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Here is where you would integrate Resend, SendGrid, or Nodemailer
    // Example: await resend.emails.send({ ... })
    
    console.log("Contact Form Submission:", body);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
