import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from '../../components/payment-form/payment-form.component';

import './check.styles.scss';

const Check = () => {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <div className="checkout-container">
            <div className="order-items">
            {
                    cartItems.map((cartItem) => {

                        return (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        )
                    })
            }
             <div className="total">
                <span>Subtotal:</span>  
                <span>&euro; {cartTotal.toFixed(2)}</span>
            </div>
            <div className="total-shipping">
                <span>Shipping:</span>  
                <span>+ &euro; 0</span>
            </div>
            <div className="total">
                <span>Total:</span>  
                <span>&euro; {cartTotal.toFixed(2)}</span>
            </div>
            </div>
            <div className="payment-form">
                <h1>Checkout</h1>
                <PaymentForm />
                <div className="message-support">
                    <h3>Got question? Message support</h3>
                    <p>Our friendly support team is here for question about billing, shipping and account changes</p>
                    <button>Message support</button>
                </div>
            </div>
        </div>
    );
};

export default Check;