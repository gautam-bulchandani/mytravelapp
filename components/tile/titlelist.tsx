import Destination from "@/models/destination";
import TitleBlock from "../common/titleBlock/TitleBlock";
const TileList = (props:any)=>{
  return(
    <>
    <TitleBlock title="World's Best Places to Visit" description="World's Best Places to Visit - Pack your bags to enter a world full of
          possibilities. See some endangered species of flora and fauna, taste a
          new kind of cuisine, jump off that cliff and go on a shopping spree in
          the local market." />
    {
      props.data.map((destination:Destination)=>{
        return(<>
        {destination.title}
        </>)
      })
    }
    </>
  )
}
export default TileList;