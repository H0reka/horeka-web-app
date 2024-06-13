// import { Typography } from "@material-tailwind/react";
import './Footer.css'
import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-layout-grid footer-grid">
          <div
            id="footer-con"
            className="footer-column"
          >
            <img
              src="https://assets-global.website-files.com/6489e6bc11d0980ebc5de881/64c00dab5a1b4c30a90b57e5_horeka..png"
              width="100"
              alt=""
              className="footer-logo"
            />
            <p className="paragraph-2">
              A trust-worthy, empathetic and reliable wholesale Supplier for
              restaurants, kitchens and organisations of all sizes.
            </p>
          </div>
          <div
            id="navigation-sec"
            className="footer-column"
          >
            <div className="title">NAVIGATION</div>
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/about" className="footer-link">
              Who We Are
            </Link>
            <Link to="/products" className="footer-link">
              Products
            </Link>
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </div>
          <div
            id="company-sec"
            className="footer-column"
          >
            <div className="title">COMPANY</div>
            <Link to="/terms" className="footer-link">
              Terms
            </Link>
            <Link to="/faq" className="footer-link">
              FAQ
            </Link>
          </div>
        </div>
        <div className="footer-legal">
          <div className="footer-left">
            <div className="legal">Horeka Food Works LLP {currentYear}</div>
          </div>
          <div className="footer-right">
            <div className="social-icon-wrap">
              <a
                href="https://www.linkedin.com/company/horeka-food-works-llp"
                target="_blank"
                className="social-link w-footer-inline-block"
              >
                <img
                  src="https://assets-global.website-files.com/6489e6bc11d0980ebc5de881/6526feceb97a93f27fa01e52_linkedin.png"
                  sizes="(max-width: 479px) 5vw, (max-width: 767px) 18px, (max-width: 991px) 2vw, 18px"
                  alt=""
                  className="social-icon"
                />
              </a>
            </div>
            <a
              href="mailto:hello@horeka.app?subject=Enquiry%20from%20your%20website"
            >
              <div className="text-cus-slate-grey">hello@horeka.app</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;