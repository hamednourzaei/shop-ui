import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import "./sliderHeder.css"

export default function SliderHeder() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5500,
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
                    <img src="/slider-img/img.png" style={{ width: "100%" }} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/slider-img/img.png" style={{ width: "100%" }} alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/slider-img/img.png" style={{ width: "100%" }} alt="Slide 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/slider-img/img.png" style={{ width: "100%" }} alt="Slide 4" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
