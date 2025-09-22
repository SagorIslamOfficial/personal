/// <reference types="@cloudflare/workers-types" />
import FormData from "form-data";
import Mailgun from "mailgun.js";

export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function onRequestPost({
    request,
    env,
}: {
    request: Request;
    env: { MAILGUN_API_KEY: string; MAILGUN_DOMAIN: string };
}) {
    const data: ContactForm = await request.json();

    // Simple validation
    if (!data.email || !data.message) {
        return new Response("Bad Request", { status: 400 });
    }

    try {
        // Initialize Mailgun client
        const mailgun = new Mailgun(FormData);
        const mg = mailgun.client({
            username: "api",
            key: env.MAILGUN_API_KEY,
        });

        // Send email using Mailgun SDK
        const result = await mg.messages.create(env.MAILGUN_DOMAIN, {
            from: `${data.name} <postmaster@${env.MAILGUN_DOMAIN}>`,
            to: ["alaminislam1274@gmail.com"],
            subject: data.subject || "New contact query - sagorislam.dev",
            text: `
    From: ${data.name} (${data.email})
    Subject: ${data.subject}

    Message:
    ${data.message}

    --
    This message was sent from your portfolio contact form.
    Reply-To: ${data.email}
            `,
            "h:Reply-To": data.email,
        });

        console.log("Email sent successfully:", result);
        return new Response("OK", { status: 200 });
    } catch (error) {
        console.error("Mailgun error:", error);
        return new Response("Email failed", { status: 502 });
    }
}
