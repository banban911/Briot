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
      <div
        className='champion_logo position-relative'
        style={{
          backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${img}_0.jpg')`,
          backgroundPosition: "70.3646% 32.037%",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className='info w-100 position-absolute text-center'
        style={{ bottom: "10px", color: "#fff", borderTop: "1px solid white" }}
      >
        <div className='name'>{name}</div>
        <div className='tags'>{tags}</div>
      </div>
    </Link>
  );
}

export default CardChampion;
