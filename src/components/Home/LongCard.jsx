import React from "react";
import ReactGA from 'react-ga'
import './home.css'

const LongCard = (props) => {
  const handleHover = () => {
    ReactGA.event({
      category: 'Get in Touch',
      action: 'Hover',
      label: 'Contact Button'
    });
  };
  return (
    <div>
      <div className={`flex lg:px-36 px-0 py-12 mt-0 lg:gap-12 gap-8 flex-col ${props.rev==="1"?"lg:flex-row-reverse":"lg:flex-row"} `}>
        <div className="landing-image-wrap">
          <img
            src={props.img}
            alt={props.alt}
            className=" lg:w-96 w-72 "
          />
        </div>
        <div className="lg:text-left text-center self-center max-w-[40em]">
          <h2 className="text-cus-brand">{props.title}</h2>
          <div
            className=" text-cus-slate-grey leading-[1.5] text-lg"
            dangerouslySetInnerHTML={{ __html: props.content }}
          ></div>
          <div className="button-wrapper  opacity-100">
            <button className="btn" onMouseEnter={() => handleHover()} onClick={props.func}>Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongCard;
