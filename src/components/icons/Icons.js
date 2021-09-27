import React from "react";
import "./icon.scss";

function ChampIcon({ sizeLg }) {
  return (
    <div
      className='champIcon_container position-relative d-flex justify-content-center align-items-center'
      style={{
        width: `${sizeLg === true ? "4rem" : "2rem"}`,
        height: `${sizeLg === true ? "4rem" : "2rem"}`,
      }}
    >
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
