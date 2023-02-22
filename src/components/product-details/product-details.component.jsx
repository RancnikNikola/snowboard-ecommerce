
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import { ReactComponent as Heart } from "../../assets/heart.svg";
import './product-details.styles.scss';


const ProductDetails = ({ product }) => {

    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    
    const addProductToBasket = () => dispatch(addItemToCart(cartItems, product));

    return (   
        <div className='product-container'> 
        <div className="product-details-container">
            <img src={imageUrl} alt={`${name}`}/>
        </div>
        <div className='product-details'>
            <span className="name">{ name }</span>
            <p className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat.
            </p>
            <span className="price">&euro; { price }</span>
            <span className='shipping-cost'>incl. VAT excl. 
                <span className='shipping-costs'>shipping costs</span>
            </span>
            <span className='rate-product'>Rate this product</span>
            <div className='product-button-container'>
                <button className='add-to-basket' onClick={addProductToBasket}>Add to basket</button>
                <button className='favorite'><span className='heart'>{<Heart />}</span></button>
            </div>
            <span className='delivery-time'>Delivery time only 1 to 3 business days</span>
            <span className='free-shipping'>Free shipping to Croatia</span>
        </div>
        </div>
    );
};

export default ProductDetails;