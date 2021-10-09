import React, { useState, useEffect } from "react";
// import "swiper/css/bundle";

import { useParams } from "react-router-dom";
import { RadarChart } from "../../components/chart/Chart";
import PaginationSlide from "../../components/slide/PaginationSlide";
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
          backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg')`,
          backgroundSize: "cover",
          // backgroundColor:
          //   "linear-gradient(180deg,rgba(0,0,0,0) 65%,rgba(10,10,12,.1) 70%,#0a0a0c 90%)",
          // backgroundBlendMode: "multiply",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "70vh",
        }}
      >
        <div
          className='champion_name position-absolute text-center w-100'
          style={{
            bottom: "0",
            background: "rgba(0, 0, 0, 0.8)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          <span
            className='mb-0'
            style={{
              color: "rgb(103, 71, 31)",
              background:
                "rgba(0, 0, 0, 0) -webkit-linear-gradient(bottom, rgb(103, 71, 31), rgb(203, 172, 98)) repeat scroll 0% 0% padding-box text",
              fontSize: "6em",
              fontWeight: "bold",
              letterSpacing: "0.25rem",
              textTransform: "uppercase",
            }}
          >
            {championdetail.name}
          </span>
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
        className='d-flex p-2'
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <div className='d-flex flex-column'>
          <div className='champion_feature p-3' style={{ flex: "0 0 40%" }}>
            <RadarChart info={{ ...championdetail.info }} />
          </div>
          <div className='lore'>
            <p>{championdetail.lore}</p>
          </div>
        </div>
        <div
          className='skins d-flex'
          style={{ flex: "0 0 60%", overflow: "hidden" }}
        >
          <PaginationSlide
            slideContent={{
              name: `${championId}`,
              values: [...Object.values({ ...championdetail.skins })].slice(1),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ChampionDetail;
