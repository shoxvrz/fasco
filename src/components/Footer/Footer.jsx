import React from "react";
import  './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__up">
        <div className="footer__up-logo">
          <h1>Fasco</h1>
        </div>
        <div className="footer__up-navigations">
          <li>Support Center</li>
          <li>Invoicing</li>
          <li>Contact</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>FAQ,s</li>
        </div>
      </div>
      <div className="footer__down">
        <p>Copyright © 2022 Xpro . All Rights Reseved.</p>
      </div>
    </footer>
  );
};

export default Footer;
