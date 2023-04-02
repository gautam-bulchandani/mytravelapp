import Review from "@/models/review";
import React from "react";
import ReviewItem from "./reviewitem";

const ReviewList: React.FC<{ items: Review[]; DeleteReview: () => void }> = (
  props
) => {
  return (
    <section id="recent-blog-posts" className="recent-blog-posts">
      <div className="container">
        <div className=" section-header">
          <h2>Recent Review Posts</h2>
          <p>
            In commodi voluptatem excepturi quaerat nihil error autem voluptate
            ut et officia consequuntu
          </p>
        </div>
        <div className="row gy-5">
          {props.items!.map((review) => (
            <ReviewItem
              deleteBlog={props.DeleteReview}
              item={review}
              key={review.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ReviewList;
