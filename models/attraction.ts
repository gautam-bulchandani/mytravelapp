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
  destination:string;
  heroImage:string;
}
export default Attraction;
