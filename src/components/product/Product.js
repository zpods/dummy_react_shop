import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ShopButton from '../shopButton/ShopButton';
import ImageComponent from '../imageComponent/ImageComponent';
import { addProductToCart } from '../storeSlice/mainShopPage/mainShopPage';
import { buySingleProduct } from '../storeSlice/mainShopPage/mainShopPage';
import { useDispatch } from 'react-redux';
import styles from './Product.module.css';

function Product(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = props.product;
    const productUrl = `/products/${product.id}`;
    const price = props.product.price;
    const name = props.product.name;
    const image = {name};

    const handleBuySingle = (product) => {
        dispatch(buySingleProduct(product));
        navigate(`/checkout`);
    }

    const handleAddProductToCart = (product) => {   
        dispatch(addProductToCart(product));;
    }

    return (
            <Card className="mb-4 box-shadow">
                <Link to={productUrl} >
                    <ImageComponent image={image} price={price}/>
                </Link>
                <Card.Body>
                    <Card.Text className={styles.description}>{product.description}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <ShopButton onClick={()=>handleBuySingle(product)} size={'sm'} variant={"outline-secondary"} buttonText="Buy One"></ShopButton>
                            <ShopButton onClick={() => handleAddProductToCart(product)} size={'sm'} variant={"outline-secondary"} buttonText="Add To Cart" />
                        </div>
                        <small className="text-muted">In Stock: {product.instock}</small>
                    </div>
                </Card.Body>
            </Card>
    )
}
export default Product;