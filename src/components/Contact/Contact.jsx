import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../Context";

const Contact = () => {
  const formRef = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jsy9ej7",
        "template_yibvsgn",
        formRef.current,
        "HV78EyH-GOW3Jms7n"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +234 7083325053
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              tommiwakukoyi07@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              14, adebisi close, surulere lagos. ikeja yaba
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              name="user_subject"
              placeholder="Subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              name="user_email"
              placeholder="Email"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              name="user_name"
              placeholder="Name"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              placeholder="Message"
              rows="5"
              name="message"
            />
            <button>Submit</button>
            {done && "thank you"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
