import React from 'react';
import { Row, Container, Card } from 'react-bootstrap';
import JumbotronElement from '../jumbotronElement/JumbotronElement';
import Product from '../product/Product';
import MessageComponent from '../../messageComponent/MessageComponent';


function ShopPage({products}) {

    const message = {
        title: 'Error Message',
        text: 'NO PRODUCT FOUND'
    }

    if(Array.isArray(products) && products.length === 0){
        return (
            <React.Fragment>
                <JumbotronElement/>
                <MessageComponent message={message}/>
            </React.Fragment>            
        )
    }
    return (
        <React.Fragment>
            {console.log(products)}
            <Container>
                <JumbotronElement/>
                <Row>                
                { products && products.map((product) => {
                    return (
                    <div className='col-md-3' key={product.id}>
                        <Product product={product}/>
                    </div>
                    )
                })}
                </Row>
            </Container>
        </React.Fragment>               
    );
}
export default ShopPage;