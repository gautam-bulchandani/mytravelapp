import React from "react";
import Activity from "@/models/activity";
import Link from "next/link";
import Image from "next/image";

const ProductListing = (props: any) => {
  let keys = 1;
  return (<div>

    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Our Products</h2>
          <p>Trending and Budget Friendly International Destinations</p>
        </div>
        <div className="row gy-4 portfolio-container">
          {props.data.map((activity: Activity) => {
            return (
              <div className="col-lg-4 col-md-6 portfolio-item filter-design" key={`products-${keys}`}>
                {keys = keys + 1}
                <div className="portfolio-content h-100">
                  <Image src={`/${activity.image}`} className="img-fluid" width={200} height={200} alt="" />
                  <div className="portfolio-info">
                    <h4>{activity.review}</h4>
                    <p>{activity.name}</p>
                    <Link href={activity.image} title={activity.title} data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                    <Link href={`/products/${activity.name}`} title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
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

