import  { useEffect, useState } from 'react';
import './WhyMe.css';

const WhyMe = () => {
    const texts = ["کیفیت بالا", "پشتیبانی 24 ساعته", "قیمت مناسب"];
    const [currentText, setCurrentText] = useState(texts[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prevText) => {
                const currentIndex = texts.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % texts.length;
                return texts[nextIndex];
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='WhyMe' dir='rtl'>
            <div className='title-WhyMe'>
                <h2 className='title-text'>چرا باید از اینجا خرید کنید؟</h2>
                <h2 className="animated-text">{currentText}</h2>
            </div>
            <div className='mten-WhyMe'>
                <h3 className='mtenTitle-WyhMe'>کاملا امن و قابل اطمینان</h3>
                <p className='Description-WhyMe'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                </p>
            </div>
            <div className='mten-WhyMe'>
                <h3 className='mtenTitle-WyhMe'>کاملا امن و قابل اطمینان</h3>
                <p className='Description-WhyMe'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                </p>
            </div>
            <div className='mten-WhyMe'>
                <h3 className='mtenTitle-WyhMe'>کاملا امن و قابل اطمینان</h3>
                <p className='Description-WhyMe'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                </p>
            </div>
            <span className='WhyMe-rectangle'></span>
        </div>
    );
}

export default WhyMe;
