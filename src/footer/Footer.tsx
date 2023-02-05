import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="flex">
        <section className="flex-content padding_1x">
          <h3>Top Products</h3>
          <a href="/">Managed Website</a>
          <a href="/">Manage Reputation</a>
          <a href="/">Power Tools</a>
          <a href="/">Marketing Service</a>
        </section>
        <section className="flex-content padding_1x">
          <h3>Quick Links</h3>
          <a href="/">Jobs</a>
          <a href="/">Brand Assets</a>
          <a href="/">Investor Relations</a>
          <a href="/">Terms of Service</a>
        </section>
        <section className="flex-content padding_1x">
          <h3>Features</h3>
          <a href="/">Jobs</a>
          <a href="/">Brand Assets</a>
          <a href="/">Investor Relations</a>
          <a href="/">Terms of Service</a>
        </section>
        <section className="flex-content padding_1x">
          <h3>Resources</h3>
          <a href="/">Guides</a>
          <a href="/">Research</a>
          <a href="/">Experts</a>
          <a href="/">Agencies</a>
        </section>
        <section className="flex-content padding_1x">
          <h3>Newsletter</h3>
          <p>You can trust us. we only send promo offers,</p>
          <fieldset className="fixed_flex">
            <input type="email" name="newsletter" placeholder="Your Email Address" />
            <button type="button" className="btn btn_2"> Subscribe </button>
          </fieldset>
        </section>
      </div>
      <div className="flex">
        <section className="flex-content padding_1x">
          <p>Copyright ©2023 All rights reserved || website name</p>
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
