import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {
  GetAllActivities,
  GetAllAttractions,
  GetAllDestinations,
} from "@/helper/propshelper";

export default function Home() {
  return (
    <>
      <h1>Out travel App</h1>
    </>
  );
}
export async function getStaticProps() {
  const allDestinations = await GetAllDestinations();
  const allAttraction = await GetAllAttractions();
  const allActivities = await GetAllActivities();
  console.log(allActivities);
  return {
    props: allDestinations,
  };
}
