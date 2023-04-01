import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {
  GetAllActivities,
  GetAllAttractions,
  GetAllDestinations,
} from "@/helper/propshelper";
import { FormEvent, useRef } from "react";
import TileList from "@/components/tile/tilelist";
import ProductListing from "@/components/Products/productslist";

export default function Home(props:any) {
  const nameReference = useRef<HTMLInputElement>(null);
  const emailReference = useRef<HTMLInputElement>(null);
  const formSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();

    const emailBody = {
      name: nameReference.current!.value,
      email: emailReference.current!.value,
    };

    const response = fetch("/api/sendemail", {
      method: "POST",
      body: JSON.stringify(emailBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
    
    <TileList data = {props.topDestinations} tilesType = 'destination' />
    <TileList data = {props.topAttractions} tilesType = 'attraction' />
    <ProductListing data={props.allActivities} />
      <h1>Our travel App</h1>
      <form method="post" onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          ref={nameReference}
        ></input>

        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={emailReference}
        ></input>
        <button type="submit">Send Email</button>
      </form>
    </>
  );
}
export async function getStaticProps() {
  const allDestinations = await GetAllDestinations();
  const allAttraction = await GetAllAttractions();
   const allActivities = await GetAllActivities();
  const topDests = allDestinations.destinations.filter((dest)=>{
    return dest.istop ==='yes' ? true : false
  })
  const topAttractions = allAttraction.attractions.filter((attraction)=>{
    return attraction.istop ==='yes' ? true : false
  })

  // console.log(allActivities);
  return {
    props: {
      topDestinations:topDests,
      topAttractions:topAttractions,
      allActivities : allActivities.activities,
    }
  };
}
