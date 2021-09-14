import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import CardChampion from "../../../components/cardPlay/CardChampion";
import "./Lol.scss";
const axios = require("axios");
function Champions() {
  const { url, path } = useRouteMatch();
  const [champion, setChampion] = useState([]);

  const fetchChampion = async () => {
    try {
      const response = await axios.get(
        "http://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion.json"
      );
      console.log(Object.values(response.data.data));
      setChampion(Object.values(response.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchChampion();
  }, []);
  return (
    <div className='lol container'>
      <div className='champions d-flex flex-wrap'>
        {champion.map((item, index) => (
          <CardChampion
            url={`${url}/${item.id}`}
            key={index}
            name={item.name}
            img={item.id}
            tags={item.tags.toString()}
          />
        ))}
      </div>
    </div>
  );
}

export default Champions;
