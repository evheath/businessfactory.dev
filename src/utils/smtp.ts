import {
  createTestAccount,
  createTransport,
  getTestMessageUrl,
} from "nodemailer";
const EMAIL_FROM = process.env.EMAIL_FROM as string;
async function getTransporter() {
  if (process.env.NODE_ENV === "development") {
    console.log("Creating test account");

    const testAccount = await createTestAccount();
    return createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }
  console.log("Creating production account");

  return createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth: {
      user: EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD as string,
    },
  });
}

export async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html: string;
}) {
  const transport = await getTransporter();
  console.log("Got transporter, sending email");

  const result = await transport.sendMail({
    to,
    from: EMAIL_FROM,
    subject,
    text,
    html,
  });
  console.log("Email sent");

  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    console.log("Failed to send email", failed);

    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
  }

  console.log("Preview of email: %s", getTestMessageUrl(result));
}
