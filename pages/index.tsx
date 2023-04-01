import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {
  GetAllActivities,
  GetAllAttractions,
  GetAllDestinations,
} from "@/helper/propshelper";
import { FormEvent, useRef } from "react";

export default function Home() {
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

  return {
    props: allDestinations,
  };
}
