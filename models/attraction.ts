import Activity from "./activity";

interface Attraction {
  name: string;
  title: string;
  shortdescription: string;
  description: string;
  istop: string;
  type: string;
  image: string;
  activity: Activity[];
}
export default Attraction;
