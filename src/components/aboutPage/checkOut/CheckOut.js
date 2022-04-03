import React from 'react';
import { useSelector } from 'react-redux';

function CheckOut (props){

    const cart = useSelector((state) => state.mainShopPage.cart);
    return (
        <div>{console.log(cart)}Checkout</div>
    )
}
export default CheckOut;