import React, { useEffect } from 'react';
import faqData from '../data/faq.json'; 
import { Helmet } from 'react-helmet';

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="faq-section">
      <Helmet>
        <title>FAQ</title>
      </Helmet>
      <div className="faq-header">
        <div className="big-title">
          <h1>Faq</h1>
        </div>
      </div>

      {faqData.map((item, index) => (
        <div className="faq-content" key={index}>
          <div className="faq-text">
            <h2>{item.title}</h2>
            <div className="content">
              {item.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Faq;
