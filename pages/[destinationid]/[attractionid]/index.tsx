<<<<<<< HEAD
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
=======
import { GetAllAttractions, GetAttractionDetails } from "@/helper/propshelper";
import Attraction from "@/models/attraction";

const Attraction: React.FC<Attraction> = (props) => {
  return <h1>{props.name}</h1>;
};
export default Attraction;

// export async function getStaticPaths() {
//   const _attractions = await GetAllAttractions();

//   return {
//     paths: _attractions.attractions.map((attraction) => ({
//       params: { attractionid: attraction.name },
//     })),
//     fallback: false,
//   };
// }
export async function getServerSideProps(context: any) {
  const result = GetAttractionDetails(context.params.attractionid);
  const getAttractionDetail = await result;
  if (getAttractionDetail == null)
    return {
      notFound: true,
    };
  else {
    return { props: getAttractionDetail.attractionDetail };
  }
}
>>>>>>> e8d68dc2f308f9a4c1f63682a7ac91ea9a176e69
