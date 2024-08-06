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
              alt="Horeka logo"
              className="footer-logo"
            />
            <p className="paragraph-2">
              A trust-worthy, empathetic and reliable wholesale supplier for
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
            <Link to="/faq" className="footer-link">
              FAQ
            </Link>
            <Link to="/terms" className="footer-link">
              Terms
            </Link>
            <Link to="/privacy" className="footer-link">
              Privacy
            </Link>
          </div>
        </div>
        <div className="footer-legal text-center">
            <div className="legal">Horeka Food Works LLP {currentYear}</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;