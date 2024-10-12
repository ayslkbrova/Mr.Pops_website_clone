import React, { useState } from "react";
import '../style/footer.css'


const Footer = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [formData, setFormData] = useState({
    city: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleDropdownToggle = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
  
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = "This field is required";
      }
    });

    if (Object.keys(errors).length === 0) {
     
      console.log("Form submitted:", formData);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <section id="footer">
      <h1>HAVE A QUESTION? THEN THERE IS AN ANSWER!</h1>

     
      <form id="footer-form" onSubmit={handleSubmit}>
        <div id="footer-dropdown">
          <button
            type="button"
            id="footer-dropdown-btn"
            onClick={handleDropdownToggle}
          >
            Proposals and ideas for cooperation, collaborations
            <span className="arrow">▼</span>
          </button>
          <div
            id="footer-dropdown-content"
            style={{ display: dropdownActive ? "block" : "none" }}
          >
            <p>Cooperation for retail partners or distributors</p>
            <p className="active">
              Proposals and ideas for cooperation, collaborations
            </p>
            <p>Proposals from suppliers</p>
            <p>Customer support and other requests</p>
          </div>
        </div>

        <div id="footer-form-element">
          <input
            type="text"
           id="footer-input"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className={formErrors.city ? "error" : ""}
          />
          <span id="footer-alarm-icon">
            <img src="alarm.svg" alt="" />
          </span>
          {formErrors.city && <p className="error-text">{formErrors.city}</p>}
        </div>

        <div id="footer-form-element">
          <input
            type="text"
        id="footer-input"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className={formErrors.name ? "error" : ""}
          />
          <span id="footer-alarm-icon">
            <img src="alarm.svg" alt="" />
          </span>
          {formErrors.name && <p className="error-text">{formErrors.name}</p>}
        </div>
        <div id="footer-form-element">
          <input
            type="text"
           id="footer-input"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className={formErrors.phone ? "error" : ""}
          />
          <span id="footer-alarm-icon">
            <img src="alarm.svg" alt="" />
          </span>
          {formErrors.phone && <p className="error-text">{formErrors.phone}</p>}
        </div>
        <div id="footer-form-element">
          <input
            type="email"
          id="footer-input"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={formErrors.email ? "error" : ""}
          />
          <span id="footer-alarm-icon">
            <img src="alarm.svg" alt="" />
          </span>
          {formErrors.email && <p className="error-text">{formErrors.email}</p>}
        </div>

        <textarea
         id="footer-textarea" 
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className={formErrors.message ? "error" : ""}
        />
        {formErrors.message && (
          <p className="error-text">{formErrors.message}</p>
        )}
        <button type="submit" id="footer-button">
          Send
        </button>
      </form>

      {/* Footer Section */}
      <div id="footer-footer">
        <div id="footer-footer-content">
          <p>© mr.Pops / All Rights Reserved</p>
          <nav id="footer-footer-nav">
            <a href="#" id="footer-footer-link">
              Public offer
            </a>
            <a href="#" id="footer-footer-link">
              Facebook
            </a>
            <a href="#" id="footer-footer-link">
              Instagram
            </a>
            <a href="#" id="footer-footer-link">
              Telegram chat bot
            </a>
          </nav>
          <p>Made by Advanced Team</p>
        </div>
      </div>
    </section>
  );
};
export default Footer;

