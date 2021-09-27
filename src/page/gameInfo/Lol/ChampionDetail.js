import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RadarChart } from "../../../components/chart/Chart";
import { ChampIcon } from "../../../components/icons/Icons";
const axios = require("axios");
function ChampionDetail() {
  const { championId } = useParams();
  const [championdetail, setChampiondetail] = useState([]);

  const fetchChampion = async () => {
    try {
      const response = await axios.get(
        `http://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion/${championId}.json`
      );
      setChampiondetail(response.data.data[championId]);
      console.log(championdetail.skins);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchChampion();
  }, []);

  return (
    <div style={{ marginTop: "69px" }}>
      <div className='filter_search py-2'>
        <div className='searchbykeywords d-flex'>
          <ChampIcon />
          <input type='text' placeholder='Enter name or id' />
        </div>
      </div>
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
              webkitTextFillColor: "transparent",
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
        style={{ backgroundColor: "rgba(0, 0, 0, .8)" }}
      >
        <div>
          <div className='champion_feature p-3' style={{ flex: "0 0 40%" }}>
            <RadarChart info={{ ...championdetail.info }} />
          </div>
          <div className='lore'>
            <p>{championdetail.lore}</p>
          </div>
        </div>
        <div className='skins d-flex' style={{ flex: "0 0 60%" }}>
          {[...Object.values({ ...championdetail.skins })]
            .slice(1) // except the default skin
            .map((skin, index) => (
              <img
                key={index}
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skin.num}.jpg`}
                alt='skins'
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ChampionDetail;
