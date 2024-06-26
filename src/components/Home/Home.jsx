import React, { useRef, useEffect } from "react";
import "./home.css";
import BrandImage from './BrandImage'
import WhatWeDo from './WhatWeDo'
import TrackRecord from "./TrackRecord";
import ElaborateServices from './ElaborateServices'
import Banner from "../../common/Banner/Banner";
import ReactGA from 'react-ga'
import {motion} from 'framer-motion'

const Home = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    ReactGA.event({
      category: 'Get in Touch',
      action: 'Clicked',
      label: 'Contact Button'
    });
  };
  const container = {
    hidden: { opacity: 0, x: -10 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  };
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block:"nearest"});
      }
    }
  }, [location]);
  const handleHover = () => {
    ReactGA.event({
      category: 'Get in Touch',
      action: 'Hover',
      label: 'Contact Button'
    });
  };
  return (
    <>
        {/*Landing Section Content */}
      <header className="cus-header">
        <motion.div
          className="container-flex text-[15px]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="landing-image-wrap">
            <motion.div className="blob" variants={item}></motion.div>
          </div>
          <div className="landing-content">
            <motion.h1 variants={item} className="landing-h1  opacity-100">
              Wholesale Supplier for Restaurants
            </motion.h1>
            <motion.p
             
              variants={item}
              className="landing-paragraph  opacity-100"
            >
              <strong>STOP</strong> Worrying about your{" "}
              <strong>Dairy, Meat and Frozen</strong> procurement with{" "}
              <span className="text-cus-brand font-semibold">Horeka.app</span>.
            </motion.p>
            <div className="button-wrapper  opacity-100">
              <motion.a
                variants={item}
                className="btn"
                target='__blank' 
                href=" https://api.whatsapp.com/send?phone=9606150255"
                onMouseEnter={handleHover}
              >
                Get in Touch
              </motion.a>
            </div>
            <div className="landing-one-line  opacity-100">
              <motion.div variants={item}>
                <span className="text-cus-brand">Served 700+</span> businesses
                already.
              </motion.div>
            </div>
          </div>
        </motion.div>
      </header>
      {/* Brand Images */}
      <BrandImage/>
      {/*Track Record*/}
      <TrackRecord/>  
      {/*What we do */}
      <WhatWeDo />
      {/* Elaborate Services */}
      <ElaborateServices func={handleClick}/>
      <div className="text-center">
        <h1 className="text-cus-brand text-base lg:text-[1.62rem]">We take full responsibility for our mistakes and are committed to resolving them effectively and decisively.</h1>
      </div>
      <div ref={ref} id="banner-section">
        <Banner
          heading="Get all updates &amp; connect on WhatsApp"
          buttontxt="Get a Callback"
        />
      </div>
    </>
  );
};

export default Home;
