import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Pagination } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CartTitle from '../module/cartTitle/cartTitle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./SpecialCollection.css";

// تابع Fetch دیتا
const fetchProducts = async () => {
    const { data } = await axios.get("https://hamednourzaei.github.io/mock-data-of-shop-ui/db-shop-ui/db.json");
    return data?.Products || [];
};

// کامپوننت کمکی لودینگ (جایگزین Skeleton قبلی که ارور میداد)
const ProductSkeleton = () => (
    <div className="skeleton-box"></div>
);

export default function SpecialCollection() {
    const { data: products, isLoading, isError } = useQuery({
        queryKey: ['specialProducts'],
        queryFn: fetchProducts,
    });

    if (isError) return <div className="text-center py-10">خطا در اتصال به سرور</div>;

    return (
        <div className='SpecialCollection'>
            <div className='titleMten'>بهترین ها</div>

            {isLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                </div>
            ) : (
                <Swiper
                    breakpoints={{
                        320: { slidesPerView: 1.8, spaceBetween: 15 },
                        480: { slidesPerView: 2.2, spaceBetween: 20 },
                        768: { slidesPerView: 3.2, spaceBetween: 25 },
                        1024: { slidesPerView: 4, spaceBetween: 30 },
                    }}
                    loop={products.length >= 4}
                    centeredSlides={false}
                    navigation={true}
                    pagination={{ clickable: true }}
                    keyboard={{ enabled: true }}
                    modules={[Navigation, Keyboard, Pagination]}
                    className="mySwiper"
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id} className='boxTitleProducts'>
                            <CartTitle {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}