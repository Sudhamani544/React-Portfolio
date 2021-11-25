import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";
import phone from "../img/phone.png";
import email from "../img/email.png";

const Contact = () => {
  const form = useRef<any>("");
  const [complete, setComplete] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kos5mfd",
        "template_xun1eyp",
        form.current,
        "user_mZXgjZmVgh1D6GRnDHGVf"
      )
      .then(
        (result) => {
          console.log(result.text);
          setComplete(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact__bg"></div>
      <div className="contact__wrapper">
        <div className="contact__left">
          <h3>Contact Details</h3>
          <div className="contact__info">
            <img src={email} className="contact__img" /> ksudha544@gmail.com
          </div>
        </div>
        <div className="contact__right">
          <h3>Leave a message</h3>
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <input placeholder="Name" name="user_name" required></input>

              <input placeholder="Subject" name="user_subject" required></input>
              <input placeholder="Email" name="user_email" required></input>
              <textarea
                rows={5}
                placeholder="Message"
                name="user_message"
                required
              ></textarea>
              <button>Submit</button>
              {complete && <div>Thank you!</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
