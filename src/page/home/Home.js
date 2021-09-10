import React from "react";
import "./Home.scss";
import { CardMain } from "../../components/cardPlay/CardMain";
function Home() {
  return (
    <div>
      <div className='homepage position-relative'>
        <div className='banner'></div>

        <div className='container game_posters '>
          <div className='row'>
            <div className='col-12 col-lg-6 col-sm-12'>
              <CardMain url='https://www.riotgames.com/darkroom/550/ff82d668da3b61325a4d9a00f0d4bad2:a59ad8382089f371ec96952d202354e0/lol-key-art-2021-1920x1080-article-banner.jpg' />
            </div>
            <div className='col-12 col-lg-6 col-sm-12'>
              <CardMain url='https://www.riotgames.com/darkroom/550/5a42732c7f8e2e22fcc4ebf3c38b774b:5cb98767399c1b3425b4f23306232af4/tft-riot-site-card.jpg' />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-6 col-sm-12'>
              <CardMain url='https://www.riotgames.com/darkroom/550/0613e53fa1a76fb983ea221bd8301001:d2b98a734f92d17e8f0d564a07341eb8/wr-banner-ziggs-nov.jpg' />
            </div>
            <div className='col-12 col-lg-6 col-sm-12'>
              <CardMain url='https://www.riotgames.com/darkroom/550/c8f72219add865817a06a68bc1864e56:c5d8662457e025b154dba649ebf2f028/lor-key-art.jpg' />
              <CardMain url='https://www.riotgames.com/darkroom/550/f25ec267bcc24b6fb692b422cf5dcfaa:286e4dc6c4ef661c714625a77945b6a4/riotgames-wide-k.jpg' />
            </div>
          </div>
        </div>

        <div className='hasagi position-relative'>
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
          <div className='position-absolute hasagi_intro'>
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
