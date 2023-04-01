import React, { useEffect, useState } from "react";
import Activity from "@/models/activity";
import Link from "next/link";
import Image from "next/image";
import TitleBlock from "../common/titleBlock/titleblock";

const ProductListing = (props: any) => {
  let keys = 1;
  const [prodTitle, setprodTitle] = useState({title:'',description:''});
  const getTitle = async () => {
    const prodData = await fetch("/api/gettitle?id="+"products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    console.log(prodData.data)
    setprodTitle(prodData.data);
  };
  useEffect(() => {
    getTitle();
  }, []);
 
  return (<div>

    <section id="projects" className="projects">
      <div className="container">
      <TitleBlock
              title={prodTitle.title}
              description={prodTitle.description}
            />
        <div className="row gy-4 portfolio-container">
          {props.data.map((activity: Activity) => {
            const stars : any = []

            for(var i=0;i<activity.review;i++){
              stars.push(<i className="bi bi-star-fill"></i>)
            }
            for(var i=0;i< 5-activity.review;i++){
              stars.push(<i className="bi bi-star"></i>)
            }
            return (
                
              <div className="col-lg-4 col-md-6 portfolio-item filter-design" key={`products-${keys++}`}>                
                <div className="portfolio-content h-100">
                  <Image src={`/img/Attractions/${activity.image}`} className="img-fluid" width={300} height={200} alt="" />
                  <div className="portfolio-info">
                    <h4>{stars}</h4>
                    <p>{activity.name}</p>
                    {/* <Link href={activity.image} title={activity.title} data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link> */}
                    <Link href={`/${activity.destination}/${activity.attraction}/${activity.name}`} title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    </section>
  </div>
  )

}
export default ProductListing;

