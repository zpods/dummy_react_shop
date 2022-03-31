import React from 'react';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartIcon () {
    return (
        <div>
            <FontAwesomeIcon className="p-2" icon={faCartShopping} color="white" size="lg" />
        </div>
    )
}
export default CartIcon;