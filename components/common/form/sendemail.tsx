import { FormEvent, useRef } from "react";

export default function SendEmail() {

  const nameReference = useRef<HTMLInputElement>(null);
  const emailReference = useRef<HTMLInputElement>(null);
  const phoneReference = useRef<HTMLInputElement>(null);
  const prodnameReference = useRef<HTMLInputElement>(null);
  const messageReference = useRef<HTMLInputElement>(null)
  const formSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();

    const emailBody = {
      name: nameReference.current!.value,
      email: emailReference.current!.value,
      phone: phoneReference.current!.value,
      productName: prodnameReference.current!.value,
      message: messageReference.current!.value
    };

    const response = await fetch("/api/sendemail", {
      method: "POST",
      body: JSON.stringify(emailBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <section id="get-started" className="get-started section-bg">
      <div className="container">

        <div className="row justify-content-between gy-4">

          <div className="col-12">
            <form method="post" className="php-email-form" onSubmit={formSubmitHandler}>
              <h2>Enquire Now</h2>
              <p>Please share your queries by filling up the below form</p>
              <div className="row gy-3">

                <div className="col-md-12">
                  <input type="text" name="name" className="form-control" placeholder="Name" ref={nameReference} required />
                </div>

                <div className="col-md-12 ">
                  <input type="email" className="form-control" name="email" placeholder="Email" ref={emailReference} required />
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="phone" placeholder="Phone" ref={phoneReference} required />
                </div>
				
				<div className="col-md-12">
                  <input type="text" className="form-control" name="productName" placeholder="Product Name" ref={prodnameReference} required />
                </div>

                <div className="col-md-12">
                  <input className="form-control" name="message" placeholder="Message" ref={messageReference} required />
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading" style={{display:"none"}}>Loading....</div>
                  <div className="error-message"style={{display:"none"}}></div>
                  <div className="sent-message"style={{display:"none"}}>Your quote request has been sent successfully. Thank you!</div>

                  <button type="submit">Enquire Now</button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}