import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ImageComponent from '../imageComponent/ImageComponent';
import styles from './SingleProductDetails.module.css';
import { moveDecimal } from '../../utils/utils';

export default function SingleProductDetails ({product}){

    if(product && product.length <= 0){
        return (
            <Container>
                <Col md="12">
                    <Card className='mt-5'>
                        <Card.Body>
                            <Card.Title className='text-center'>Product Not Found</Card.Title>                        
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        )     
    }

    return (
        <Container>        
            {product && product.map((item, key) => {
                return (
                    <div key={key}>
                        <Col md="12">
                            <Card className='mt-5'>
                                <Card.Body>
                                    <Card.Title className='text-center'>{item.name}</Card.Title>
                                    <Card.Text className='text-center'>{item.description}</Card.Text>
                                    <Card.Text className='mx-4'>Price: {moveDecimal(item.price)}  InStock: {item.instock}</Card.Text>                              
                                </Card.Body>
                            </Card>
                        </Col>
                        <Row className='p-1'>
                            {item.images && item.images.map((image, nextKey)=>{
                                return (
                                <Col md="4" className='p-2 h-100' key={nextKey}>
                                    <div className={styles.singleProduct}>
                                        <ImageComponent image={false}/>
                                        <p className={styles.singleProductParagraph}>{image.description}</p>
                                    </div>
                                </Col>
                                );
                            })}
                        </Row>
                    </div>                      
                );
            })}      
       </Container>
    );
}