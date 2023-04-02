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
    <>
      <h1>Our travel App</h1>
      <form method="post" onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          ref={nameReference}
        ></input>

        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={emailReference}
        ></input>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          ref={phoneReference}
        ></input>

        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          ref={prodnameReference}
        ></input>

        <input
          type="text"
          name="message"
          placeholder="Message"
          ref={messageReference}
        ></input>
        
        <button type="submit">Send Email</button>
      </form>
    </>
  );
}