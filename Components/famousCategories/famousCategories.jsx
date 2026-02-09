import "./famousCategories.css"
const FamousCategories = () => {
    return (
        <div className='FamousCategories'>
            <div className="FamousCategoriesItem">
                <img src="../public/FamousCategoriesItem/console.jpg" alt="" />
                <p>کنسول</p>
            </div>
            <div className="FamousCategoriesItem">
                <img src="../public/FamousCategoriesItem/dsta1.jpg" alt="" />
                <p>دسته</p>
            </div>
            <div className="FamousCategoriesItem">
                <img src="../public/FamousCategoriesItem/games.jpg" alt="" />
                <p>بازی</p>
            </div>
            <div className="FamousCategoriesItem">
                <img src="../public/FamousCategoriesItem/tablo.jpg" alt="" />
                <p>فانتزی</p>
            </div>
        </div>
    );
}

export default FamousCategories;
