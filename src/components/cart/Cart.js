import React  from 'react';
import Checkout from '../checkOut/CheckOut';

export default function Cart ({cartStyle, hideCartAndShow}){

    return (
        <div style={{
            display: cartStyle.display,
            zIndex: cartStyle.zIndex,
            }}
            onClick={() => hideCartAndShow()}
            >
        <Checkout/>
        </div>

    
    )
}