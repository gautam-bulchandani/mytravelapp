import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {
  GetAllActivities,
  GetAllAttractions,
  GetAllDestinations,
  GetAllReviews,
} from "@/helper/propshelper";
import { FormEvent, useEffect, useRef, useState } from "react";
import TileList from "@/components/tile/tilelist";
import ProductListing from "@/components/Products/productslist";
import AddReviewForm from "@/components/review/addreviews";
import ReviewList from "@/components/review/reviewlist";

export default function Home(props: any) {
  const [reviewAdded, ReviewAddedStatus] = useState(0);
  const [reviewDeleted, ReviewDeletedStatus] = useState(0);
  const [totalReviews, SetReviewStatus] = useState(props.allReviews);
  const BlogDeleteddHandler = () => {
    ReviewDeletedStatus(Math.random());
  };
  const ReviewAddedHandler = () => {
    ReviewAddedStatus(Math.random());
  };

  useEffect(() => {
    const response = fetch("/api/getallreviews", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        SetReviewStatus(data.reviews);
      });
  }, [reviewAdded, reviewDeleted]);

  return (
    <>
      <TileList data={props.topDestinations} tilesType="destination" />
      <TileList data={props.topAttractions} tilesType="attraction" />
      <ProductListing data={props.allActivities} />
      <AddReviewForm AddReview={ReviewAddedHandler}></AddReviewForm>
      <ReviewList
        DeleteReview={BlogDeleteddHandler}
        items={totalReviews}
      ></ReviewList>
    </>
  );
}
export async function getStaticProps() {
  const allDestinations = await GetAllDestinations();
  const allAttraction = await GetAllAttractions();
  const allActivities = await GetAllActivities();
  const allReviews = await GetAllReviews();
  const topDests = allDestinations.destinations.filter((dest) => {
    return dest.istop === "yes" ? true : false;
  });
  const topAttractions = allAttraction.attractions.filter((attraction) => {
    return attraction.istop === "yes" ? true : false;
  });

  // console.log(allActivities);
  return {
    props: {
      topDestinations: topDests,
      topAttractions: topAttractions,
      allActivities: allActivities.activities,
      allReviews: allReviews.reviews,
    },
  };
}
