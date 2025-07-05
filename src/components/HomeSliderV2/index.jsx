import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectFade,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import banner_1 from "/assets/Banner/banner_5.jpg";
import banner_2 from "/assets/Banner/banner_6.jpg";
import { Button } from "@mui/material";

const HomeBannerV2 = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      effect={"fade"}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="sliderHome"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="relative w-full h-[500px] overflow-hidden">
          <img
            src={banner_2}
            alt="banner 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-end">
            <div
              className="text-left p-8 max-w-[500px] animate-fadeInUp"
              style={{ animationDelay: "0.3s" }}
            >
              <h4 className="text-lg font-medium text-gray-600 mb-2">
                Big saving days sale
              </h4>
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Buy New Trend Women Black Cotton Blend Top
              </h2>
              <p className="text-xl text-gray-800 mb-4">
                Starting At Only{" "}
                <span className="text-[#ff5252] text-2xl font-bold">
                  ₹1,550.00
                </span>
              </p>
              <Button className="btn-org bg-[#ff5252]" variant="contained">
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[500px] overflow-hidden">
          <img
            src={banner_1}
            alt="banner 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-end">
            <div
              className="text-left p-8 max-w-[500px] animate-fadeInUp"
              style={{ animationDelay: "0.3s" }}
            >
              <h4 className="text-lg font-medium text-gray-600 mb-2">
                Big saving days sale
              </h4>
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Buy Top Mobile at an awesome deal
              </h2>
              <p className="text-xl text-gray-800 mb-4">
                Starting At Only{" "}
                <span className="text-[#ff5252] text-2xl font-bold">
                  ₹70,550.00
                </span>
              </p>
              <Button className="btn-org bg-[#ff5252]" variant="contained">
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeBannerV2;
