import React from "react";
import { Link } from "react-router-dom";

const Bottom = () => {

  const scroll = () => {
    const section = document.getElementById('banner-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block:"nearest" });
    }
  };

  return (
    <div id="Banner" className="banner">
      <div className="banner-wrap">
        <div className="notice-text">
          We're launching our app very soon.{" "}
            <Link to="/#banner-section" onClick={scroll} className="white-link">
              GET&nbsp;NOTIFIED
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
