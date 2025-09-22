import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { OWNER_DETAILS } from "@/data/owner.data";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Get owner email from centralized data or environment
    const ownerEmail = process.env.OWNER_EMAIL || OWNER_DETAILS.email;
    if (!ownerEmail) {
      console.error(
        "OWNER_EMAIL environment variable is not set and no email in owner data"
      );
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>", // You can customize this
      to: [ownerEmail],
      subject: `New Contact Form Submission from ${name}: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #ff0038, #fe0b54, #ff4400); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Name:</strong>
              <span style="margin-left: 10px; color: #333;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Email:</strong>
              <span style="margin-left: 10px; color: #333;">${email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Subject:</strong>
              <span style="margin-left: 10px; color: #333;">${subject}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #555;">Message:</strong>
              <div style="margin-top: 10px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #ff0038; border-radius: 4px;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <div style="border-top: 1px solid #eee; padding-top: 15px; margin-top: 20px;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                This message was sent from your portfolio contact form at ${new Date().toLocaleString()}.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
