import React from "react";
import "./CardRegion.scss";
function CardRegion({ regionBg, regionIcon, regionName }) {
  return (
    <div className='card_region_container'>
      <div className='region_bg'>
        <img src={regionBg} alt='background' />
      </div>
      <div className='region_icon'>
        <img src={regionIcon} alt='icon' />
      </div>
      <div className='region_name'>{regionName}</div>
    </div>
  );
}

export default CardRegion;
