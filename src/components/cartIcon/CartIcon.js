import React from 'react';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import styles from './CartIcon.module.css';

function CartIcon () {

    const cart = useSelector((state) => state.mainShopPage.cart);
    let total = null;
    const totalProducts = () =>{
        let innerTemp = null;
        for(const[key, value] of Object.entries(cart)){
            console.log(key, value);
            innerTemp += value.product.inCart;
        }
        total += innerTemp;
        return total;
    }

    return (
        <div className={styles.parentCart}>
            <div className={styles.cart}>{totalProducts()}</div>
            <FontAwesomeIcon className="p-2" icon={faCartShopping} color="white" size="2xl" />
        </div>
    )
}
export default CartIcon;