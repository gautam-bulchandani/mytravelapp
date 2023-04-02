import Activity from "@/models/activity";
import Attraction from "@/models/attraction";
import Destination from "@/models/destination";
import Review from "@/models/review";
import Hero from "@/models/hero";
import TitleBlock from "@/models/titleblock";

import { MongoClient } from "mongodb";
import { connectToDatabase } from "./mongoclient";

async function GetReactivistsCollection() {
  const client = await connectToDatabase();

  const db = client.db();
  const collection = db.collection("Reactivists");
  client.close;
  return collection;
}

async function GetReactivistsReviewCollection() {
  const client = await connectToDatabase();

  const db = client.db();
  const collection = db.collection("Reviews");
  client.close;
  return collection;
}

export async function GetAllDestinations() {
  const reactivistsCollection = GetReactivistsCollection();
  const allDestination = (await reactivistsCollection)
    .find({ type: "destination" })
    .toArray();

  return {
    destinations: (await allDestination).map<Destination>((destination) => ({
      name: destination.name,
      title: destination.title,
      shortdescription: destination.shortdescription,
      description: destination.description,
      istop: destination.istop,
      attractions: destination.attracion.map((attraction: Attraction) => {
        return attraction;
      }),
      activity: destination.activity.map((activity: Activity) => {
        return activity;
      }),
      type: destination.type,
      image: destination.image,
    })),
  };
}
export async function GetAllAttractions() {
  const reactivistsCollection = GetReactivistsCollection();
  const allAttraction = (await reactivistsCollection)
    .find({ type: "attraction" })
    .toArray();

  return {
    attractions: (await allAttraction).map<Attraction>((attracion) => ({
      name: attracion.name,
      title: attracion.title,
      shortdescription: attracion.shortdescription,
      description: attracion.description,
      istop: attracion.istop,
      activity: attracion.activity.map((activity: Activity) => {
        return activity;
      }),
      type: attracion.type,
      image: attracion.image,
    })),
  };
}
export async function GetAllActivities() {
  const reactivistsCollection = GetReactivistsCollection();
  const allActivities = (await reactivistsCollection)
    .find({ type: "activity" })
    .toArray();

  return {
    activities: (await allActivities).map<Activity>((activity) => ({
      name: activity.name,
      title: activity.title,
      shortdescription: activity.shortdescription,
      description: activity.description,
      istop: activity.istop,
      type: activity.type,
      image: activity.image,
      review: activity.review,
      price: activity.price,
      destination: activity.destination,
      attraction: activity.attraction,
    })),
  };
}

export async function GetDestinationDetails(id: string) {
  const reactivistsCollection = GetReactivistsCollection();
  const destination = (await reactivistsCollection).findOne({
    type: "destination",
    name: id,
  });
  const result = await destination;
  const destinationData: Destination = {
    name: result!.name,
    title: result!.title,
    shortdescription: result!.shortdescription,
    description: result!.description,
    istop: result!.istop,
    attractions: result!.attracion.map((attraction: Attraction) => {
      return attraction;
    }),
    activity: result!.activity.map((activity: Activity) => {
      return activity;
    }),
    type: result!.type,
    image: result!.image,
  };
  return {
    destinationDetail: destinationData,
  };
}

export async function GetAttractionDetails(id: string) {
  const reactivistsCollection = GetReactivistsCollection();
  const attracion = (await reactivistsCollection).findOne({
    type: "attraction",
    name: id,
  });
  const result = await attracion;
  if (result == null) return null;
  const attractionnData: Attraction = {
    name: result!.name,
    title: result!.title,
    shortdescription: result!.shortdescription,
    description: result!.description,
    istop: result!.istop,

    activity: result!.activity.map((activity: Activity) => {
      return activity;
    }),
    type: result!.type,
    image: result!.image,
  };
  return {
    attractionDetail: attractionnData,
  };
}

export async function GetProductDetails(id: string) {
  const reactivistsCollection = GetReactivistsCollection();
  const activity = (await reactivistsCollection).findOne({
    type: "activity",
    name: id,
  });
  const result = await activity;
  if (result == null) return null;
  const activityData: Activity = {
    name: result!.name,
    title: result!.title,
    shortdescription: result!.shortdescription,
    description: result!.description,
    istop: result!.istop,
    type: result!.type,
    image: result!.image,
    review: result!.review,
    price: result!.price,
    destination: result!.destination,
    attraction: result!.attraction,
  };
  return {
    activityDetails: activityData,
  };
}
export async function GetAllReviews() {
  const reactivistsCollection = GetReactivistsReviewCollection();
  const allReviews = (await reactivistsCollection).find().toArray();
  return {
    reviews: (await allReviews).map<Review>((review) => ({
      name: review.name,
      email: review.email,
      phone: review.phone,
      message: review.message,
      imageurl: review.imageurl,
    })),
  };
}

async function GetDictionaryCollection() {
  const dbKey = process.env.DB_Connection_String as string;
  const client = MongoClient.connect(dbKey);
  const db = (await client).db();
  const collection = db.collection("Dictionary");
  (await client).close;
  return collection;
}

export async function GetHero(page: string) {
  const dictCollection = GetDictionaryCollection();
  const hero = (await dictCollection)
    .find({ type: "hero", page: page })
    .toArray();
  const res = (await hero).map<Hero>((item) => ({
    title: item.title,
    description: item.description,
    type: item.type,
    image: item.image,
  }));
  return {
    result: res[0],
  };
}

export async function GetTitleBlock(id: string) {
  const dictCollection = GetDictionaryCollection();
  const titleblock = (await dictCollection)
    .find({ type: "titleblock", id: id })
    .toArray();
  const res = (await titleblock).map<TitleBlock>((item) => ({
    title: item.title,
    description: item.desc,
    id: item.id,
    type: item.type,
  }));
  return {
    result: res[0],
  };
}
