import { GetAllAttractions, GetAttractionDetails, GetDestinationDetails, GetSpecificAttractions } from "@/helper/propshelper";

const Attraction = (props:any) => {
  console.log('attr detail data:' + props.data)
  return (<h1>Attraction Page</h1>);
};
export default Attraction;


export async function getStaticPaths(context: {
  params: { destinationid: string,attractionid:string };
}) {
  const _attraction = await GetAllAttractions();
  console.log(context)
  return {
    paths: _attraction.attractions.map((attr:any) => ({
      params: { attractionid: attr.name,destinationid:context.params.destinationid },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: {
  params: { destinationid: string,attractionid:string };
}){
  const data = await GetAttractionDetails(context.params.destinationid,context.params.attractionid);
  
  return{
    props:{data:data.attractionDetails}
  }
}