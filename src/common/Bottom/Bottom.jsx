import React from "react";
import { Link } from "react-router-dom";

const Bottom = () => {

  const scroll = () => {
    const section = document.getElementById('#banner-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block:"nearest" });
    }
  };

  return (
    <div id="Banner" className="bottom">
      <div className="banner-wrap">
        <img src="/playstore.svg" className="h-4 mr-2" alt="" />
        <div className="notice-text">
            <Link to="/#banner-section" onClick={scroll} className="white-link">
              Get notified about our app release.
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
