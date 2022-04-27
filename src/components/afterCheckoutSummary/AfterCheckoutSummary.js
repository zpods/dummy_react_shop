import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function AfterCheckoutSummary ({props}){

    const { cart, singleProductCart, totalPrice, totalQuantity } = useSelector((state) => state.mainShopPage); 
    let boughtProducts = singleProductCart[0] ? singleProductCart : cart;

    return (
        <Container className='py-5'>
            { boughtProducts && boughtProducts.map((item, key) => {
                return (
                    <Card key={key}>
                        <Card.Body>
                            <Card.Title><div className='px-5'>Product Name:  {item.name}</div><div className='px-5'>Product Price: {item.price} </div> </Card.Title>    
                        </Card.Body>
                        
                    </Card>
                    )
                })
            }
            <hr></hr>
            <Card>
            <Card.Body>
                <Card.Title>
                    <Card.Text className='px-5'>TOTAL PRICE: {totalPrice}  TOTAL QUANTITY: {totalQuantity}</Card.Text>
                </Card.Title>
            </Card.Body>
            </Card>
            
            
            
        </Container>        
    )
}
export default AfterCheckoutSummary;