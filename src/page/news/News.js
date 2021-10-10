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
    {
      img: "https://www.riotgames.com/darkroom/1000/413f5cdaa5272fcbb94d62a44233861c:26c29b6def3e8e41f480e308e612ced6/ryan-crosby.jpg",
      icon: { type: "story" },
      time: "09/22/2021",
      title: "Riot Games Elevates Ryan Crosby to President of Publishing",
      summary:
        "Riot sets sights on offerings across games, entertainment, and sports with Crosby helming 1,000+ worldwide publishing team",
    },
    {
      img: "https://www.riotgames.com/darkroom/1000/ee3e986a072982e9dac2faea9548d066:f3ab8f345ea68bc4a85af5d40cb29324/valorant.png",
      icon: { type: "video" },
      time: "09/16/2021",
      title: "New Riot Client Coming Soon",
      summary: "Announcing the launch of the new Riot Client",
    },
    {
      img: "https://www.riotgames.com/darkroom/1000/27681bc5bc281143598353b5aef66b22:fc3b881714ba5330c51b294e176d0ac2/riot-diversity-inclusion-report-2021-cover-2.jpg",
      icon: { type: "story" },
      time: "09/07/2021",
      title:
        "Annual Diversity and Inclusion (D&I) Progress Report - August 2021",
      summary:
        "In a year when we launched new games during a pandemic, we also kept focused on our commitment to fostering diverse perspectives and work towards creating an inclusive culture. Our second annual D&I report is live now! ",
    },

    {
      img: "https://www.riotgames.com/darkroom/1000/342822937083c12b58367f03fcc19d58:8f1c6a2db9b5d33c2d5a9aec79fb148d/riot-mobile-multigame-promo-final-1920x1080.jpg",
      icon: { type: "story" },
      time: "08/26/2021",
      title: "Hello Riot Mobile! Farewell League+",
      summary:
        "Download Riot Mobile - your companion for all things Riot Games!",
    },
    {
      img: "https://www.riotgames.com/darkroom/1000/1ee204183d726dc79c3c2c55c1278cd5:2aea644e8f343369fe8667243a42669e/erin-wayne.jpg",
      icon: { type: "story" },
      time: "08/25/2021",
      title:
        "Erin Wayne Joins Riot Games as Its First-Ever Global Head of Player...",
      summary: "Shaping the Next Evolution of Community Engagement",
    },
    {
      img: "https://www.riotgames.com/darkroom/1000/3822b116c9619d7445dfb4cf92d757f2:fde74b3a93e8b87a127388a04dce436f/mark-sottosanti.jpg",
      icon: { type: "story" },
      time: "08/23/2201",
      title: "Riot Games Names Mark Sottosanti Chief Financial Officer",
      summary:
        "Veteran Riot executive to lead global finance and strategy as company enters its next phase of growth.",
    },
    {
      img: "https://www.riotgames.com/darkroom/1000/fe3c2d9c2958167a1114d161cd56a0ec:987f6930b1ebcde5e2a4477adea846e4/screen-shot-2021-06-10-at-9-22-04-am-1.png",
      icon: { type: "video" },
      time: "07/29/2021",
      title: "Changing the Face of Gaming at 2021 Virtual San Diego Comic-Con ",
      summary:
        "Jessica Nam, Candace Thomas, and Shauna Spenley discuss their journey into the gaming and entertainment industry",
    },
    {
      img: "https://www.riotgames.com/darkroom/1000/246330610c2c98c54dcc241f1612a649:f3c043c5940893fa2193888a8cf12623/riot-summer-break.png",
      icon: { type: "story" },
      time: "07/26/2021",
      title: "Riot’s Mid-Year Break",
      summary: "We’re taking the week of August 2nd to recharge.",
    },
    {
      img: "https://www.riotgames.com/darkroom/1000/94c5486f37adf1b2f6d229f2e1b772d8:3265fe015c52f0956578528ab1416863/legal.png",
      icon: { type: "story" },
      time: "07/26/2021",
      title: "Hollaback! Anti-Xenophobic Harassment Training",
      summary:
        "Our continued work to educate Rioters on how to stand up against anti-Asian racism.",
    },
    {
      img: "https://www.riotgames.com/darkroom/1000/14d20808c5e0c5045272f3c047960633:443bc1894c8250e822211f3a99d217c1/00-header.jpg",
      icon: { type: "story" },
      time: "07/15/2021",
      title: "R&D Foundations: Opportunity, Thesis, and Audience",
      summary:
        "Before development starts on an R&D game, the team needs to understand their game’s core foundations.",
    },
    {
      img: "https://www.riotgames.com/darkroom/1000/a548eef952ed4a7e992405c929795a2c:92c3286a89ca79f435e5378d66f3b2c7/06-sentinels-iniciative-annuncement-header-notext-riotwebsite-1.png",
      icon: { type: "arrow" },
      time: "07/8/2021",
      title: "Join The Sentinels Initiative",
      summary:
        "Nominate a nonprofit or cause for a chance to grant them $10,000 for charity.",
    },
  ];

  const cardnewsfeatureInfo = {
    isFeatured: true,
    img: "https://www.riotgames.com/darkroom/1000/74169cf03b2d7149b1df9186bd37c026:db4b56d20515568b89c76e7817fec9f3/ff9e1c806d4e36c2d3749ffd79f4f9d9.jpg",
    icon: { type: "story" },
    time: "09/07/2021",
    title: "2020: Push Through",
    summary:
      "Together. we achieved a lot this eyar, and we couldn't have done it without your support. Thank you ",
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
        {cardnewsmainInfo.slice(0, 4).map((item, index) => (
          <div className='col-12 col-lg-6'>
            <CardNewsMain
              key={index}
              img={item.img}
              iconType={item.icon}
              time={item.time}
              title={item.title}
              summary={item.summary}
            />
          </div>
        ))}
      </div>
      <div className='cardnewsmain_featured'>
        <CardNewsMain
          img={cardnewsfeatureInfo.img}
          iconType={cardnewsfeatureInfo.icon}
          time={cardnewsfeatureInfo.time}
          title={cardnewsfeatureInfo.title}
          summary={cardnewsfeatureInfo.summary}
          isFeatured={cardnewsfeatureInfo.isFeatured}
        />
      </div>
      <div className='cardnews_main row mt-3'>
        {cardnewsmainInfo.slice(4).map((item, index) => (
          <div className='col-12 col-lg-6'>
            <CardNewsMain
              key={index}
              img={item.img}
              iconType={item.icon}
              time={item.time}
              title={item.title}
              summary={item.summary}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeagueOfLegend;
