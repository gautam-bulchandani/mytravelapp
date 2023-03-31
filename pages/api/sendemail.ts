// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendEmail } from "@/helper/emailer";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = req.body;
  await sendEmail({
    to: data.email,
    subject: "New email for product enquiry",
    html: data.name,
  });

  return res.status(200).json({ message: "Email sent successfully" });
}
