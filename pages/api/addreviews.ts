// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { connectToDatabase } from "@/helper/mongoclient";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method === "POST") {
      const data = req.body;

      const client = await connectToDatabase();
      const db = client.db();
      const newsCollection = db.collection("Reviews");
      await newsCollection.insertOne(data);
      res.status(201).json({ message: "Data Inserted" });
      client.close();
    }
  } catch (ex) {
    console.log(ex);
  }
}
