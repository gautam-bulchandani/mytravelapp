// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendEmail } from "@/helper/emailer";
import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "react-dom";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = req.body;
  const message = `
    Name : ${data.name} <br/>
    Phone : ${data.phone} <br/>
    Product Name : ${data.productName} <br/>
    Message : ${data.message} <br/>
    Customer Email : ${data.email} <br/>
  `;
  await sendEmail({
    to: "gbulchandani@horizontal.com",
    subject: "New email for product enquiry",
    html: message,
  });

  return res.status(200).json({ message: "Email sent successfully" });
}
