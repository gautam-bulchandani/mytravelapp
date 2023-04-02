import Review from "@/models/review";
import Image from "next/image";
import { useState } from "react";

const ReviewItem: React.FC<{ item: Review; deleteBlog: () => void }> = (
  props
) => {
  const [reviewStatus, SetReviewStatus] = useState("initial");

  const deleteItemHandler = async (reviewname: string) => {
    SetReviewStatus("loading");
    const response = fetch("/api/deletereview", {
      method: "Delete",
      body: JSON.stringify(reviewname),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const status = (await response).status;
    if (status === 200) {
      props.deleteBlog();
    } else {
    }
  };

  return (
    <div className="col-xl-4 col-md-6">
      <div className="post-item position-relative h-100">
        <div className="post-img position-relative overflow-hidden">
          <Image
            src={`/img/blog/${props.item.imageurl}`}
            className="img-fluid"
            alt=""
            width={400}
            height={250}
          ></Image>
          <span className="post-date">{props.item.email}</span>
        </div>

        <div className="post-content d-flex flex-column">
          <h3 className="post-title">{props.item.message}</h3>

          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-person"></i>{" "}
              <span className="ps-2">{props.item.name}</span>
            </div>
            <span className="px-3 text-black-50">/</span>
            <div className="d-flex align-items-center">
              <i className="bi bi-telephone-inbound"></i>{" "}
              <span className="ps-2">{props.item.phone}</span>
            </div>
          </div>

          <hr></hr>
          {reviewStatus === "loading" ? (
            <div className="loading">Deleting this review... </div>
          ) : reviewStatus === "error" ? (
            <div className="error-message">Something went wrong</div>
          ) : (
            ""
          )}
          <span
            className="readmore stretched-link"
            onClick={deleteItemHandler.bind(null, props.item.name)}
          >
            Delete this Review
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
