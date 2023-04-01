import { GetProductDetails } from "@/helper/propshelper";
import Activity from "@/models/activity";

const Activity: React.FC<Activity> = (props) => {
  return <h1>{props.name}</h1>;
};
export default Activity;
export async function getServerSideProps(context: any) {
  const result = GetProductDetails(context.params.productid);
  const getActivityDetail = await result;
  if (getActivityDetail == null)
    return {
      notFound: true,
    };
  else {
    return { props: getActivityDetail.activityDetails };
  }
}
