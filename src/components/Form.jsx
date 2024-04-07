import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_8arkajs",
        form.current,
        "6WHYOZSIeuLfoTwTh"
      )
      .then(
        () => {
            alert('Sent!');
        },
        (error) => {
            alert(JSON.stringify(error));
        }
      );
  };

  return (
    <>
      <form className="row g-lg-3 gy-3" ref={form} onSubmit={sendEmail}>
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            name="from_name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group col-md-6">
          <input
            type="email"
            className="form-control"
            name="email_id"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group col-12">
          <input
            type="text"
            className="form-control"
            name="subject"
            placeholder="Enter subject"
            required
          />
        </div>
        <div className="form-group col-12">
          <textarea
            rows="4"
            className="form-control"
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <div className="form-group col-12 d-grid">
          <button
            type="submit"
            value="Send"
            className="btn btn-brand"
            id="form_submit_btn"
          >
            Contact me
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
