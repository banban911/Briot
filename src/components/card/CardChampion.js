import React from "react";
import { Link } from "react-router-dom";
import { ChampIcon } from "../icons/Icons";
import "./CardChampion.scss";
function CardChampion(props) {
  const { name, tags, img, url } = props;

  return (
    <Link
      to={url}
      className='d-block p-2 position-relative championCard_wrapper'
      style={{ flex: "0 0 20%", borderRadius: "5px" }}
    >
      <div
        className='championCard_container position-relative'
        style={{ overflow: "hidden" }}
      >
        <div
          className='champion_logo position-relative'
          style={{
            backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${img}_0.jpg'`,
            backgroundPosition: "70.3646% 32.037%",
            backgroundSize: "678px, 717px",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div
          className='championCard_footer pt-3  position-absolute text-center'
          style={{
            width: "100%",
            bottom: "0",
            color: "#fff",
            borderTop: "1px solid #7e633b",
            backgroundColor: "rgba(16, 18, 23, 0.87)",
          }}
        >
          <div
            className='tags pt-0 pt-md-3 pt-sm-0'
            style={{
              fontSize: "0.8rem",
              fontWeight: "600",
              color: "#937341",
              letterSpacing: "1px",
            }}
          >
            {tags}
          </div>
          <div
            className='name'
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "#fff",
              letterSpacing: "2px",
            }}
          >
            {name}
          </div>
          <div
            className='champIcon position-absolute d-none d-md-block d-sm-none'
            style={{ top: "-25%", left: "50%", transform: "translateX(-50%)" }}
          >
            <ChampIcon />
          </div>
          <div className='explore mt-3' style={{ border: "1px solid #7e633b" }}>
            <span
              style={{
                letterSpacing: "3px",
                fontSize: "0.8rem",
                fontWeight: "600",
                lineHeight: "3rem",
              }}
            >
              Explore
            </span>
            {/* <i className='bi bi-arrow-right ps-2'></i> */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardChampion;
