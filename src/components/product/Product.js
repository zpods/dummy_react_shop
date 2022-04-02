import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ShopButton from '../shopButton/ShopButton';
import ImageComponent from '../imageComponent/ImageComponent';
import { addProductToCart } from '../storeSlice/mainShopPage/mainShopPage';
import { useDispatch } from 'react-redux';

function Product(props) {

    const dispatch = useDispatch();
    const product = props.product;
    const id = props.product.id;
    const productUrl = `/products/${id}`;

    const handleBuyProduct = () => {

    }
    const handleAddProductToCart = (product) => {   
        dispatch(addProductToCart(product));
    }

    return (
            <Card className="mb-4 box-shadow">
                <Link to={productUrl} >
                    <ImageComponent image={null}/>
                </Link>
                <Card.Body>
                    <Card.Text className="card-text">{product.description}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <ShopButton onClick={() => handleBuyProduct(product)} buttonText="Buy" />
                            <ShopButton onClick={() => handleAddProductToCart(product)} buttonText="Add To Cart" />
                        </div>
                        <small className="text-muted">In Stock {product.inStock}</small>
                    </div>
                </Card.Body>
            </Card>
    )
}
export default Product;