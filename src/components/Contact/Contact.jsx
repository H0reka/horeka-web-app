import React from "react";
import Banner from "../../common/Banner/Banner";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import "./contact.css";

const Contact = () => {
  return (
    <motion.div className="mt-[10vh]" initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{duration: 1.3}}>
      <div className="contact-container">
        <div className="contact-container-outer">
          <div className="content-wrap-left">
            <h2 className="heading-2 text-cus-brand mb-[20px]">
              Have a question for us?&nbsp;Let us know &amp;&nbsp;we will
              respond!
            </h2>
            <p className="text-[16px] leading-[22px] mb-[10px]">
              Put in your number to get in touch with our team.&nbsp;If your
              question is more urgent, you can use the information below to call
              or email us (or come to our office if you want to scare our
              staff).
            </p>
            <div className="contact-method-wrap">
              <Link to="tel:+919606150255" className="contact-method">
                <div className="contact-icon">
                  <img
                    src="https://assets-global.website-files.com/6489e6bc11d0980ebc5de881/6526fc850ddc4363e0b8f1ef_phone-call.png"
                    height=""
                    alt=""
                    width="20"
                  />
                </div>
                <p className="contact-text mt-[10px]">+91 9606150255</p>
              </Link>
              <Link to="mailto:hello@heroka.app" className="contact-method">
                <div className="contact-icon">
                  <img
                    src="https://assets-global.website-files.com/6489e6bc11d0980ebc5de881/6526fc42a50a4719608c57f3_mail%20(1).png"
                    loading="lazy"
                    width="20"
                    sizes="20px"
                    alt=""
                  />
                </div>
                <p className="contact-text mt-[10px]">hello@horeka.app</p>
              </Link>
            </div>
            <div className="contact-method-wrap">
              <div className="contact-method">
                <div className="contact-icon">
                  <img
                    src="https://assets-global.website-files.com/6489e6bc11d0980ebc5de881/6526fc1db4d796f342c6743d_location.png"
                    sizes="20px"
                    alt=""
                    width="20"
                  />
                </div>
                <p className="contact-text">Bellandur, Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner heading="Get a callback from us" buttontxt="Submit" />
    </motion.div>
  );
};

export default Contact;
