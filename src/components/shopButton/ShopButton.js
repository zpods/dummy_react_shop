import React from 'react';
import { Button } from 'react-bootstrap';

function ShopButton (props){
    const id = props.id;
    const buttonText = props.buttonText;

    return (
        <div id={id} className="mx-1">
            <Button type="button" size="sm" variant="outline-secondary">{ buttonText }</Button>
        </div>
    )
}
export default ShopButton;