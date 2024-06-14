import React from "react";
import Banner from "../../common/Banner/Banner";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
  return (
    <motion.div
      className="mt-[10vh]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3 }}
    >
      <div className="contact-container">
        <div className="contact-container-outer">
          <div className="content-wrap-left">
            <h2 className="heading-2 text-cus-brand">
              Have a question for us?&nbsp;Let us know &amp;&nbsp;we will
              respond!
            </h2>
            <p className="text-[16px] leading-[22px]">
              Put in your number to get in touch with our team.&nbsp;If your
              question is more urgent, you can use the information below to call
              or email us.
            </p>
            <p className="text-[16px] leading-[22px] mb-8">(Or come to our office if you want to scare our staff)</p>
            <div className="grid grid-cols-1 grid-rows-4 gap-2 lg:gap-5">
              <Link to="tel:+919606150255" className="contact-method">
                <div className="contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>
                <p className="contact-text mt-[10px]">+91 9606150255</p>
              </Link>
              <Link to="mailto:hello@heroka.app" className="contact-method">
                <div className="contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <p className="contact-text mt-[10px]">hello@horeka.app</p>
              </Link>
              <Link to="/contact" className="contact-method">
                <div className="contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <p className="contact-text mt-[10px]">Bellandur, Bangalore</p>
              </Link>
              <Link
                to="https://www.linkedin.com/company/horeka-food-works/"
                target="__blank"
                className="contact-method"
              >
                <div className="contact-icon">
                  <img src="/linkedin.svg" className="filter-orange" alt="" />
                </div>
                <p className="contact-text mt-[10px]">Horeka Food Works</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Banner heading="Get a callback from us" buttontxt="Submit" />
    </motion.div>
  );
};

export default Contact;
