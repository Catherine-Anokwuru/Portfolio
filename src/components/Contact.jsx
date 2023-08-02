import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "service_lhmtaqc",
        "template_1lk30ee",
        form.current,
        "Q2HhI-ynGlPHMDKLP"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          e.target.reset();
          setSending(false);
        },
        () => {
          toast.error("There was an error");
        }
      );
  };

  return (
    <section id="contact" className="contact phone:pt-[1rem] pt-[3rem]">
      <div className="contact-head">
        <h1> Contact Me</h1>
      </div>

        <div className="contact-container">
          <div className="contact-text">
            <h4>Get in touch with me</h4>
            <p>
        Email: catherineanokwuru@gmail.com
            </p>
          </div>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="form-container">
              <div className="form-row">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  className="form-input"
                  name="user_name"
                  id="name"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  className="form-input"
                  name="user_email"
                  id="email"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="subject">subject</label>
                <input
                  type="text"
                  className="form-input"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
            </div>
            <div className="form-row ">
              <label htmlFor="message">message</label>
              <textarea
                className="form-input message"
                name="message"
                id="message"
                cols={50}
                rows={10}
                required
              />
            </div>
            <div className="submit-btn">
              <button type="submit" className="submit">
                {sending ? <div className="loading"></div> : <p>Send</p>}
              </button>


            </div>
          </form>
        </div>
    </section>
  );
};
export default Contact;
