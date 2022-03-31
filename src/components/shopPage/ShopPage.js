import React from 'react';
import { Row, Container } from 'react-bootstrap';
import JumbotronElement from '../jumbotronElement/JumbotronElement';
import Product from '../product/Product';


function ShopPage({products}) {
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