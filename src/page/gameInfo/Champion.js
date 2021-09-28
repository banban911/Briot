import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import CardChampion from "../../components/card/CardChampion";
import "./Lol.scss";
// import ChampionJSON from "../../../../src/Champion.json";
const axios = require("axios");
function Champions() {
  const { url } = useRouteMatch();
  const [champion, setChampion] = useState([]);

  useEffect(() => {
    const fetchChampion = async () => {
      try {
        const response = await axios.get(
          "https://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion.json"
        );
        console.log(Object.values(response.data));
        setChampion(Object.values(response.data.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchChampion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='lol container'>
      <div className='champions d-flex flex-wrap'>
        {champion.map((item, index) => (
          <CardChampion
            url={`${url}/${item.id}`}
            key={index}
            name={item.name.toUpperCase()}
            img={item.id}
            tags={item.title.toUpperCase()}
          />
        ))}
      </div>
    </div>
  );
}

export default Champions;
