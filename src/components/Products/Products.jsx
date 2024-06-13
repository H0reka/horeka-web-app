import React from "react";
import "./products.css";
import Card from "./Card";
import { motion } from "framer-motion";

const Products = () => {
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
              Currently we deal with 150+ products and we keep adding regularly
              to our catalogue.
            </h1>
          </motion.div>
        </div>
      </div>
      <div className="relative py-[40px] -z-10">
        <h1 className="landing-h1 text-center max-w-[100%] mb-14 ">
          Our Categories
        </h1>
        <div className="grid grid-3-tests items-center text-center">
          <Card
            title="Fries & Sauces"
            img="/file_2024-06-07_07.13.21.webp"
          />
          <Card
            title="Mutton & Sea Food"
            img="/file_2024-06-07_07.13.21.webp"
            />
          <Card
            title="Dairy & Veggies"
            img="/file_2024-06-07_07.13.21.webp"
            />
        </div>
      </div>
    </motion.div>
  );
};

export default Products;
