import React from "react";
import "./Card.scss";
import LazyImage from "../hooks/LazyImage";
function CardRegion({ regionBg, regionIcon, regionName }) {
  return (
    <div className='card_region_container'>
      <div
        className='card_region_bg'
        style={{ backgroundImage: `url(${regionBg})` }}
      ></div>
      <div className='region_icon'>
        <LazyImage src={regionIcon} alt='icon' />
      </div>
      <div className='region_name'>{regionName}</div>
    </div>
  );
}

export default CardRegion;
