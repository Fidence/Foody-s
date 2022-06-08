import React from "react";
import "./contact.scss";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactComp = () => {
  return (
    <div className="contact">
      <div className="contact__header">
        <h1>Contact us</h1>
        <span>Home &gt;&gt; Contact</span>
      </div>

      <div className="contactwrap">
        <div className="conicons">
          <div className="conicon">
            <FaPhone className="color" />
            <h4>Our Number</h4>
            <p>+234 813 4563 555</p>
            <p>+234 813 4563 555</p>
          </div>

          <div className="conicon">
            <FaEnvelope className="color" />
            <h4>Our Email</h4>
            <p>odukwuconfidence08@gmail.com</p>
            <p>example@gmail.com</p>
          </div>
          <div className="conicon">
            <FaMapMarkerAlt className="color" />
            <h4>Our Address</h4>
            <p>
              Plot 4 H.Venue behind Adaeze hotel along Nta Obirikwere Rd. Ph.
              River State
            </p>
          </div>
        </div>
        <div className="coninfos">
          <form action="">
            <h2>Get In Touch</h2>
            <div className="inputs">
              <input type="text" name="" placeholder="enter your name" />
              <input type="email" name="" placeholder="enter your email" />
            </div>
            <div className="inputs">
              <input type="text" name="" placeholder="enter your number" />
              <input type="email" name="" placeholder="enter your subject" />
            </div>
            <textarea
              name=""
              placeholder="message"
              cols="20"
              rows="5"
            ></textarea>
            <input type="submit" value="Send" className="btn" />
          </form>

          <div className="fram">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31803.766709132426!2d6.909758421426779!3d4.860479774122906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d00962e66ec3%3A0x4df6e934adfbed2c!2s500102%2C%20Ozuoba!5e0!3m2!1sen!2sng!4v1654601153018!5m2!1sen!2sng"
              allowfullscreen=""
              loading="Lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
