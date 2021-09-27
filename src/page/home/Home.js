import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { CardMain } from "../../components/card/CardMain";
import { CardLastestNews, CardNews } from "../../components/card/cardNews";
import { Btn } from "../../components/button/Btn";
function Home() {
  const riotProductsInfo = [
    {
      url: "https://www.riotgames.com/darkroom/550/ff82d668da3b61325a4d9a00f0d4bad2:a59ad8382089f371ec96952d202354e0/lol-key-art-2021-1920x1080-article-banner.jpg",
      name: "lol",
    },
    {
      url: "https://www.riotgames.com/darkroom/550/5a42732c7f8e2e22fcc4ebf3c38b774b:5cb98767399c1b3425b4f23306232af4/tft-riot-site-card.jpg",
      name: "tft",
    },
    {
      url: "https://www.riotgames.com/darkroom/550/0613e53fa1a76fb983ea221bd8301001:d2b98a734f92d17e8f0d564a07341eb8/wr-banner-ziggs-nov.jpg",
      name: "wildrift",
    },
    {
      url: "https://www.riotgames.com/darkroom/550/c8f72219add865817a06a68bc1864e56:c5d8662457e025b154dba649ebf2f028/lor-key-art.jpg",
      name: "runterra",
    },
    {
      url: "https://www.riotgames.com/darkroom/550/f25ec267bcc24b6fb692b422cf5dcfaa:286e4dc6c4ef661c714625a77945b6a4/riotgames-wide-k.jpg",
      name: "valorant",
    },
  ];

  const riotNewsInfo = [
    {
      title: "Riot Games Elevates Ryan Crosby to President of Publishing",
      bgUrl:
        "https://www.riotgames.com/darkroom/1000/413f5cdaa5272fcbb94d62a44233861c:26c29b6def3e8e41f480e308e612ced6/ryan-crosby.jpg",
    },
    {
      title: "New Riot Client Coming Soon",
      bgUrl:
        "https://www.riotgames.com/darkroom/500/ee3e986a072982e9dac2faea9548d066:ebc93e7931199b47780cbc11877ecfb8/valorant.png",
    },
    {
      title:
        "Annual Diversity and Inclusion (D&I) Progress Report - August 2021",
      bgUrl:
        "https://www.riotgames.com/darkroom/500/27681bc5bc281143598353b5aef66b22:325636b5c49ec1f6212737c8414a3fe0/riot-diversity-inclusion-report-2021-cover-2.jpg",
    },

    {
      title: "Hello Riot Mobile! Farewell League+",
      bgUrl:
        "https://www.riotgames.com/darkroom/500/342822937083c12b58367f03fcc19d58:54fcf43e3f6834d1b6a15d172c906d78/riot-mobile-multigame-promo-final-1920x1080.jpg",
    },
    {
      title:
        "Erin Wayne Joins Riot Games as Its First-Ever Global Head of Player Community",
      bgUrl:
        "https://www.riotgames.com/darkroom/500/1ee204183d726dc79c3c2c55c1278cd5:1fdda0f8f202e0acdebe0901eb173c9a/erin-wayne.jpg",
    },
  ];
  return (
    <>
      <div className='intro_banner'></div>
      <div
        className='homepage position-relative'
        style={{ fontFamily: "'Raleway', sans-serif" }}
      >
        <div className='news-intro position-relative'>
          <div
            className='news-intro-container container pb-3 mb-4' // Lastest Riot news
          >
            <div className='py-3 d-flex justify-content-lg-between justify-content-md-lg justify-content-sm-center justify-content-center align-items-center'>
              <h1
                id='whathappening_title'
                style={{ fontSize: "4rem", color: "#fff", fontWeight: "700" }}
              >
                What's happening?
              </h1>

              <div id='seemore_btn' className='btn px-3 py-2'>
                <Link to={`./news`}>
                  <Btn name='SEE MORE' />
                </Link>
              </div>
            </div>
            <div
              className='d-flex flex-column flex-lg-row flex-md-row flex-sm-column'
              style={{
                fontWeight: "700",
              }}
            >
              <div
                className='lastestNews_container me-2'
                style={{
                  flex: "1 1 60%",
                  height: "inherit",
                  marginBottom: "8%",
                }}
              >
                <CardLastestNews
                  title={riotNewsInfo[0].title}
                  bgUrl={riotNewsInfo[0].bgUrl}
                />
              </div>

              <div className='news-items-container' style={{ flex: "1 1 40%" }}>
                {riotNewsInfo.slice(1).map((item, index) => (
                  <CardNews key={index} title={item.title} bgUrl={item.bgUrl} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className='container game_posters mt-4'
          // style={{ marginTop: "-10%" }} // Most Riot products
        >
          <div className='row'>
            {riotProductsInfo.map((item, index) => (
              <div className='col-12 col-lg-6 col-sm-12'>
                <CardMain url={item.url} name={item.name} key={index} />
              </div>
            ))}
          </div>
        </div>

        <div className='video_intro position-relative'>
          <video
            width='100%'
            muted='muted'
            loop='loop'
            autoPlay='autoplay'
            className='pb-0 mb-0'
          >
            <source
              src='https://cdn.vn.garenanow.com/web/lol-product/LOLwebsite/img/tutorial/tutorialVideo.mp4'
              type='video/mp4'
            />
          </video>
          <div className='position-absolute video_intro_text'>
            Hasagiii
            <br />
            <h5> The death is the wind, always by my side</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
