import React from "react";
import { Link } from "react-router-dom";

const BannerSlider = (props) => {
  return (
    <div className="group">
      <Link to={props.link}>
        <img
          src={props.img}
          alt={props.alt}
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
        />
      </Link>
    </div>
  );
};

export default BannerSlider;
