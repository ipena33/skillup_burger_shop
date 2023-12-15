import React, { useState, useEffect } from "react";
import burger from "../../assets/burger2.png";
import Popup from "reactjs-popup";

const Contact = () => {
  const [formStyle, setFormStyle] = useState({ transform: 'translateX(-100vw)', opacity: 0 });
  const [borderStyle, setBorderStyle] = useState({ transform: 'translateX(100vw)', opacity: 0 });
  const [imageStyle, setImageStyle] = useState({ transform: 'translateY(-100vh)', opacity: 0 });

  useEffect(() => {
    setFormStyle({ transform: 'translateX(0)', opacity: 1, transition: 'all 0.2s' });
    setBorderStyle({ transform: 'translateX(0)', opacity: 1, transition: 'all 0.2s' });
    setImageStyle({ transform: 'translateY(0)', opacity: 1, transition: 'all 1s' });
  }, []);

  return (
    <section className="contact">
      <form style={formStyle}>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message..." cols="30" rows="10"></textarea>
        <Popup trigger={<button type="button">Send</button>}>
          <div
            style={{
              color: "red",
              transform: "translate(25%,-700%)",
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            Thank you for contacting us! We will get back to you shortly.
          </div>
        </Popup>
      </form>
      <div className="formBorder" style={borderStyle}>
        <div style={imageStyle}>
          <img src={burger} alt="Burger" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
