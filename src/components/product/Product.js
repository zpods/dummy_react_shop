import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ShopButton from '../shopButton/ShopButton';
import ImageComponent from '../imageComponent/ImageComponent';

function Product(props) {

    const description = props.product.description;
    const inStock = props.product.inStock;
    const id = props.product.id;
    const productUrl = `/products/${id}`;
    return (
            <Card className="mb-4 box-shadow">
                <Link to={productUrl} >
                    <ImageComponent image={null}/>
                </Link>
                <Card.Body>
                    <Card.Text className="card-text">{description}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <ShopButton id={id} buttonText="Buy" />
                            <ShopButton id={id} buttonText="Add To Cart" />
                        </div>
                        <small className="text-muted">In Stock {inStock}</small>
                    </div>
                </Card.Body>
            </Card>
    )
}
export default Product;