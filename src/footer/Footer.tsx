import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="flex">
        <section className="flex-content padding_1x">
          <h3>Top Products</h3>
          <a href="/"><span>Gold</span></a>
          <a href="/"><span>Iron</span></a>
          <a href="/"><span>Copper</span></a>
          <a href="/"><span>Silver</span></a>
        </section>
        <section className="flex-content padding_1x">
          <h3>Quick Links</h3>
          <a href="/"><span>About Us</span></a>
          <a href="/"><span>Account</span></a>
          <a href="/"><span>Trading Platform</span></a>
          <a href="/"><span>Terms of Service</span></a>
        </section>
      </div>
      <div className="flex">
        <section className="flex-content padding_1x">
          <p>Copyright kuberspace©2023 All rights reserved kuberspace.com</p>
        </section>
        <section className="flex-content padding_1x">
          <a href="/" aria-label="Facebook"><i className="fa fa-facebook" /></a>
          <a href="/" aria-label="Twitter"><i className="fa fa-twitter" /></a>
          <a href="/" aria-label="Linkedin"><i className="fa fa-linkedin" /></a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
