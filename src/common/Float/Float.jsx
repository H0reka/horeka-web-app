import React, { useEffect, useState } from 'react'
import './float.css'

const Float = () => {
  const [isShaking, setIsShaking] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const shakeDuration = 500;
    const pauseDuration = 1500; 

    const toggleShake = () => {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, shakeDuration);
    };
    toggleShake();
    const interval = setInterval(toggleShake, shakeDuration + pauseDuration);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <div className={`float ${isShaking&&!clicked?'bounce':''}`} onClick={()=>setClicked(true)}>
      <a target='__blank' href=" https://api.whatsapp.com/send?phone=9606150255">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png" width="40px" height="40px" alt="" /></a>
    </div>
    </>
  )
}

export default Float
