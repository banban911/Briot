import React from "react";
import CardRegion from "../../components/card/CardRegion";
import "./Region.scss";
function Region() {
  const regionInfo = [
    {
      bg: "https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/bandle-city_splash.jpg",
      icon: "https://universe.leagueoflegends.com/images/bandle_city_crest_icon.png",
      name: "bandle city",
    },
  ];

  const linkstyle = {
    paddingTop: "1rem",
    fontSize: "4rem",
    fontWeight: "bold",
    fontFamily: "'Source Serif Pro', serif",
    // color: "rgb(103, 71, 31)",
    color: "#fff",
    background:
      "rgba(0, 0, 0, 0) -webkit-linear-gradient(bottom, rgb(103, 71, 31), rgb(203, 172, 98)) repeat scroll 0% 0% padding-box text",
    letterSpacing: "1rem",
  };

  return (
    <div className='container region'>
      <h1 style={linkstyle}>REGION</h1>
      <div className='d-flex'>
        {regionInfo.map((item, index) => (
          <div style={{ flex: "0 0 25%" }} className='px-2'>
            <CardRegion
              key={index}
              regionBg={item.bg}
              regionName={item.name.toUpperCase()}
              regionIcon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Region;
