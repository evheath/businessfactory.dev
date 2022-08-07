import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from "zod";

type Data = {
  name: string
}

export default function (req: NextApiRequest, res: NextApiResponse) {
  console.log("api/contact hit", req.body);




  const data = z
    .object({
      name: z.string().min(1, { message: 'Name is required' }),
      email: z.string().email({ message: 'Invalid email format' }),
      howCanWeHelp: z.string().min(1, { message: '"Tell me about your idea" is required' }),
      phone: z.string().nullish(),
      company: z.string().nullish(),
      howDidYouHearAboutUs: z.string().nullish(),
    })
    .safeParse(req.body);

  if (!data.success) {
    console.log(data.error.issues);
    // const errorRes: Data =
    res.status(400).json({
      errors: data.error.issues,
    });

  }
  res.status(200);
}