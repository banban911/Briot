import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css/swiper.css";
// import "swiper/css/swiper.css/pagination";
import "swiper/swiper.scss";
// import "swiper/scss/pagination";
import "swiper/components/pagination/pagination.scss";

import "./style.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function PaginationSlide(slideContent = ["1", "2", "3"]) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper pagination={pagination} className='mySwiper'>
        {slideContent.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
