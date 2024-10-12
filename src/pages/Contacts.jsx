import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Helmet>
      <title>Contacts</title>
    </Helmet>
      <div className="big-title">
        <h1>Contacts</h1>
      </div>
      <ul className="contacts-links">
        <li className="contact-item">
          <a href="tel:+380970422400" className="contact-link">
            <span className="text-bubble">
              <svg
                width="430.46"
                height="88"
                viewBox="0 0 430.46 88"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <text x="0" y="0.2em" fontSize="1em" alignmentBaseline="hanging">
                  +38 097 042 24 00
                </text>
              </svg>
              <span>+38 097 042 24 00</span>
            </span>
          </a>
        </li>
        <li className="contact-item">
          <a href="mailto:mrpopsua@gmail.com" className="contact-link">
            <span className="text-bubble">
              <svg
                width="524.67"
                height="88"
                viewBox="0 0 524.67 88"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <text x="0" y="0.2em" fontSize="1em" alignmentBaseline="hanging">
                  mrpopsua@gmail.com
                </text>
              </svg>
              <span>mrpopsua@gmail.com</span>
            </span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Contacts;
