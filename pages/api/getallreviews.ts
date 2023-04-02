// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import Review from "@/models/review";
import { connectToDatabase } from "@/helper/mongoclient";

type Data = {
  reviews: Review[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const newsCollection = db.collection("Reviews");
    const allReviewsCollection = await newsCollection.find().toArray();

    res.status(200).json({
      reviews: (await allReviewsCollection).map<Review>((review) => ({
        name: review.name,
        email: review.email,
        phone: review.phone,
        message: review.message,
        imageurl: review.imageurl,
      })),
    });
    client.close();
  } catch (ex) {
    console.log(ex);
  }
}
