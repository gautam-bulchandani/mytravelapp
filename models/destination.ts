import Activity from "./activity";
import Attraction from "./attraction";

interface Destination {
  name: string;
  title: string;
  shortdescription: string;
  description: string;
  istop: string;
  type: string;
  image: string;
  attractions: Attraction[];
  activity: Activity[];
}
export default Destination;
