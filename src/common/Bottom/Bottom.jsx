import React from "react";
import { Link} from "react-router-dom";

const Bottom = () => {
  const tab = window.location.href.split("/")[3];
  const scroll = () =>{
    const section = document.getElementById('banner-section');
    section.scrollIntoView({behaviour: 'smooth'});
  }
  return (
    <div id="Banner" className="banner">
      <div className="banner-wrap">
        <div className="notice-text">
          We're launching our app very soon.{" "}
          {tab === "" ? (
            <span className=" cursor-pointer" onClick={()=>scroll()}>GET&nbsp;NOTIFIED</span>
          ) : (
            <Link to="/#banner-section" className="white-link">
              GET&nbsp;NOTIFIED
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bottom;
