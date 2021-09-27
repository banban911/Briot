import React from "react";
import { Link } from "react-router-dom";
import "./CardChampion.scss";
function CardChampion(props) {
  const { name, tags, img, url } = props;
  return (
    <Link
      to={url}
      className='d-block p-2 position-relative'
      style={{ flex: "0 1 20%", borderRadius: "5px" }}
    >
      <div className='position-relative' style={{ overflow: "hidden" }}>
        <div
          className='champion_logo position-relative'
          style={{
            backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${img}_0.jpg')`,
            backgroundPosition: "70.3646% 32.037%",
            backgroundSize: "cover",
            // backgroundOrigin: "content-box",
            // backgroundClip: "content-box",
          }}
        ></div>

        <div
          className='championCard_footer pt-3  position-absolute text-center'
          style={{
            width: "100%",
            bottom: "0",
            color: "#fff",
            borderTop: "1px solid #7e633b",
            backgroundColor: "#101217",
          }}
        >
          <div
            className='tags'
            style={{
              fontSize: "0.8rem",
              fontWeight: "700",
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
            <i className='bi bi-arrow-right ps-2'></i>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardChampion;
