import React, { useState } from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9250726479345!2d108.22257669999999!3d16.069377499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421833d5d51043%3A0x596a384ad09764ee!2zVMOyYSBOaMOgIFZOUFQgxJDDoCBO4bq1bmcsIDM4IFnDqm4gQsOhaSwgSOG6o2kgQ2jDonUgMSwgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMA!5e0!3m2!1svi!2s!4v1708669749998!5m2!1svi!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';

  const [message, setMessage] = useState("Create a message here...");

  const handleFocusTextarea = () => {
    if (message === "Create a message here...") {
      setMessage("");
    }
  };

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>
                  38 Yen Bai, VNPT Danang Building, Hai Chau, Danang, Vietnam
                </p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> starclass@manunited.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+84 236 3584 919</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea
                cols="30"
                rows="10"
                onFocus={handleFocusTextarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
