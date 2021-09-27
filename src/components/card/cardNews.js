import React from "react";
import "./CardNews.scss";
import { Logo } from "../logo/Logo";

function CardLastestNews(props) {
  const { title, bgUrl } = props;
  return (
    <div
      className='news_main_item position-relative py-3 px-4 mx-2 mx-lg-0 mx-md-0 mx-sm-2'
      style={{
        border: "solid 1px #fff",
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        height: "100%",
        minHeight: "200px",
        borderRadius: "8px",
        color: "#e7e6e3",
        fontFamily: "'Mark Pro',Arial,sans-serif;",
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
        <h2
          style={{
            display: "-webkit-box",
            webkitLineClamp: "2",
            webkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </h2>
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
    <div
      className='news_item mb-2 position-relative d-flex  mx-2 mx-lg-0 mx-md-0 mx-sm-2'
      style={{
        height: "25%",
        // maxHeight: "120px",
        borderRadius: "8px",
        backgroundColor: "#222",
        color: "#e7e6e3",
      }}
    >
      <div
        className='news_item_content position-relative px-4 py-3 ms-2'
        style={{ flex: "0 0 60%" }}
      >
        <h4
          style={{
            display: "-webkit-box",
            webkitLineClamp: "2",
            webkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </h4>
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

export { CardLastestNews, CardNews };
