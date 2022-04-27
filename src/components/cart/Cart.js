import React, { useState } from 'react';
import CheckOut from '../checkOut/CheckOut';

export default function Cart ({cartStyle, hideCart}){

    
    return (
        <div style={{
            display: cartStyle.display,
            width: cartStyle.width, 
            position: cartStyle.position, 
            right: cartStyle.right,
            top: cartStyle.top 
            }}
            onMouseLeave={() => hideCart()}
            >
            <CheckOut/>
        </div>

    
    )
}