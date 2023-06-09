import { GetProductDetails } from "@/helper/propshelper";
import SendEmail from "@/components/common/form/sendemail";
import Activity from "@/models/activity";
import { Int32 } from "mongodb";
import Image from "next/image";
import Hero from "@/components/common/hero/hero";

const Activity: React.FC<Activity> = (props) => {
  const starList = []

  for(var i=0;i<props.review;i++){
    starList.push(<i className="bi bi-star-fill"></i>)
  }
  for(var i=0;i< 5-props.review;i++){
    starList.push(<i className="bi bi-star"></i>)
  }
  return (
    <>
    <Hero data={{
          image:'/img/hero-carousel/'+props.heroImage,
          title:props.title,
          description:props.description,
        }}/>
    <section id="service-details" className="service-details">
      <div
        className="container"        
      >
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="services-list">
              <div className="cost-package">Package Cost:{props.price}</div>
              <div className="stars">
                <span>Rating: </span>
                  { starList }
              </div>
            </div>
            <SendEmail data = {props.title} />
            
          </div>

          <div className="col-lg-8">
            <Image
              src={`/img/Attractions/${props.image}`}
              height={200}
              width={200}
              alt=""
              className="img-fluid services-img"
            />
            <h3>Overview</h3>
            <p>{props.shortdescription}</p>           

            <h3>What To Expect?</h3>
            <p>
             {props.description}
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
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
