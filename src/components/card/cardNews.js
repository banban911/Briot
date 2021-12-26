import React from "react";
import { ReactComponent as ArrowIcon } from "../../assest/ArrowIcon.svg";
import { ReactComponent as PhotoIcon } from "../../assest/PhotoIcon.svg";
import { ReactComponent as StoryIcon } from "../../assest/StoryIcon.svg";
import { ReactComponent as VideoIcon } from "../../assest/VideoIcon.svg";
import LazyImage from "../../components/hooks/LazyImage";
import { Logo } from "../logo/Logo";
import "./Card.scss";

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
        width='30'
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
          backgroundImage: bgUrl,
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
        <Logo bgColor='#000' color='#fff' width='30' />
      </div>
    </div>
  );
}

function CardNewsMain(props) {
  const { img, time, heading, summary, iconType, isFeatured, eyebrow } = props;
  const renderSwitch = (param) => {
    switch (param) {
      case "arrow":
        return <ArrowIcon className='news_main_iconC' />;
      case "photo":
        return <PhotoIcon className='news_main_iconC' />;
      case "video":
        return <VideoIcon className='news_main_iconC' />;
      default:
        return <StoryIcon className='news_main_iconC' />;
    }
  };

  if (isFeatured === true) {
    return (
      <>
        <div className='cardnews_featured_container'>
          <div className='cardnews_featured_img'>
            <LazyImage src={img} alt={heading} />
            <div className='cardnews_featured_icon'>
              {renderSwitch(iconType)}
            </div>
          </div>
          <div className='cardnews_featured_content_container d-flex'>
            <div className='newstimestamp'>{time}</div>
            <div className='cardnews_main_featured_content'>
              <div className='eyebow'>{eyebrow}</div>
              <div className='cardnews_featured_title pt-3'>{heading}</div>
              <div className='cardnews_featured_summary line-clamp-2'>
                {summary}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className='cardnews_main_container px-3'>
        <div className='cardnews_main_img'>
          <LazyImage src={img} alt={heading} />
          <div className='cardnews_main_icon'>{renderSwitch(iconType)}</div>
        </div>
        <div className='cardnews_main_content_container  d-flex'>
          <div className='newstimestamp'>{time}</div>
          <div className='cardnews_main_content'>
            <div className='eyebow'>{eyebrow}</div>
            <div className='cardnews_main_title pt-3'>{heading}</div>
            <div className='cardnews_main_summary line-clamp-2'>{summary}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export { CardLastestNews, CardNews, CardNewsMain };

// function validateTimestamp(time) {
//   const monthText = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dev",
//   ];

//   const inputMonthParse = Number(time.split("").slice(0, 2).join(""));

//   const outputMonth = monthText[inputMonthParse - 1];

//   const outputDate = time.split("").slice(3, 5).join("");

//   const outputYear = time.split("").slice(6, 10).join("");

//   return `${outputMonth} ${outputDate}, ${outputYear}`;
// }
