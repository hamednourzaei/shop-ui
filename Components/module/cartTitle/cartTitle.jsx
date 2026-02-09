import "./cartTitle.css"
const CartTitle = ({ name, src, price }) => {



    return (
        <div className='CartTitle'>
            <div className='boxImgCartTitle'>
                <img src={src} alt={src}  />
            </div>
        </div>
    );
}

export default CartTitle;
