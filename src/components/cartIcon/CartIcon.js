import React, { useState } from 'react';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import Cart from '../cart/Cart';
import styles from './CartIcon.module.css';

function CartIcon () {

    const { totalQuantity } = useSelector((state) => state.mainShopPageAndCart);
    const [style, setStyle] = useState( { display: 'none' } );

    const handleClick = () => {
        if(style.display === 'none'){
            setStyle({ display: 'block', zIndex: '9999' });
        }else{ 
            setStyle({ display: 'none' });
        }
    }

    const handleShowCart = () => {
        setStyle({ display: 'block', zIndex: '9999' });
    }

    const handleHideCart = () => {
        setStyle({display: 'none'});
    };
    return (
        <div className={styles.parentCart} onClick={()=>handleClick()} onMouseLeave={()=>handleHideCart()} onMouseEnter={() => handleShowCart()}>
            <div className={styles.cartQuantity}>{totalQuantity}</div>
            <span onClick={()=>handleClick()} className={styles.cartIcon}><FontAwesomeIcon  className='p-2' icon={faCartShopping} color="white" size="2xl" /></span>
            <Cart cartStyle={style} hideCartAndShow={() => handleClick()}/>
        </div>
    )
}
export default CartIcon;
