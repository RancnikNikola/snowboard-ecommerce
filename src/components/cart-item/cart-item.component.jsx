
import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {

    const { name, quantity, imageUrl, price } = cartItem; 

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt='' />
            <div className='item-details'>
                <span className='price'>{ name } x &euro; {price}</span>
            </div>
            <span>{ quantity }</span>
        </div>
    );
};

export default CartItem;