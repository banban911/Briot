import React from "react";
import "./icon.scss";

function ChampIcon() {
  return (
    <div className='champIcon_container position-relative d-flex justify-content-center align-items-center'>
      <div className='avatar position-relative d-flex justify-content-center align-items-center'>
        <img
          src='https://universe.leagueoflegends.com/esimages/content_type_icon_champion__3nwJQ.png'
          alt='champion'
        />
      </div>
    </div>
  );
}

export { ChampIcon };
