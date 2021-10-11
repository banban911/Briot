import React, { useState, useEffect } from "react";
// import "swiper/css/bundle";

import { useParams } from "react-router-dom";
import { RadarChart } from "../../components/chart/Chart";
import "./Lol.scss";
const axios = require("axios");
function ChampionDetail() {
  const { championId } = useParams();
  const [championdetail, setChampiondetail] = useState([]);

  useEffect(() => {
    const fetchChampion = async () => {
      try {
        const response = await axios.get(
          `https://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion/${championId}.json`
        );
        setChampiondetail(response.data.data[championId]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChampion();
  }, [championId]);

  return (
    <div
      className='ChampionDetail_container'
      style={{
        paddingTop: "85px",
        // backgroundImage: `url('https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fbard-color-splash.jpg&resize=1800:')`,
        background:
          "rgb(3,2,23) linear-gradient(90deg, rgba(3,2,23,0.9699230033810399) 0%, rgba(11,11,11,0.9783263647255778) 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className='champion_poster position-relative'
        style={{
          backgroundImage: `url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg")`,
        }}
      >
        <div className='champion_name position-absolute text-center w-100'>
          <span className='mb-0'>{championdetail.name}</span>
          <div className='d-flex justify-content-center'>
            <img
              src='https://universe.leagueoflegends.com/images/t1HeaderDivider.png'
              alt='header divider'
            />
          </div>
          <p
            style={{
              color: "#fff",
              fontFamily: "'Urbanist', sans-serif",
              letterSpacing: "0.5rem",
              textTransform: "uppercase",
            }}
          >
            {championdetail.title}
          </p>
        </div>
      </div>
      {/* <div className="nav_championDetail">
        <Link></Link>
      </div> */}
      <div
        className='d-flex flex-column flex-md-row flex-sm-column p-2'
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <div
          className='champion_feature d-flex justify-content-center p-3'
          // style={{ flex: "0 0 40%" }}
        >
          <RadarChart info={{ ...championdetail.info }} />
        </div>
        <div className='lore d-flex flex-column align-items-center'>
          <h3>Origin</h3>
          <p>{championdetail.lore}</p>
        </div>
      </div>
    </div>
  );
}

export default ChampionDetail;
