import React from 'react';
import { Button } from 'react-bootstrap';


function ShopButton (props){
    const { buttonText, onClick, styleClass, variant, size } = props;
    return (
        <div onClick={onClick} className="mx-1">
            <Button className={styleClass} type="button" size={size} variant={variant}>{ buttonText }</Button>
        </div>
    )
}
export default ShopButton;