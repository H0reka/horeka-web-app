import React from 'react'
import './home.css'

const Card = (props) => {
  return (
    <div>
            <div className="cards">
              <img src={props.img} alt="" className=' rounded-lg'/>
            </div>
            <h1 className="header-h2 px-0">{props.title}</h1>
            <p>{props.content}</p>
    </div>
  )
}

export default Card
