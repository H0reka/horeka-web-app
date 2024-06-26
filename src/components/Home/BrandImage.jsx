import React from "react";
import "./home.css";

const BrandImage = () => {
  return (
    <div className=" bg-cus-grey-orange py-8 items-center justify-center text-center  ">
      <div className="title-wrapper">
        <h2 className="text-cus-brand text-[1.5rem] font-medium">
          Trusted and loved by restaurants, cafes and organisations of all sizes
        </h2>
      </div>
      <div className="container w-[100%] max-w-[1200px] relative">
        <div className="grid-6 grid-3">
          <div className="brand-img">
            <img
              className=" max-w-[50%] my-[20px]  "
              src="/brand-images/khansaheb.webp"
              alt="Khan Saheb"
            />
          </div>
          <div className="brand-img">
            <img
              className=" max-w-[50%] my-[20px]  "
              src="/brand-images/dailysushi.webp"
              alt="Daily Sushi"
            />
          </div>
          <div className="brand-img">
            <img
              className=" max-w-[50%] my-[20px]  "
              src="/brand-images/indiqube.webp"
              alt="Indiqube"
            />
          </div>
          <div className="brand-img">
            <img
              className=" max-w-[50%] my-[20px]  "
              src="/brand-images/basilpizza.webp"
              alt="Basil Pizza"
            />
          </div>
          <div className="brand-img">
            <img
              className=" max-w-[50%] my-[20px]  "
              src="/brand-images/lapinoz.webp"
              alt="La Pinoz"
            />
          </div>
          <div className="brand-img">
            <img
              className=" max-w-[50%] my-[20px]  "
              src="/brand-images/mumbaixpress.webp"
              alt="Mumbai Xpress"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandImage;
