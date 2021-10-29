import React from "react";
import "./Card.scss";

const CardMedia = (props) => {
  const { src, title, content } = props;
  return (
    <div className='d-flex'>
      <div className='media_embeded'>
        <iframe
          src={src}
          title={title}
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
      <div className='media_title d-flex flex-column align-items-center justify-content-center'>
        <h4>{title}</h4>
        <h6>{content}</h6>
      </div>
    </div>
  );
};

export default CardMedia;
