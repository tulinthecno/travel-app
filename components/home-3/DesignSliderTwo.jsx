import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Navigation, Autoplay, Pagination]);






export default function DesignSliderOne() {

    const slider = {
        slidesPerView: 1,
        speed: 3000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        autoplay: {
          delay: 1500,
        },
        pagination: {
          el: ".testimonial-pagination",
          clickable: true,
        },
      };
  





  return (
    <div>



    </div>
  )
}
