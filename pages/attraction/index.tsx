import Hero from "@/components/common/hero/hero";
import TileList from "@/components/tile/tilelist";
import { GetAllAttractions, GetHero } from "@/helper/propshelper";

const AttractionPage = (props: any) => {
  return (
    <>
      <Hero
        data={{
          image: "/img/hero-carousel/" + props.heroData.image,
          title: props.heroData.title,
          description: props.heroData.description,
        }}
      />
      {/* <section id="constructions" className="constructions top-section">
        <div className="container" data-aos="fade-up"> */}
      <TileList data={props.attractions} tilesType="attraction" />
      {/* </div>
      </section> */}
    </>
  );
};
export default AttractionPage;

export async function getStaticProps() {
  const heroData = await GetHero("attraction");
  const allAttractions = await GetAllAttractions();
  return {
    props: {
      attractions: allAttractions.attractions,
      heroData: heroData.result,
    },
    revalidate: 60,
  };
}
