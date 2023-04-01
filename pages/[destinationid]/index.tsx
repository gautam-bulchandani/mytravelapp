import TileList from "@/components/tile/tilelist";
import ProductListing from "@/components/Products/productslist";
import {
  GetAllDestinations,
  GetDestinationDetails,
} from "@/helper/propshelper";
import Destination from "@/models/destination";
import React from "react";

const Destination: React.FC<Destination> = (props) => {
  console.log(props.data)
  
  return (
    <>   
    <TileList data={props.data} tilesType="destination" />
      <ProductListing data={props.activity} />
    </>
  );
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
