import React from "react";
import "./CardHeader.scss";
function CardItemBig(props) {
  const { url, content } = props;

  return (
    <div className='game_poster_big'>
      <div className='img_big'>
        <img src={url} alt='poster'></img>
      </div>
      <h6 className='pt-3 mb-0'>{content}</h6>
    </div>
  );
}

function CardItemSmall(props) {
  const { url, content, device } = props;
  return (
    <div className='game_poster'>
      <div className='img_sm'>
        <img src={url} alt='poster'></img>
      </div>
      <h6 className='pt-3'>{content}</h6>
      <div className='play_device d-flex'>
        <svg
          className={`me-3 ${
            device.includes("mobile") ? "d-inline" : "d-none"
          }`}
          width='10'
          height='10'
          viewBox='0 0 7 10'
        >
          <path
            d='M2.5 8.125a.624.624 0 1 0 1.249.001.624.624 0 0 0-1.249 0zM0 .938v8.125C0 9.58.42 10 .938 10h4.375c.517 0 .937-.42.937-.937V.938A.938.938 0 0 0 5.312 0H.938A.938.938 0 0 0 0 .938zm.938 8.007v-7.89c0-.065.052-.117.117-.117h4.14c.065 0 .117.052.117.117v7.89a.118.118 0 0 1-.117.118h-4.14a.118.118 0 0 1-.117-.118z'
            fill='#7E7E7E'
          ></path>
        </svg>
        <svg
          className={`me-3 ${
            device.includes("window") ? "d-inline" : "d-none"
          }`}
          width='10'
          height='10'
          viewBox='0 0 10 10'
        >
          <path
            d='M0 1.416L4.087.86l.002 3.929-4.084.023L0 1.416zm4.085 3.827l.003 3.933-4.085-.56V5.218l4.082.026zM4.58.79L9.998 0v4.741l-5.418.042V.79zM10 5.279L9.998 10 4.58 9.238l-.008-3.966L10 5.28z'
            fill='#7E7E7E'
          ></path>
        </svg>
        <svg
          className={`${device.includes("macOS") ? "d-inline" : "d-none"}`}
          width='10'
          height='10'
          viewBox='0 0 9 10'
        >
          <path
            d='M8.83 7.793c-.147.35-.32.671-.52.967-.272.403-.495.682-.667.837-.267.254-.553.384-.859.392-.22 0-.485-.065-.793-.197a2.207 2.207 0 0 0-.854-.195c-.272 0-.565.065-.878.195-.313.132-.566.2-.758.207-.294.013-.586-.12-.879-.402-.186-.169-.419-.458-.699-.867a6.083 6.083 0 0 1-.738-1.521 5.772 5.772 0 0 1-.31-1.814c0-.67.14-1.248.42-1.732.22-.39.512-.696.879-.921.366-.225.761-.34 1.187-.348.234 0 .54.075.919.222.379.147.622.222.729.222.08 0 .35-.088.808-.262.433-.161.799-.228 1.097-.202.812.068 1.422.4 1.827.997-.726.456-1.085 1.094-1.078 1.913.007.638.23 1.17.669 1.59.199.196.42.348.668.455-.054.162-.11.316-.17.464zM6.967.201c0 .5-.176.967-.527 1.399-.424.513-.937.81-1.493.763a1.593 1.593 0 0 1-.011-.189c0-.48.201-.994.56-1.414.178-.213.405-.39.681-.53.275-.14.535-.217.78-.23.007.067.01.135.01.2z'
            fill='#7E7E7E'
          ></path>
        </svg>
      </div>
    </div>
  );
}

export { CardItemBig, CardItemSmall };
