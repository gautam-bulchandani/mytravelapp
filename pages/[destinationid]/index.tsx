import {
  GetAllDestinations,
  GetDestinationDetails,
} from "@/helper/propshelper";
import Destination from "@/models/destination";
import React from "react";

const Destination: React.FC<Destination> = (props) => {
  return <h1>{props.title}</h1>;
};
export default Destination;

export async function getStaticPaths() {
  const _destination = await GetAllDestinations();

  return {
    paths: _destination.destinations.map((destination) => ({
      params: { destinationid: destination.name },
    })),
    fallback: false,
  };
}
export async function getStaticProps<context>(context: {
  params: { destinationid: string };
}) {
  const getDestinationDetail = GetDestinationDetails(
    context.params.destinationid
  );
  return { props: (await getDestinationDetail).destinationDetail };
}
