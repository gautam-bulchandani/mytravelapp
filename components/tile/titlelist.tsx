import Destination from "@/models/destination";
import TitleBlock from "../common/titleBlock/titleblock";
import Attraction from "@/models/attraction";
const TileList = (props:any)=>{
  return(
    <>
    {
      props.tilesType === 'destination' ? <TitleBlock title="World's Best Places to Visit" description="World's Best Places to Visit - Pack your bags to enter a world full of
      possibilities. See some endangered species of flora and fauna, taste a
      new kind of cuisine, jump off that cliff and go on a shopping spree in
      the local market." /> : ""
    }
    {
      props.tilesType === 'attraction' ? <TitleBlock title="Top Activities" description="World's Most Booked Activities are listed below for you." /> : ""
    }
    {
      props.tilesType==='destination' ? props.data.map((destination:Destination)=>{
        return(<>
        {destination.title} <br />
        </>)
      }) : ""
    }
    {
      props.tilesType==='attraction' ? props.data.map((attractions:Attraction)=>{
        return(<>
        {attractions.title} <br />
        </>)
      }) : ""
    }
    </>
  )
}
export default TileList;