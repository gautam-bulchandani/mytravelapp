import Review from "@/models/review";
import React, { FormEvent, useRef, useState } from "react";

const AddReviewForm: React.FC<{ AddReview: () => void }> = (props) => {
  const [reviewStatus, SetReviewStatus] = useState("initial");

  const nameReference = useRef<HTMLInputElement>(null);
  const emailReference = useRef<HTMLInputElement>(null);
  const phoneReference = useRef<HTMLInputElement>(null);
  const messsageReference = useRef<HTMLTextAreaElement>(null);
  const imageReference = useRef<HTMLInputElement>(null);

  const formSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    SetReviewStatus("loading");
    const val: Review = {
      name: nameReference.current!.value,
      email: emailReference.current!.value,
      phone: phoneReference.current!.value,
      message: messsageReference.current!.value,
      imageurl: imageReference.current!.value,
    };
    const response = fetch("/api/addreviews", {
      method: "POST",
      body: JSON.stringify(val),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const status = (await response).status;
    if (status === 201) {
      console.log("lol");
      SetReviewStatus("success");
      props.AddReview();
    } else {
      SetReviewStatus("error");
    }
  };
  const ststusHtml = <div></div>;
  return (
    <section id="get-started" className="get-started section-bg">
      <div className="container">
        <div className="row justify-content-between gy-4">
          <div className="col-lg-12">
            <form
              action="forms/quote.php"
              method="post"
              className="php-email-form"
              onSubmit={formSubmitHandler}
            >
              <h3>Submit your Reviews</h3>
              <p>
                Vel nobis odio laboriosam et hic voluptatem. Inventore vitae
                totam. Rerum repellendus enim linead sero park flows.
              </p>
              <div className="row gy-3">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    ref={nameReference}
                  ></input>
                </div>

                <div className="col-md-12 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    ref={emailReference}
                  ></input>
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Phone"
                    ref={phoneReference}
                  ></input>
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="image"
                    placeholder="Image Url"
                    ref={imageReference}
                  ></input>
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    ref={messsageReference}
                  ></textarea>
                </div>
                {reviewStatus === "loading" ? (
                  <div className="loading">Loading</div>
                ) : reviewStatus === "error" ? (
                  <div className="error-message">Something went wrong</div>
                ) : reviewStatus === "success" ? (
                  <div className="sent-message">
                    <div>
                      {" "}
                      Your review has been sent successfully submitted . Thank
                      you!
                    </div>{" "}
                  </div>
                ) : (
                  ""
                )}

                <div className="col-md-12 text-center">
                  <button type="submit">Submit a review</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddReviewForm;
