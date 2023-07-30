import React, { useContext, useRef } from "react";
import "./ContactForm.css";
import { themeContext } from "../../ContextAPI/ThemeContext";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import apiKey from "../../Data/key";

const ContactForm = () => {
  const { color, boxShadow } = useContext(themeContext);
  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        apiKey.SERVICE_ID,
        apiKey.TEMPLATE_ID,
        form.current,
        apiKey.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thanks for contacting me!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} className="c-form" onSubmit={sendEmail}>
      <input
        type="text"
        placeholder="Full Name"
        style={{ border: `2px solid ${color}` }}
        required
        name="user_name"
      />
      <input
        type="email"
        placeholder="Your Email"
        style={{ border: `2px solid ${color}` }}
        required
        name="user_email"
      />
      <input
        type="text"
        placeholder="Phone Number"
        style={{ border: `2px solid ${color}` }}
        name="user_phone"
      />
      <textarea
        name="message"
        rows="7"
        placeholder="Message"
        style={{ border: `2px solid ${color}` }}
        required
      />
      <button
        className="c-btn btn"
        style={{ background: `${color}`, boxShadow: `${boxShadow}` }}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
