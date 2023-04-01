import Hero from "@/components/common/hero/hero";
import TileList from "@/components/tile/tilelist";
import { GetAllAttractions } from "@/helper/propshelper";

const AttractionPage = (props:any) => {
  return (
    <>
      <h1>Destination Page</h1>
      <Hero
        data={{
          image:
            "https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg",
          title: "Bali",
          description:
            "An exotic tropical destination that flaunts scenic beaches and mountains, Bali is deep-rooted in culture and tradition, which adds to the charm of this scenic island.",
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
  const allAttractions = await GetAllAttractions();
  return {
    props: {
      attractions: allAttractions.attractions,
    },
  };
}
