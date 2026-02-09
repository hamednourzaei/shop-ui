import React from 'react';
import "./CoD.css";

const bannerData = [
    { id: 1, src: "/CoD/ag.webp", alt: "Fantasy Category 1" },
    { id: 2, src: "/CoD/geeg.webp", alt: "Fantasy Category 2" },
    { id: 3, src: "/CoD/nore.webp", alt: "Fantasy Category 3" },
    { id: 4, src: "/CoD/tablo.webp", alt: "Fantasy Category 4" },
];

const CoD = () => {
    return (
        <section className='CoDContiner'>
            <h2>دسته بندی فانتزی ها</h2>
            <div className='CoD'>
                {bannerData.map((banner) => (
                    <div key={banner.id} className='CoDBoxImg'>
                        <img 
                            src={banner.src} 
                            alt={banner.alt} 
                            loading="lazy" // بهینه‌سازی لود تصاویر
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CoD;