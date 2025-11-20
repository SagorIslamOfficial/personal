interface EmailTemplateData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

/**
 * Simple markdown to HTML converter
 */
function markdownToHtml(text: string): string {
    return (
        text
            // Headers
            .replace(
                /^### (.*$)/gim,
                '<h3 style="margin: 16px 0 8px 0; color: #1a1a1a; font-size: 16px; font-weight: 600;">$1</h3>',
            )
            .replace(
                /^## (.*$)/gim,
                '<h2 style="margin: 20px 0 10px 0; color: #1a1a1a; font-size: 18px; font-weight: 600;">$1</h2>',
            )
            .replace(
                /^# (.*$)/gim,
                '<h1 style="margin: 24px 0 12px 0; color: #1a1a1a; font-size: 20px; font-weight: 600;">$1</h1>',
            )
            // Bold
            .replace(
                /\*\*(.*?)\*\*/g,
                '<strong style="font-weight: 600; color: #1a1a1a;">$1</strong>',
            )
            .replace(
                /__(.*?)__/g,
                '<strong style="font-weight: 600; color: #1a1a1a;">$1</strong>',
            )
            // Italic
            .replace(/\*(.*?)\*/g, '<em style="font-style: italic;">$1</em>')
            .replace(/_(.*?)_/g, '<em style="font-style: italic;">$1</em>')
            // Inline code
            .replace(
                /`([^`]+)`/g,
                '<code style="background-color: #f5f5f5; padding: 2px 6px; border-radius: 3px; font-family: monospace; font-size: 13px; color: #e83e8c;">$1</code>',
            )
            // Links
            .replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                '<a href="$2" style="color: #0066cc; text-decoration: none;">$1</a>',
            )
            // Line breaks
            .replace(/\n/g, "<br>")
    );
}

/**
 * Generates HTML email template
 */
export function generateEmailHtml(data: EmailTemplateData): string {
    const { name, email, subject, message } = data;
    const formattedMessage = markdownToHtml(message);
    const timestamp = new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
    const replyBody = `\n\n\nOn ${timestamp}, ${name} wrote:\n\n${message}`;

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Message from ${name}</title>
    <style>
        @media only screen and (max-width: 600px) {
            .email-container { width: 100% !important; max-width: 100% !important; }
            .email-padding { padding: 20px !important; }
            .email-padding-sm { padding: 16px 20px !important; }
            .header-text { font-size: 20px !important; line-height: 1.4 !important; }
            .sender-info { display: block !important; }
            .sender-info td { display: block !important; width: 100% !important; text-align: left !important; }
            .reply-button { margin-top: 12px !important; width: 100% !important; text-align: center !important; justify-content: center !important; }
            .footer-info { display: block !important; }
            .footer-info td { display: block !important; width: 100% !important; text-align: center !important; margin-bottom: 8px !important; }
            .message-body { font-size: 14px !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; background-color: #f6f6f6; line-height: 1.6;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f6f6f6; padding: 20px 10px;">
        <tr>
            <td align="center">
                <table class="email-container" width="700" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); max-width: 700px; width: 100%;">
                    
                    <tr>
                        <td class="email-padding" style="padding: 32px 40px; border-bottom: 1px solid #e5e5e5;">
                            <h1 class="header-text" style="margin: 0; font-size: 24px; font-weight: 600; color: #1a1a1a; line-height: 1.3;">
                                ${subject}
                            </h1>
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="email-padding-sm" style="padding: 24px 40px; background-color: #fafafa; border-bottom: 1px solid #e5e5e5;">
                            <table class="sender-info" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="vertical-align: top;">
                                        <p style="margin: 0; font-size: 14px; color: #666666;">From</p>
                                        <p style="margin: 4px 0 0 0; font-size: 15px; color: #1a1a1a; font-weight: 500;">${name}</p>
                                    </td>
                                    <td align="right" style="vertical-align: top;">
                                        <a class="reply-button" href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}&body=${encodeURIComponent(replyBody)}" style="display: inline-flex; align-items: center; background-color: #F59E0B; color: #fff; text-decoration: none; font-size: 14px; padding: 10px 20px; border-radius: 6px; font-weight: 600;">
                                            Reply
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            <p style="margin: 12px 0 0 0; font-size: 14px; color: #666666;">
                                <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a>
                            </p>
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="email-padding message-body" style="padding: 32px 40px;">
                            <div style="color: #1a1a1a; font-size: 15px; line-height: 1.6;">
                                ${formattedMessage}
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="email-padding-sm" style="padding: 24px 40px; background-color: #fafafa; border-top: 1px solid #e5e5e5;">
                            <table class="footer-info" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="vertical-align: middle;">
                                        <p style="margin: 0; font-size: 13px; color: #999999;">
                                            Sent via <a href="https://sagorislam.dev" style="color: #0066cc; text-decoration: none;">sagorislam.dev</a>
                                        </p>
                                    </td>
                                    <td align="right" style="vertical-align: middle;">
                                        <p style="margin: 0; font-size: 12px; color: #999999;">
                                            ${timestamp}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                </table>
                
                <table class="email-container" width="700" cellpadding="0" cellspacing="0" style="margin-top: 20px; max-width: 700px; width: 100%;">
                    <tr>
                        <td style="text-align: center; padding: 0 20px;">
                            <p style="margin: 0; font-size: 12px; color: #999999; line-height: 1.5;">
                                This message was sent from your portfolio contact form.
                            </p>
                        </td>
                    </tr>
                </table>
                
            </td>
        </tr>
    </table>
</body>
</html>
    `.trim();
}

/**
 * Generates plain text email (fallback)
 */
export function generateEmailText(data: EmailTemplateData): string {
    const { name, email, subject, message } = data;
    const timestamp = new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
    });

    return `
${subject}

From: ${name}
Email: ${email}

────────────────────────────────────────

${message}

────────────────────────────────────────

Sent via sagorislam.dev
${timestamp}
    `.trim();
}
