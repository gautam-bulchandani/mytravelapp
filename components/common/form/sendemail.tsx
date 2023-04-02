import { FormEvent, useRef, useState } from "react";

export default function SendEmail( ) {
  const [submitted, setSubmitted] = useState(false);  
  const [loading, setLoading] = useState(false)
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
    try{
      setLoading(true)
    const response = await fetch("/api/sendemail", {
      method: "POST",
      body: JSON.stringify(emailBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

  }catch(error){

  }
  finally{
    setLoading(false);
    setSubmitted(true);
  }
    
  };

  return (
    <section id="get-started" className="get-started section-bg">
      {submitted == false && 
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
                  <input type="tel" className="form-control" name="phone" placeholder="Phone" ref={phoneReference}  required  />
                </div>
				
				        <div className="col-md-12">
                  <input type="text" className="form-control"  name="productName" placeholder="Product Name" ref={prodnameReference} required />
                </div>

                <div className="col-md-12">
                  <input className="form-control" name="message" placeholder="Message" ref={messageReference} required />
                </div>

                <div className="col-md-12 text-center">     
                               
                  <button type="submit">Enquire Now</button>
                </div>

              </div>
            </form>
        
            
          </div>
        
      
        </div>

      </div>
        }
        {loading && <div className="loading">Loading......</div>}
      {submitted && <div className="sent-message">Thank you! Your Enquiry has been submitted.</div>}
    </section>
  );
}