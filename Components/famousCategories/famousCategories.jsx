import React from 'react';
import "./famousCategories.css";

const categories = [
    { id: 1, title: 'کنسول', imgSrc: '/FamousCategoriesItem/console.jpg' },
    { id: 2, title: 'دسته', imgSrc: '/FamousCategoriesItem/dsta1.jpg' },
    { id: 3, title: 'بازی', imgSrc: '/FamousCategoriesItem/games.jpg' },
    { id: 4, title: 'فانتزی', imgSrc: '/FamousCategoriesItem/tablo.jpg' },
];

const FamousCategories = () => {
    return (
        <section className='FamousCategories'>
            {categories.map((cat) => (
                <div key={cat.id} className="FamousCategoriesItem">
                    <div className="image-wrapper">
                        <img src={cat.imgSrc} alt={cat.title} loading="lazy" />
                    </div>
                    <p>{cat.title}</p>
                </div>
            ))}
        </section>
    );
}

export default FamousCategories;