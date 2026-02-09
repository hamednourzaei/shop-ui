import "./ProductCard.css";



const ProductCard = ({ src, name, Price, id }) => {

    const formatPrice = (price) => {
        return new Intl.NumberFormat('fa-IR').format(price);
    };

    return (
        <li className='Product'>
            <img
                src={src || '/defaultImg/default.webp'}
                alt={name}
                onError={(e) => {
                    e.target.src = '/defaultImg/default.webp';
                }}
            />
            <h3>{name}</h3>
            <p dir='rtl' className='Price'>
                {Price ? formatPrice(Price) + ' تومان' : 'قیمت ناموجود'}
            </p>
        </li>
    );
}

export default ProductCard;