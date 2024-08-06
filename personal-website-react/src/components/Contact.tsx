import React from "react";
import "./Contact.css"; // Ensure you create the corresponding CSS file

const Contact: React.FC = () => {
  return (
    <div id="contact">
      <header>
        <a href="/" className="back-button">
          <u>Back</u>
        </a>
        <h1 className="heading">Contact Me</h1>
      </header>
      <section className="contacts">
        <ul>
          <li>
            <a href="mailto:dillanxx@icloud.com">dillanxx@icloud.com</a>
          </li>
          <li>
            <a href="tel:+0820663459">+082 0663459</a>
          </li>
          {/* Add more contact info if needed */}
        </ul>
      </section>
    </div>
  );
};

export default Contact;
