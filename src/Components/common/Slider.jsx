import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "/sliderImage/slider-1.png";
import img2 from "/sliderImage/slider-2.png";
// import img3 from "/sliderImage/slider-3.png";
import img4 from "/sliderImage/slider-4.png";
import img5 from "/sliderImage/slider-5.png";
import img6 from "/sliderImage/slider-6.png";
import img7 from "/sliderImage/slider-7.png";
import img8 from "/sliderImage/slider-8.png";

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} className="w-full h-[70vh] object-cover object-top" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="w-full h-[70vh] object-cover object-top" />
        </SwiperSlide>
        {/* <SwiperSlide>
    <img src={img3} className="w-full h-[70vh] object-cover" />
  </SwiperSlide> */}
        <SwiperSlide>
          <img src={img4} className="w-full h-[70vh] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} className="w-full h-[70vh] object-cover object-top" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} className="w-full h-[70vh] object-cover object-top" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} className="w-full h-[70vh] object-cover object-top" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} className="w-full h-[70vh] object-cover object-top" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
