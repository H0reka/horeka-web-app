import React, { useState } from "react";
import Question from "./Question";
import "./faq.css";
import { motion } from "framer-motion";

const Faq = () => {
  const companyQues = [
    {
      ques: "What is Horeka?",
      ans: "Horeka is soon becoming the 1-Stop Platform for eateries and restaurants. Currently transforming Bangalore-India. We supply Perishables ,Licensing services and more as India’s first Quick B2B e-commerce company.",
    },
    {
      ques: "Why only Horeka?",
      ans: "We agree that the restaurant business is tough. Our unique background and understanding of our customer base is what differentiates us.<strong>Through our services, we believe in serving your customers as our customers.</strong> Hence targeting the specific pain points and needs allows us to align our services with the happy smiles of our customers. Join our growing list of Happy Clients.",
    },
    {
      ques: "Products we offer?",
      ans: "Dairy (except milk and curd), some fancy veggies, Meat - Chicken, mutton, and frozen sea food . That’s the basics, There’s more depending on customer need for steady supplies of perishables.",
    },
    {
      ques: "How do you take the payment?",
      ans: " Cash/ UPI/ IMPS/ NEFT/ HDFC-bank Cheque.<strong>  <em>Dua k sath kuch bhi kubool hai.</em> </strong>",
    },
  ];
  const productsQues = [
    {
      ques: "Products we offer?",
      ans: "Dairy (except milk &amp; curd) <br>Some fancy veggies <br>Meat - Chicken, mutton, and frozen sea food . <br>That’s the basics, There’s more depending on customer need for steady supplies of perishables.",
    },
    {
      ques: "Do you deliver for urgent and last minute requirements?",
      ans: "Of course, You’ve come to the right place. Our clients use our smart orders and urgent orders to ensure availability for menu favorites.",
    },
    {
      ques: "What is the Return and Replacement policy?",
      ans: "Since we deal in perishables primarily, If the ticket is raised within the allowed time limit, we do the replacements, no questions asked. For a few products we encourage the customers to check the products at the time of delivery, since a few products don't have a no-returnn no-exchange policy.",
    },
    {
      ques: "How do you take the payment?",
      ans: " Cash/ UPI/ IMPS/ NEFT/ Bank Cheque",
    },
    {
      ques: "Do you provide any service also?",
      ans: " Yes, we offer Licensing &amp; Business Intelligence Services Also, We’re developing systems focused on <strong>saving</strong> your time and <strong>making</strong> operations easy for managing your outlet. This list is in development. Contact us to find out more.",
    },
  ];
  const servicesQues = [
    {
      ques: "Do you provide any service also?",
      ans: " Yes, we offer Licensing &amp; Business Intelligence Services Also, We’re developing systems focused on <strong>saving</strong> your time and <strong>making</strong> operations easy for managing your outlet. This list is in development. Contact us to find out more.",
    },
    {
      ques: "What Does Licensing Services mean?",
      ans: " For doing any business, there is a set of legal compliances that needs to be adhered to. In food business, FSSAI, Labour License, Shop &amp; Establishment Licence, etc, are needed to be legally compliant to run the business. Horeka comes to rescue here by saving your time, petrol and efforts in visiting multiples offices and being offered new dates.",
    },
    {
      ques: "What is Business Intelligence Service?",
      ans: " Today, every business that aspires to sustain and grow long term is playing on numbers and data. Data Analytics offers a clear understanding of a business. It becomes very easy to decide WHAT to do, leaving you with enough time to figure out HOW&nbsp;to do it. Decision making is efficient and economical with Horeka Business Intelligence.",
    },
    {
      ques: "What other services horeka might come up with?",
      ans: "Well, why not let's keep this thing as a little surprise for the market? Rest assured, Horeka's every service will aim towards making your life Easier in Managing your Restaurant.",
    },
  ];
  const [activeTab, setActiveTab] = useState("Tab 1");

  const style = {
    opacity: 1,
    transition: "opacity 300ms ease 0s",
  };

  return (
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{duration: 1.3}}>
      <div className="header-section">
        <div className="container-flex">
          <motion.div
            className="title-wrap-centre"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="header-h1">Frequently Asked Questions</h1>
          </motion.div>
        </div>
      </div>
      <div className="my-[40px]">
        <div className="faq-container">
          <div className="ques-tabs">
            <div className="tab-menu relative">
              <a
                className={`tab-link ${
                  activeTab == "Tab 1" ? "current" : ""
                }`}
                onClick={() => setActiveTab("Tab 1")}
              >
                <div>Our Company</div>
              </a>
              <a
                className={`tab-link max-w-[100%] inline-block ${
                  activeTab == "Tab 2" ? "current" : ""
                }`}
                onClick={() => setActiveTab("Tab 2")}
              >
                <div>Our Products</div>
              </a>
              <a
                className={`tab-link w-inline-block ${
                  activeTab == "Tab 3" ? "current" : ""
                }`}
                onClick={() => setActiveTab("Tab 3")}
              >
                <div>Our Services</div>
              </a>
            </div>

            <div className="tab-content ">
              <div
                className={`tab-pane ${
                  activeTab == "Tab 1" ? "tab-active" : ""
                }`}
                style={style}
              >
                <div className="tab-pane-wrap">
                  {companyQues.map((ele) => (
                    <Question key={ele.ques} ques={ele.ques} ans={ele.ans} />
                  ))}
                </div>
              </div>
              <div
                className={`tab-pane ${
                  activeTab == "Tab 2" ? "tab-active" : ""
                } `}
                // style={activeTab=="Tab 2"?style:""}
              >
                <div className="tab-pane-wrap">
                  {productsQues.map((ele) => (
                    <Question key={ele.ques} ques={ele.ques} ans={ele.ans} />
                  ))}
                </div>
              </div>
              <div
                className={`tab-pane ${
                  activeTab == "Tab 3" ? "tab-active" : ""
                } `}
                // style={activeTab=="Tab 3"?style:""}
              >
                <div className="tab-pane-wrap">
                  {servicesQues.map((ele) => (
                    <Question key={ele.ques} ques={ele.ques} ans={ele.ans} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Faq;
