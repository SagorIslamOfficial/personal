interface Env {
    MAILGUN_API_KEY: string;
    MAILGUN_DOMAIN: string;
    CONTACT_EMAIL?: string;
}

export const onRequestPost = async (context: {
    request: Request;
    env: Env;
}) => {
    const { request, env } = context;

    try {
        const { name, email, subject, message } = (await request.json()) as {
            name: string;
            email: string;
            subject: string;
            message: string;
        };

        if (!name || !email || !subject || !message) {
            return new Response(
                JSON.stringify({ error: "Missing required fields" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                },
            );
        }

        const API_KEY = env.MAILGUN_API_KEY;
        const DOMAIN = env.MAILGUN_DOMAIN;
        const TO_EMAIL = env.CONTACT_EMAIL || "me@sagorislam.dev";

        if (!API_KEY || !DOMAIN) {
            return new Response(
                JSON.stringify({ error: "Server configuration error" }),
                {
                    status: 500,
                    headers: { "Content-Type": "application/json" },
                },
            );
        }

        // Generate email templates
        const { generateEmailHtml, generateEmailText } = await import(
            "../utils/emailTemplate"
        );

        const emailData = { name, email, subject, message };
        const htmlEmail = generateEmailHtml(emailData);
        const textEmail = generateEmailText(emailData);

        // Create FormData for Mailgun API
        const formData = new FormData();
        formData.append("from", `${name} <postmaster@${DOMAIN}>`);
        formData.append("to", TO_EMAIL);
        formData.append("subject", subject);
        formData.append("text", textEmail);
        formData.append("html", htmlEmail);
        formData.append("h:Reply-To", email);

        // Send to Mailgun API using native fetch
        const response = await fetch(
            `https://api.mailgun.net/v3/${DOMAIN}/messages`,
            {
                method: "POST",
                headers: {
                    Authorization: `Basic ${btoa(`api:${API_KEY}`)}`,
                },
                body: formData,
            },
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Mailgun API error:", errorText);
            return new Response(
                JSON.stringify({
                    error: "Failed to send email via Mailgun",
                    details: errorText,
                }),
                {
                    status: 502,
                    headers: { "Content-Type": "application/json" },
                },
            );
        }

        return new Response(
            JSON.stringify({
                success: true,
                message: "Email sent successfully",
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            },
        );
    } catch (error: unknown) {
        console.error("Function error:", error);
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        return new Response(
            JSON.stringify({
                error: "Internal Server Error",
                details: errorMessage,
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            },
        );
    }
};
