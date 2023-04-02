import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const dbKey = process.env.DB_Connection_String as string;
  const client = await MongoClient.connect(dbKey);
  return client;
}
