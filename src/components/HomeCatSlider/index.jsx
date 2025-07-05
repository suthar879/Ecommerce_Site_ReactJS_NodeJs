import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Cat_1 from "/assets/Category_image/Cat_1.png";
import Cat_2 from "/assets/Category_image/Cat_2.png";
import Cat_3 from "/assets/Category_image/Cat_3.png";
import Cat_4 from "/assets/Category_image/Cat_4.png";
import Cat_5 from "/assets/Category_image/Cat_5.png";
import Cat_6 from "/assets/Category_image/Cat_6.png";
import Cat_7 from "/assets/Category_image/Cat_7.png";
import Cat_8 from "/assets/Category_image/Cat_8.png";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider pt-4 py-8">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={Cat_1}
                  alt="category_1"
                  className="w-[60px] transition-all hover:scale-120"
                />
                <h3 className="text-[16px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={Cat_2}
                  alt="category_2"
                  className="w-[60px] transition-all hover:scale-120"
                />
                <h3 className="text-[16px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={Cat_3}
                  alt="category_3"
                  className="w-[60px] transition-all hover:scale-120"
                />
                <h3 className="text-[16px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={Cat_4}
                  alt="category_4"
                  className="w-[60px] transition-all hover:scale-120"
                />
                <h3 className="text-[16px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={Cat_5}
                  alt="category_5"
                  className="w-[60px] transition-all hover:scale-120"
                />
                <h3 className="text-[16px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={Cat_6}
                  alt="category_6"
                  className="w-[60px] transition-all hover:scale-120"
                />
                <h3 className="text-[16px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={Cat_7}
                  alt="category_7"
                  className="w-[60px] transition-all hover:scale-120"
                />
                <h3 className="text-[16px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={Cat_8}
                  alt="category_8"
                  className="w-[60px] transition-all hover:scale-120"
                />
                <h3 className="text-[16px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={Cat_1}
                  alt="category_1"
                  className="w-[60px] transition-all hover:scale-120"
                />
                <h3 className="text-[16px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
