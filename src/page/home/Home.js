import React from "react";
import { Link } from "react-router-dom";
import newsInfo from "../../components/api/homeData.json";
import { Btn } from "../../components/button/Btn";
import { CardMain } from "../../components/card/CardMain";
import { CardLastestNews, CardNews } from "../../components/card/cardNews";
import LazyImage from "../../components/hooks/LazyImage";
import "./Home.scss";
function Home() {
  const mainMediaInfo = newsInfo[1];
  const subMediaInfo = newsInfo[0];

  const riotProductsInfo = [
    {
      bg: "https://www.riotgames.com/darkroom/900/f9d37c368e03fe930db689c8877503ef:be16525176ab048e63dc8eada618bd07/lol-productimage.png",
      description: "a team-based strategy game",
      name: "lol",
      device: "window-apple",

      title:
        "https://www.riotgames.com/darkroom/350/a28dfa2308a772466c7d2018a87ac000:0e9fb5e8f3944bcd4375d6960d21962e/lol-logotype.png",
    },
    {
      bg: "https://www.riotgames.com/darkroom/900/d066e7a6446f7f6d512df07e788fbc35:ef7cf9d03d8ab4f103f41188d2c31c0f/tft-card-bg-1800.jpg",
      description: "a team-based strategy game",
      name: "tft",
      title:
        "https://www.riotgames.com/darkroom/350/2877a75d4539547a238b481e200edd9f:b10a003b28b89d37cc0e446bab19f206/tft-logotype-2021.png",
      device: "window-apple-mobile,",
    },
    {
      bg: "https://www.riotgames.com/darkroom/900/4d105e24b06ba594da0708fe8ded1314:977452c32d13752ded1552ea94d224ec/lol-wildrift-productimage.png",
      description: "a team-based strategy game",
      name: "wildrift",
      device: "mobile",
      title:
        "https://www.riotgames.com/darkroom/350/ac2e0c26a8f48cbaf0009eefb028b75f:8cddf84aea3fbcf72d02380c5d050e36/lol-wildrift-logotype.png",
    },
    {
      bg: "https://www.riotgames.com/darkroom/900/838a15154baf4a1c3693f73b2bd00364:c5e1aa607a8967e2f976d6173a77f285/legends-of-runeterra-productimage.png",
      description: "a team-based strategy game",
      name: "runterra",
      device: "window-mobile",
      title:
        "https://www.riotgames.com/darkroom/350/3ae3913f7992eebc555ea77d1e17657b:d7874f08ba1161ac419a8f45dcfa0ae0/legends-of-runeterra-logotype.png",
    },
    {
      bg: "https://www.riotgames.com/darkroom/900/ac04c903e761168dfbf22893efd1ce48:fee52bb276d4ed80cf60bdb9d3c24c05/valorant-productimage.png",
      description: "a team-based strategy game",
      name: "valorant",
      device: "window",
      title:
        "https://www.riotgames.com/darkroom/350/fc4d867e755e5215833d94e88068b0ab:ead77c56e200894c762889c3cd81a2e1/valorant-logotype.png",
    },
    {
      bg: "https://www.riotgames.com/darkroom/900/5da6384cfe9e607b3c589ffab2eb9f53:02f5f472e47354cbf103e66b02f975f4/convrgence-productimage.png",
      description: "a team-based strategy game",
      extension: "lol",
      name: "convegence",
      device: "",
      title:
        "https://www.riotgames.com/darkroom/350/89c736897feec6b49781ac1535e99c87:17c53feaa893cee07455c9c28dbac07f/convrgence-logotype.png",
    },
    {
      bg: "https://www.riotgames.com/darkroom/900/1131e3bf9509d7ffb5d869e3aaf41fb5:7eb0b12d6ac787d19dfc1a99af7d24a3/ruined-king-productimage.png",
      description: "a team-based strategy game",
      extension: "lol",
      name: "ruined king",
      device: "",
      title:
        "https://www.riotgames.com/darkroom/350/a9ea1f2afe26cc0334851b9bc59c02e5:903dee05567e561084d1b6bfb64461d3/ruined-king-logotype.png",
    },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className='intro_banner position-relative'>
        <div
          className='lastest position-absolute'
          style={{
            top: "35%",
            left: "5%",
            right: "5%",
            maxWidth: "400px",
          }}
        >
          <LazyImage
            src='https://www.riotgames.com/darkroom/500/f22945cd5136b8e1bc52889faa3b9060:469eefe1668cce16289afc1c508b7550/arcane-logo.png'
            alt='Arane'
          />
        </div>
      </div>
      <div
        className='homepage position-relative'
        style={{ fontFamily: "'Raleway', sans-serif" }}
      >
        <div className='news-intro position-relative'>
          <div
            className='news-intro-container container pb-5 mb-5' // Lastest Riot news
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
              <Link
                to='/news'
                className='lastestNews_container me-2'
                style={{
                  flex: "1 1 60%",
                  height: "inherit",
                  marginBottom: "8%",
                }}
              >
                <Link to='/news'>
                  <CardLastestNews
                    title={mainMediaInfo["mainMedia"][0]["mainMediaHeading"]}
                    bgUrl={mainMediaInfo["mainMedia"][0]["mainMediaUrl"]}
                  />
                </Link>
              </Link>

              <div className='news-items-container' style={{ flex: "1 1 40%" }}>
                {subMediaInfo["subMedia"].map((item, index) => (
                  <Link to='/news' key={index}>
                    <CardNews
                      title={item.subMediaHeading}
                      bgUrl={item.subMediaUrl}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className='game_posters pt-4'
          // style={{ marginTop: "-10%" }} // Most Riot products
        >
          <div className='container'>
            <h1 style={{ color: "#fff" }}>OUR GAMES</h1>
            <div className='row'>
              {riotProductsInfo.map((item, index) => (
                <div className='col-12 col-lg-6 col-sm-12'>
                  <CardMain
                    bg={item.bg}
                    description={item.description.toUpperCase()}
                    name={item.name}
                    title={item.title}
                    extension={item.extension}
                    device={item.device}
                    key={index}
                  />
                </div>
              ))}
            </div>
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
    </div>
  );
}

export default Home;
