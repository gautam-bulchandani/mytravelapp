import { GetAllAttractions, GetAttractionDetails } from "@/helper/propshelper";
import Attraction from "@/models/attraction";

const Attraction: React.FC<Attraction> = (props) => {
  console.log(props)
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
