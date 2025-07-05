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

import BannerSlider from "../BannerSlider";
import ads_banner_1 from "/assets/Ads_Banner/ads_banner_1.webp";
import ads_banner_2 from "/assets/Ads_Banner/ads_banner_2.webp";
import ads_banner_3 from "/assets/Ads_Banner/ads_banner_2.webp";
import ads_banner_4 from "/assets/Ads_Banner/ads_banner_3.webp";
import ads_banner_5 from "/assets/Ads_Banner/ads_banner_5.webp";
import ads_banner_6 from "/assets/Ads_Banner/ads_banner_6.webp";

const AdsBannerSlider = (props) => {
  return (
    <div className="py-10 w-full">
      <Swiper
        slidesPerView={props.items}
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
        className="ads_banner"
      >
        <SwiperSlide className="rounded-2xl overflow-hidden">
          <BannerSlider img={ads_banner_1} alt="Ad Banner 1" link="/" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl overflow-hidden">
          <BannerSlider img={ads_banner_2} alt="Ad Banner 2" link="/" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl overflow-hidden">
          <BannerSlider img={ads_banner_3} alt="Ad Banner 3" link="/" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl overflow-hidden">
          <BannerSlider img={ads_banner_4} alt="Ad Banner 4" link="/" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl overflow-hidden">
          <BannerSlider img={ads_banner_5} alt="Ad Banner 5" link="/" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl overflow-hidden">
          <BannerSlider img={ads_banner_6} alt="Ad Banner 6" link="/" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
