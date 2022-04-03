import React from 'react';
import { Button } from 'react-bootstrap';

function ShopButton (props){
    const { buttonText, onClick } = props;
    return (
        <div onClick={onClick} className="mx-1">
            <Button type="button" size="sm" variant="outline-secondary">{ buttonText }</Button>
        </div>
    )
}
export default ShopButton;