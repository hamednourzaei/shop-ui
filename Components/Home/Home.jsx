import "./Home.css"
import SliderHeder from '../sliderHeder/sliderHeder';
import FamousCategories from '../famousCategories/famousCategories';
import SpecialCollection from '../SpecialCollection/SpecialCollection';
import WhyMe from '../WhyMe/WhyMe';
import CoD from '../CoD/CoD';
import Footer from '../footer/footer';
import Console from '../Console/Console';

const Home = () => {
    return (
        <div className='Home'>
            <SliderHeder />
            <FamousCategories />
            <SpecialCollection />
            <WhyMe />
            <CoD />
            <Console />
            <Footer />
        </div>
    );
}

export default Home;
