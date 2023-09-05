import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import {MdOutlineEmail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z7xbaff",
        "template_nmjyybb",
        form.current,
        "6SGKYFQvpxCvG2mv8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          <span >Get in Touch</span>
          <span>Contact me</span>
          <div className="contact-wrapper">
            <article className="contact-options">
              <MdOutlineEmail/>
              <h4>Email</h4>
              <h5>Akashchatterjee@gmail.com</h5>
              <a href="mailto:akashchatterjee3502@gmail.com" target="_blank" rel="noreferrer">Send Me Email</a>
            </article>
            <article className="contact-options">
              <BsWhatsapp/>
              <h4>Whatsapp</h4>
              <h5>+1234567890</h5>
              <a href="https://api.whatsapp.com/send?phone=7881128400" target="_blank" rel="noreferrer">Send Me Message</a>
            </article>
          </div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
