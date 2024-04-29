import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const NewsLater = () => {
  const [email, setemail] = useState("");
  const handlechange = (e) => {
    setemail(e.target.value);
  };
  const sendContact = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY
    );
      
      alert("You are Sucessfully Connected With Us");
      
  };
  return (
    <div>
      <div>
        <h3 className="text-lg text-primary font-bold mb-2 flex items-center gap-2">
          <FaEnvelope />
          Email me:
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Have a question or inquiry? Feel free to reach out to us via email.
        </p>
        <form onSubmit={sendContact}>
          <div className="w-full space-y-4">
            <input
              type="email"
              name="email"
              placeholder="name@gmail.com"
              className="w-full block py-2 pl-3 border rounded-lg border-primary focus:outline-none"
              onChange={handlechange}
              value={email}
            />
            <input
              type="submit"
              value="Subscribe"
              className="w-full block py-2 pl-3 border rounded-lg border-primary bg-primary rounde text-light1 cursor-pointer font-semibold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLater;
