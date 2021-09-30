import React from "react";
import "./icon.scss";

function ChampIcon({ sizeLg }) {
  return (
    <div
      className='champIcon_container position-relative d-flex justify-content-center align-items-center'
      style={{
        width: `${sizeLg === true ? "6rem" : "3rem"}`,
        height: `${sizeLg === true ? "6rem" : "3rem"}`,
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

function RegionIcon({ sizeLg }) {
  return (
    <div
      className='champIcon_container position-relative d-flex justify-content-center align-items-center'
      style={{
        width: `${sizeLg === true ? "6rem" : "3rem"}`,
        height: `${sizeLg === true ? "6rem" : "3rem"}`,
      }}
    >
      <div className='avatar position-relative d-flex justify-content-center align-items-center'>
        <img
          src='https://universe.leagueoflegends.com/esimages/content_type_icon_faction__14mjH.png'
          alt='region'
        />
      </div>
    </div>
  );
}
function MapIcon({ sizeLg }) {
  return (
    <div
      className='champIcon_container position-relative d-flex justify-content-center align-items-center'
      style={{
        width: `${sizeLg === true ? "6rem" : "3rem"}`,
        height: `${sizeLg === true ? "6rem" : "3rem"}`,
      }}
    >
      <div className='avatar position-relative d-flex justify-content-center align-items-center'>
        <img
          src='https://universe.leagueoflegends.com/images/freljord_crest_icon.png'
          alt='mapIcon'
        />
      </div>
    </div>
  );
}

export { ChampIcon, RegionIcon, MapIcon };
