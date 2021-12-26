import React from "react";
import { CardNewsMain } from "../../components/card/cardNews";
import "./style.scss";
import newItemInfo from "../../components/api/newsItemInfo.json";
function LeagueOfLegend() {
  const cardnewsfeatureInfo = {
    isFeatured: true,
    img: "https://www.riotgames.com/darkroom/1000/74169cf03b2d7149b1df9186bd37c026:db4b56d20515568b89c76e7817fec9f3/ff9e1c806d4e36c2d3749ffd79f4f9d9.jpg",
    icon: { type: "story" },
    time: "09/07/2021",
    title: "2020: Push Through",
    summary: "The nicest poster in the list, I save it as my bias ",
  };
  return (
    <div className='news_container container'>
      <div className='filter_showme d-flex justify-content-center align-items-center'>
        Show Me
        <button className='filter_showme_trigger ps-3 d-flex align-items-center'>
          <div className='button_trigger_title py-1'>Everything</div>
          <i className='bi bi-chevron-down ms-2'></i>
        </button>
      </div>
      <div className='cardnews_main row mb-3'>
        {newItemInfo.slice(0, 4).map((item, index) => (
          <div className='col-12 col-lg-6' key={index}>
            <CardNewsMain
              img={item.newsItemUrl}
              iconType={index % 2 === 0 ? "story" : "video"}
              time={item.newsItemTime}
              eyebrow={item.newsItemEyebrow}
              heading={item.newsItemHeading}
              summary={item.newsItemSummary}
            />
          </div>
        ))}
      </div>
      <div className='cardnewsmain_featured'>
        <CardNewsMain
          img={cardnewsfeatureInfo.img}
          iconType={cardnewsfeatureInfo.icon}
          time={cardnewsfeatureInfo.time}
          eyebrow='News'
          heading={cardnewsfeatureInfo.title}
          summary={cardnewsfeatureInfo.summary}
          isFeatured={cardnewsfeatureInfo.isFeatured}
        />
      </div>
      <div className='cardnews_main row mt-3'>
        {newItemInfo.slice(4).map((item, index) => (
          <div className='col-12 col-lg-6' key={index}>
            <CardNewsMain
              img={item.newsItemUrl}
              iconType={index % 3 === 0 ? "story" : "arrow"}
              time={item.newsItemTime}
              eyebrow={item.newsItemEyebrow}
              heading={item.newsItemHeading}
              summary={item.newsItemSummary}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeagueOfLegend;
