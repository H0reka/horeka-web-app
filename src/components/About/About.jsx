import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3 }}
    >
      <div className="header-section">
        <div className="container-flex">
          <motion.div
            className="title-wrap-centre"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="header-h1">
              We are transforming B2B for hospitality beyond affordability
            </h1>
          </motion.div>
        </div>
      </div>
      <div className="p-[18px] lg:p-8 text-center mx-2 lg:mx-14 items-center flex">
        <div className="flex gap-4 text-left align-center flex-col lg:flex-col pt-4 items-center">
          <h1 className="header-h1  max-w-none">
            Horeka.app is a RATE focused raw-material vendor for tech-friendly
            restaurants and cafes.
          </h1>
          <div className="flex flex-col lg:flex-row gap-5">
            <img src="/RATE.webp" className=" rounded-[3em] w-[40em]" alt="RATE: reliability, affordability, transparency, empathy" />
            <div className="justify-center flex flex-col">
              <div className="ml-6 self-center lg:self-auto">
                <ul className=" text-lg mb-3 text-left list-decimal">
                  <li className=" font-bold text-xl">Reliability</li>
                  <li className=" font-bold text-xl">Affordability</li>
                  <li className=" font-bold text-xl">Transaprency</li>
                  <li className=" font-bold text-xl">Empathy</li>
                </ul>
              </div>
              <p>
                HOREKA.APP is revolutionizing B2B interactions in the hotel
                industry by simplifying sourcing processes and offering value
                beyond cost savings. It aims to become the go-to platform for
                food-related procurement, ensuring efficiency and quality in
                every transaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
