import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ShopButton from '../shopButton/ShopButton';
import ImageComponent from '../imageComponent/ImageComponent';
import { addProductToCart } from '../storeSlice/mainShopPage/mainShopPage';
import { buySingleProduct } from '../storeSlice/mainShopPage/mainShopPage';
import { useDispatch } from 'react-redux';

function Product(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = props.product;
    const productUrl = `/products/${product.id}`;
    const price = props.product.price;

    const handleBuySingle = (product) => {
        dispatch(buySingleProduct(product));
        navigate(`/checkout/${product.id}`);
    }

    const handleAddProductToCart = (product) => {   
        dispatch(addProductToCart(product));
    }

    return (
            <Card className="mb-4 box-shadow">
                <Link to={productUrl} >
                    <ImageComponent image={null} price={price}/>
                </Link>
                <Card.Body>
                    <Card.Text className="card-text">{product.description}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <ShopButton onClick={()=>handleBuySingle(product)} buttonText="Buy"></ShopButton>
                            <ShopButton onClick={() => handleAddProductToCart(product)} buttonText="Add To Cart" />
                        </div>
                        <small className="text-muted">In Stock {product.inStock}</small>
                    </div>
                </Card.Body>
            </Card>
    )
}
export default Product;