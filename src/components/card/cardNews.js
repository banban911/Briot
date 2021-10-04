import React from "react";
import "./CardNews.scss";
import { Logo } from "../logo/Logo";
import { ReactComponent as PhotoIcon } from "../../assest/PhotoIcon.svg";
import { ReactComponent as VideoIcon } from "../../assest/VideoIcon.svg";
import { ReactComponent as StoryIcon } from "../../assest/StoryIcon.svg";

function CardLastestNews(props) {
  const { title, bgUrl } = props;
  return (
    <div
      className='news_main_item position-relative py-3 px-4 mx-2 mx-lg-0 mx-md-0 mx-sm-2'
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      <Logo
        bgColor='#fff'
        color='#000'
        width='2rem'
        className='position-absolute'
        style={{ top: "1rem", left: "1rem" }}
      />
      <div
        className='news_main_item_content position-absolute'
        style={{ bottom: "0.25rem", left: "2rem" }}
      >
        <h2>{title}</h2>
        <h6
          style={{ color: "rgba(101,100,98,.9)", fontWeight: "bold" }}
          className='py-2 mb-0'
        >
          NEWS
        </h6>
      </div>
    </div>
  );
}

function CardNews(props) {
  const { title, bgUrl } = props;
  return (
    <div className='news_item mb-2 position-relative d-flex  mx-2 mx-lg-0 mx-md-0 mx-sm-2'>
      <div className='news_item_content position-relative px-4 py-3 ms-2'>
        <h4>{title}</h4>
        <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>NEWS</div>
      </div>
      <div
        className='news_item_img'
        style={{
          flex: "0 0 38%",
          backgroundImage: `url(${bgUrl})`,
          clipPath: "polygon(15% 0,100% 0,100% 100%,0 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "0 8px 8px 0",
        }}
      ></div>
      <div
        className='logo_wrap position-absolute'
        style={{ right: "1rem", top: "1rem" }}
      >
        <Logo bgColor='#000' color='#fff' width='2rem' />
      </div>
    </div>
  );
}

function CardNewsMain(props) {
  const { img, time, title, summary, iconType } = props;
  const renderSwitch = (param) => {
    switch (param.type) {
      case "photo":
        return <PhotoIcon />;
      case "video":
        return <VideoIcon />;
      default:
        return <StoryIcon />;
    }
  };
  return (
    <>
      <div className='cardnews_main_container col-12 col-lg-6 col-md-6 px-3'>
        <div className='cardnews_main_img'>
          <img src={img} alt={title} />
          <div className='cardnews_main_icon'>{renderSwitch(iconType)}</div>
        </div>
        <div className='cardnews_main_content_container  d-flex'>
          <div className='newstimestamp'>{time}</div>
          <div className='cardnew_main_content'>
            <div className='eyebow'>NEWS</div>
            <div className='cardnews_main_title'>{title}</div>
            <div className='cardnew_main_summary'>{summary}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export { CardLastestNews, CardNews, CardNewsMain };
