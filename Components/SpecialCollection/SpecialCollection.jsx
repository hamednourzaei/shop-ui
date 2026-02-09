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
    const [products, setProducts] = useState([]); // اسم متغیر را کوچک بنویس (استاندارد)

    useEffect(() => {
        const receiveProducts = async () => {
            try {
                const { data } = await axios.get("https://hamednourzaei.github.io/mock-data-of-shop-ui/db-shop-ui/db.json");
                
                // اصلاح اصلی اینجاست: باید دیتای داخل کلید Products را ست کنی
                if (data && data.Products) {
                    setProducts(data.Products);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        receiveProducts();
    }, []);

    return (
        <div className='SpecialCollection'>
            <div className='titleMten'>بهترین ها</div>
            
            {/* شرط گذاشتن برای رندر Swiper: فقط وقتی دیتا هست نمایش بده تا Loop به مشکل نخورد */}
            {products.length > 0 ? (
                <Swiper
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 10 },
                        480: { slidesPerView: 2, spaceBetween: 15 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 30 },
                    }}
                    loop={products.length >= 4} // فقط اگر تعداد محصولات کافی بود لوپ فعال شود
                    centeredSlides={true}
                    navigation={true}
                    keyboard={{ enabled: true }}
                    modules={[Navigation, Keyboard]}
                    className="mySwiper"
                >
                    {products.map((value, index) => (
                        <SwiperSlide key={value.id || index} className='boxTitleProducts'>
                            <CartTitle {...value} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p>در حال بارگذاری محصولات...</p>
            )}
        </div>
    );
}