/// <reference types="@cloudflare/workers-types" />

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
    try {
        const data: ContactForm = await request.json();

        // Simple validation
        if (!data.email || !data.message) {
            return new Response("Bad Request", { status: 400 });
        }

        // Build form data using Web API FormData (Works in Workers)
        const formData = new FormData();
        formData.append(
            "from",
            `${data.name} <postmaster@${env.MAILGUN_DOMAIN}>`,
        );
        formData.append(
            "to",
            "sagor_islam@icloud.com,alaminislam1274@gmail.com",
        );
        formData.append(
            "subject",
            data.subject || "New contact query - sagorislam.dev",
        );
        formData.append(
            "text",
            `
    From: ${data.name} (${data.email})
    Subject: ${data.subject}

    Message:
    ${data.message}

    --
    This message was sent from your portfolio contact form.
    Reply-To: ${data.email}
        `,
        );
        formData.append("h:Reply-To", data.email);

        // Send via Mailgun API
        const response = await fetch(
            `https://api.mailgun.net/v3/${env.MAILGUN_DOMAIN}/messages`,
            {
                method: "POST",
                headers: {
                    Authorization: `Basic ${btoa(`api:${env.MAILGUN_API_KEY}`)}`,
                },
                body: formData,
            },
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Mailgun API error:", errorText);
            return new Response(`Email failed: ${errorText}`, { status: 502 });
        }

        const result = await response.json();
        console.log("Email sent successfully:", result);
        return new Response("OK", { status: 200 });
    } catch (error) {
        console.error("Function error:", error);
        return new Response(`Server error: ${error}`, { status: 500 });
    }
}
