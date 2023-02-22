import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../../assets/snowboard-helmet-svgrepo-com.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from '../../store/user/user.action';

import './navigation.styles.scss';

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutUser = () => dispatch(signOutStart());
    
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <div className="logo">{ <Logo /> }</div>
                </Link>
                
                <div className="nav-links-container">
                    {
                        currentUser ? (
                            <span>{currentUser[0].displayName}</span>
                        ) : (
                            <Fragment></Fragment>
                        )
                    }
                    
                    <Link className="nav-link" to='/shop'>
                        shop
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>sign out</span>)
                            : (
                                <Link className="nav-link" to='/auth'>
                                signin
                                </Link>
                            )
                    }
                    <CartIcon />
                </div>
                { isCartOpen && <CartDropdown /> }
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;