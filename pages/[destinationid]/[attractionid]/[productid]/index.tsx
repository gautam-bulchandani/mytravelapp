import { GetProductDetails } from "@/helper/propshelper";
import Activity from "@/models/activity";
import Image from "next/image";

const Activity: React.FC<Activity> = (props) => {
  console.log(props)
  return (
    <section id="service-details" className="service-details">
      <div
        className="container"        
      >
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="services-list">
              <div className="cost-package">Package Cost: ${props.price}</div>
              <div className="stars">
                <span>Rating: </span>
              </div>
            </div>
            {/* Form Component  */}
          </div>

          <div className="col-lg-8">
            <Image
              src="/assets/img/m_Beaches_8_l_405_630.avif"
              height={200}
              width={200}
              alt=""
              className="img-fluid services-img"
            />
            <h3>Overview</h3>
            <p>{props.shortdescription}</p>
            <h3>Tips</h3>

            <h3>What To Expect?</h3>
            <p>
             {props.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
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
