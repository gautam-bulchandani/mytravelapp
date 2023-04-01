import Hero from "@/components/common/hero/hero";
import TileList from "@/components/tile/tilelist";
import { GetAllDestinations, GetHero } from "@/helper/propshelper";

const DestinationPage = (props: any) => {
  return (
    <>
      <h1>Destination Page</h1>
      <Hero
        data={{
          image:'/img/hero-carousel/'+props.heroData.image,
          title:props.heroData.title,
          description:props.heroData.description,
        }}
      />
      {/* <section id="constructions" className="constructions top-section">
        <div className="container" data-aos="fade-up"> */}
          <TileList data={props.allDestinations} tilesType="destination" />
        {/* </div>
      </section> */}
    </>
  );
};
export default DestinationPage;

export async function getStaticProps() {
  const heroData = await GetHero('destination');
  const allDestinations = await GetAllDestinations();
  return {
    props: {
      allDestinations: allDestinations.destinations,
      heroData : heroData.result,
    },
  };
}
