import React from "react";
import { CardNewsMain } from "../../components/card/cardNews";
import "./style.scss";
function LeagueOfLegend() {
  const cardnewsmainInfo = [
    {
      img: "https://www.riotgames.com/darkroom/1000/8a975de9f130d0dd7b1142dfbad138b5:44ee3f4d30f5637b93e48ac724610aec/2021-global-service-month-header.jpg",
      icon: { type: "photo" },
      time: "09/29/2021",
      title: "Riot's Global Service Month 2021",
      summary:
        "Rioters around the world served their local communities during Global Services Month 2021",
    },
  ];
  return (
    <div className='news_container container'>
      <div className='filter_showme py-5 d-flex justify-content-center align-items-center'>
        Show Me
        <button className='filter_showme_trigger ps-3 d-flex align-items-center'>
          <div className='button_trigger_title py-1'>Everything</div>
          <i class='bi bi-chevron-down ms-2'></i>
        </button>
      </div>
      <div className='cardnews_main'>
        {cardnewsmainInfo.map((item, index) => (
          <CardNewsMain
            key={index}
            time={item.time}
            img={item.img}
            title={item.title}
            iconType={item.icon.type}
            summary={item.summary}
          />
        ))}
      </div>
    </div>
  );
}

export default LeagueOfLegend;
