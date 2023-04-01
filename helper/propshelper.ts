import Activity from "@/models/activity";
import Attraction from "@/models/attraction";
import Destination from "@/models/destination";

import { MongoClient } from "mongodb";

async function GetReactivistsCollection() {
  const dbKey = process.env.DB_Connection_String as string;
  const client = MongoClient.connect(dbKey);
  const db = (await client).db();
  const collection = db.collection("Reactivists");
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
      review: "",
      price: "",
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

export async function GetAttractionDetails(destinationid:string,attractionid: string) {
  const destination = await GetDestinationDetails(destinationid);
  const attractions = await destination.destinationDetail.attractions;
  const attractionDetails = attractions.filter(attr=>{
    return attr.name===attractionid ? true : false
  })
  
  return{
    attractionDetails: attractionDetails[0],
  }
}

export async function GetSpecificAttractions(destinationid:string) {
  const destination = await GetDestinationDetails(destinationid);
  const attractions = destination.destinationDetail.attractions;
  return{
    attractions : attractions,
  }
}
