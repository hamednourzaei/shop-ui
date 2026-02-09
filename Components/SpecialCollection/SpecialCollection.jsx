import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

import { Navigation, Keyboard } from 'swiper/modules';
import CartTitle from '../module/cartTitle/cartTitle';
import axios from 'axios';

import "./SpecialCollection.css"

export default function SpecialCollection() {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        const receiveProducts = async () => {
            try {
                const { data } = await axios.get("http://localhost:3000/ProductsPro");
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        receiveProducts();
    }, []);

    return (
        <div className='SpecialCollection'>
            <div className='titleMten'>
                بهترین ها
            </div>
            <Swiper
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 10 },
                    480: { slidesPerView: 2, spaceBetween: 15 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 30 },
                }}
                loop={true}
                centeredSlides={true}
                navigation={true}
                keyboard={{ enabled: true }}
                modules={[Navigation, Keyboard]}
                className="mySwiper"
            >
                {Products &&
                    Products.map((value, index) => (
                        <SwiperSlide key={index} className='boxTitleProducts'>
                            <CartTitle {...value} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div >
    );
}
