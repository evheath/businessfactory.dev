import { sendEmail } from "@/utils/smtp";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export default async function contactAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const zodParse = z
    .object({
      name: z.string().min(1, { message: "Name is required" }),
      email: z.string().email({ message: "Invalid email format" }),
      howCanWeHelp: z
        .string()
        .min(1, { message: '"Tell me about your idea" is required' }),
      phone: z.string().nullish(),
      company: z.string().nullish(),
      howDidYouHearAboutUs: z.string().nullish(),
      budget: z.string().min(1, { message: "Budget is required" }),
      "g-recaptcha-response": z
        .string()
        .min(1, { message: "Captcha is required" }),
    })
    .safeParse(req.body);

  if (!zodParse.success) {
    console.log("zodParse.error", zodParse.error);

    res.status(400).json({
      errors: zodParse.error.issues,
    });
    return;
  }

  // verify captcha
  const captchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${zodParse.data["g-recaptcha-response"]}`,
    {
      method: "POST",
    }
  );
  const captchaData = await captchaResponse.json();
  if (!captchaData.success) {
    res.status(400).json({
      errors: [
        {
          path: ["g-recaptcha-response"],
          message: "Captcha is invalid",
        },
      ],
    });
    return;
  }

  await sendEmail({
    to: "elliot@businessfactory.dev",
    subject: "New contact form submission",
    text: JSON.stringify(zodParse.data, null, 2),
    html: `<div><pre>${JSON.stringify(zodParse.data, null, 2)}</pre></div>`,
  });

  res.status(200).json({ name: zodParse.data.name });
}
