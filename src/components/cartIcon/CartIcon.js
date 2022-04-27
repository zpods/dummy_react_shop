import React, { useState, useRef } from 'react';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import Cart from '../cart/Cart';
import styles from './CartIcon.module.css';

function CartIcon () {

    const { totalQuantity } = useSelector((state) => state.mainShopPage);
    const [style, setStyle] = useState( { display: 'none' } );

    const handleShowCart = () => {
        setStyle(
              {
               display: 'block',
               width: '500px',
               position: 'absolute',
               right: '-13px',
               top: '0px',
            }
        )
    }
    const handleHideCart = () => {
        setStyle({display: 'none'})};
    return (
        <div className={styles.parentCart} onMouseEnter={() => handleShowCart()}>
            <div className={styles.cart}>{totalQuantity}</div>
            <FontAwesomeIcon className="p-2" icon={faCartShopping} color="white" size="2xl" />
            <Cart cartStyle={style} hideCart={() => handleHideCart()}/>
        </div>
    )
}
export default CartIcon;
