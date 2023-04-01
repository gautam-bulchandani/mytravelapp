import Destination from "@/models/destination";
import TitleBlock from "../common/titleBlock/titleblock";
import Attraction from "@/models/attraction";
import Tile from "./tile";
const TileList = (props: any) => {
  return (
    <>
      <section id="constructions" className="constructions top-section">
        <div className="container">
          {
            props.tilesType === 'destination' ? <TitleBlock title="World's Best Places to Visit" description="World's Best Places to Visit - Pack your bags to enter a world full of
      possibilities. See some endangered species of flora and fauna, taste a
      new kind of cuisine, jump off that cliff and go on a shopping spree in
      the local market." /> : ""
          }
          {
            props.tilesType === 'attraction' ? <TitleBlock title="Top Activities" description="World's Most Booked Activities are listed below for you." /> : ""
          }
          <div className="row gy-4">
            {
              props.tilesType === 'destination' ? props.data.map((destination: Destination) => {
                return (<>

                  <Tile tileData={destination} tileType='destination' />

                </>)
              }) : ""
            }
            {
              props.tilesType === 'attraction' ? props.data.map((attractions: Attraction) => {
                return (<>
                  {attractions.title} <br />
                </>)
              }) : ""
            }
          </div>
        </div>
      </section>
    </>
  )
}
export default TileList;