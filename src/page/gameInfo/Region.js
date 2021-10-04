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
    {
      bg: "https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/bilgewater_splash.jpg",
      icon: "https://universe.leagueoflegends.com/images/bilgewater_crest_icon.png",
      name: "bilgewater",
    },
    {
      bg: "https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/demacia_splash.jpg",
      icon: "https://universe.leagueoflegends.com/images/demacia_crest_icon.png",
      name: "demacia",
    },
    {
      bg: "https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/ionia-01.jpg",
      icon: "https://universe.leagueoflegends.com/images/iona_crest_icon.png",
      name: "ionia",
    },
    {
      bg: "https://universe-meeps.leagueoflegends.com/v1/assets/images/ixtal_splash.jpg",
      icon: "https://universe.leagueoflegends.com/images/ixtal_crest_icon.png",
      name: "ixtal",
    },
    {
      bg: "https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/noxus_splash.jpg",
      icon: "https://universe.leagueoflegends.com/images/noxus_crest_icon.png",
      name: "noxus",
    },
    {
      bg: "https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/piltover_splash.jpg",
      icon: "https://universe.leagueoflegends.com/images/piltover_crest_icon.png",
      name: "piltover",
    },
    {
      bg: "https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/shadow-isles_splash.jpg",
      icon: "https://universe.leagueoflegends.com/images/shadow_isles_crest_icon.png",
      name: "shadow isles",
    },
    {
      bg: "https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/shurima_splash.jpg",
      icon: "https://universe.leagueoflegends.com/images/shurima_crest_icon.png",
      name: "shurima",
    },
    {
      bg: "https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/mount-targon_splash.jpg",
      icon: "https://universe.leagueoflegends.com/images/mt_targon_crest_icon.png",
      name: "targon",
    },
    {
      bg: "https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/freljord_splash.jpg",
      icon: "https://universe.leagueoflegends.com/images/freljord_crest_icon.png",
      name: "the freljord",
    },
    {
      bg: "https://universe-meeps.leagueoflegends.com/v1/assets/images/void-an-unknowable-power.jpg",
      icon: "https://universe.leagueoflegends.com/images/void_crest_icon.png",
      name: "the void",
    },
    {
      bg: "https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/zaun_splash.jpg",
      icon: "https://universe.leagueoflegends.com/images/zaun_crest_icon.png",
      name: "zaun",
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
      <div className='card_regions d-flex'>
        {regionInfo.map((item, index) => (
          <div className='px-2'>
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
