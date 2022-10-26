import {
  createTestAccount,
  createTransport,
  getTestMessageUrl,
} from "nodemailer";
const EMAIL_FROM = "no-reply@businessfactory.dev";
async function getTransporter() {
  if (process.env.NODE_ENV === "development") {
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
  console.log("process.env.EMAIL_PASSWORD", process.env.EMAIL_PASSWORD);

  return createTransport({
    host: "smtpout.secureserver.net",
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
  const result = await transport.sendMail({
    to,
    from: EMAIL_FROM,
    subject,
    text,
    html,
  });
  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
  }
  console.log("Preview of email: %s", getTestMessageUrl(result));
}
