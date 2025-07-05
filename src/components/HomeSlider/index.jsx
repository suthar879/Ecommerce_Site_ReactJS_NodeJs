import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import banner_1 from "/assets/Banner/banner_1.jpg";
import banner_2 from "/assets/Banner/banner_2.jpg";
import banner_3 from "/assets/Banner/banner_3.jpg";
import banner_4 from "/assets/Banner/banner_4.jpg";

const HomeSlider = () => {
  return (
    <div className="homeSlider py-4">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
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
          <SwiperSlide className="rounded-4xl overflow-hidden">
            <img src={banner_1} alt="banner 1" className="w-full" />
          </SwiperSlide>
          <SwiperSlide className="rounded-4xl overflow-hidden">
            <img src={banner_2} alt="banner 2" className="w-full" />
          </SwiperSlide>
          <SwiperSlide className="rounded-4xl overflow-hidden">
            <img src={banner_3} alt="banner 3" className="w-full" />
          </SwiperSlide>
          <SwiperSlide className="rounded-4xl overflow-hidden">
            <img src={banner_4} alt="banner 4" className="w-full" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
