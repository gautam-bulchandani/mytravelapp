import ProductListing from "@/components/Products/productslist";
import Hero from "@/components/common/hero/hero";
import TileList from "@/components/tile/tilelist";
import { GetAllAttractions, GetAttractionDetails } from "@/helper/propshelper";


const Attraction = (props:any) => {
  return (
    <>
    <Hero data={{
          image:'/img/hero-carousel/'+props.heroImage,
          title:props.title,
          description:props.description,
        }}/>
      <ProductListing data={props.attractionDetail.activity} />
      {props.relatedAttr.length != 0 ? <TileList data={props.relatedAttr} tilesType="relattraction" /> : ""}
    </>
  );
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
export async function getServerSideProps(context: {
  params: { attractionid: string , destinationid:string};
}) {
  const result = GetAttractionDetails(context.params.attractionid);
  const getAttractionDetail = await result;
  const attrData = GetAllAttractions();
  const relatedAttr = (await attrData).attractions.filter((attr)=>{
    return attr.name==context.params.attractionid || attr.destination !=context.params.destinationid  ? false : true
  })

  if (getAttractionDetail == null)
    return {
      notFound: true,
    };
  else {
    return { props: {
      attractionDetail : getAttractionDetail.attractionDetail,
      relatedAttr : relatedAttr
    } };
  }
}
