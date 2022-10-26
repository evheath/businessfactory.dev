import { sendEmail } from "@/utils/smtp";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export default function contactAPI(req: NextApiRequest, res: NextApiResponse) {
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
    })
    .safeParse(req.body);

  if (!zodParse.success) {
    console.log("zodParse.error", zodParse.error);

    res.status(400).json({
      errors: zodParse.error.issues,
    });
    return;
  }
  sendEmail({
    to: "elliot@businessfactory.dev",
    subject: "New contact form submission",
    text: JSON.stringify(zodParse.data, null, 2),
    html: `<div><pre>${JSON.stringify(zodParse.data, null, 2)}</pre></div>`,
  });

  res.status(200).json({ name: zodParse.data.name });
}
