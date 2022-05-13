import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { moveDecimal } from '../../utils/utils';
import MessageComponent from '../messageComponent/MessageComponent';

function AfterCheckoutSummary ({props}){

    const { cart, singleProductCart, totalPrice, totalQuantity, error } = useSelector((state) => state.mainShopPageAndCart); 
    let boughtProducts = singleProductCart[0] ? singleProductCart : cart;
    const message = {
        'title': 'ERROR',
        'text': 'Products not bought',
    }

    return (
        <Container className='py-5'>
            { boughtProducts && boughtProducts.map((item, key) => {
                return (
                    <Card key={key}>
                        <Card.Body>
                            <Card.Title><div className='px-5'>Product Name:  {item.name}</div><div className='px-5'>Product Price: {moveDecimal(item.price)} </div> </Card.Title>    
                        </Card.Body>
                        
                    </Card>
                    )
                })
            }
            <hr></hr>
            <Card>
            <Card.Body>
                <Card.Title>
                    <Card.Text className='px-5'>TOTAL PRICE: {moveDecimal(totalPrice)}  TOTAL QUANTITY: {totalQuantity}</Card.Text>
                </Card.Title>
            </Card.Body>
            </Card>
            { error && <MessageComponent message={message}/>}
        </Container>        
    )
}
export default AfterCheckoutSummary;