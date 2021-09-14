import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const axios = require("axios");
function ChampionDetail() {
  const { championId } = useParams();
  const [championdetail, setChampiondetail] = useState([]);

  const fetchChampion = async () => {
    try {
      const response = await axios.get(
        `http://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion/${championId}.json`
      );
      console.log(response.data.data[championId]);
      setChampiondetail(response.data.data[championId]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchChampion();
  }, []);

  return (
    <div>
      <div
        className='champion_poster position-relative'
        style={{
          top: "69px",
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
        <Link></Link>
        <Link></Link>
      </div> */}
    </div>
  );
}

export default ChampionDetail;
