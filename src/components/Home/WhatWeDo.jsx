import React from 'react'
import Card from './ShortCard'
import './home.css'

const WhatWeDo = () => {
  return (
    <div className="relative py-[40px] px-[20px] justify-center content-center text-center">
        <h1 className="text-[5vh] text-cus-brand  max-w-[100%] mb-14 ">
          Why Choose Horeka?
        </h1>
        <div className="grid grid-5 items-center text-center">
          <Card
            title="Save Money"
            content="Order less, at bulk price. COD for extra savings."
            img="/file_2024-06-07_07.13.33.webp"
            // img="https://assets-global.website-files.com/6489e6bc11d0980ebc5de881/65072a34fa025b719179b5d4_Frame%2037030.png"
          />
          <div className="line-con">
            <div className=" line"></div>
          </div>
          <Card
            title="Save Time"
            content="Order in 2-clicks with our daily lists. OR Fix a daily quantity and forget ordering."
            img="/file_2024-06-07_07.13.21.webp"
            // img="https://assets-global.website-files.com/6489e6bc11d0980ebc5de881/65072a4585186409b5232e9e_Frame%2037034.png"
          />
          <div className="line-con">
            <div className="line"></div>
          </div>
          <Card
            title="Save your Business"
            content="Forgot to place order last night? No more Out-of-stock."
            img="/file_2024-06-07_07.12.59.webp"
            // img="https://assets-global.website-files.com/6489e6bc11d0980ebc5de881/65072a512bef1f6db3b9d2a7_Frame%2037029.png"
          />
        </div>
      </div>
  )
}

export default WhatWeDo
