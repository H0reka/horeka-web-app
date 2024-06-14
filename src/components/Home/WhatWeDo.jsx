import React from 'react'
import Card from './ShortCard'
import './home.css'

const WhatWeDo = () => {
  return (
    <div className="bg-cus-grey-orange relative py-[40px] px-[20px] justify-center content-center text-center">
        <h1 className="text-[5vh] text-cus-brand  max-w-[100%] mb-14 ">
          Why Choose Horeka?
        </h1>
        <div className="grid grid-5 items-center text-center">
          <Card
            title="Save Your Money"
            content="Order less, at bulk price. COD for extra savings."
            img="/file_2024-06-07_07.13.33.webp"
          />
          <div className="line-con hidden lg:flex">
            <div className=" line"></div>
          </div>
          <Card
            title="Save Your Time"
            content="Order in 2-clicks with our daily lists. OR Fix a daily quantity and forget ordering."
            img="/file_2024-06-07_07.13.21.webp"
          />
          <div className="line-con hidden lg:flex">
            <div className="line"></div>
          </div>
          <Card
            title="Save your Business"
            content="Forgot to place order last night? No more Out-of-stock."
            img="/file_2024-06-07_07.12.59.webp"
          />
        </div>
      </div>
  )
}

export default WhatWeDo
