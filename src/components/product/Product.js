import React, { useRef } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ShopButton from '../shopButton/ShopButton';
import ImageComponent from '../imageComponent/ImageComponent';
import { addProductToCart, buySingleProduct } from '../storeSlice/mainShopPageAndCart/mainShopPageAndCart';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Product.module.css';

function Product(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.mainShopPageAndCart.cart);
    const product = props.product;
    const productUrl = `/shop/products/${product.id}`;
    const price = props.product.price;
    const name = props.product.name;
    const image = {name};
    const [productsInStock, setProductsInStock] = React.useState(0);

    React.useEffect(()=>{
        const setInStockVar = (cart) => {
            let found = cart.find(item => item.id === product.id);
            if(found){
                setProductsInStock(found.instock);   
            }else{
                setProductsInStock(product.instock);
            }           
        }
        setInStockVar(cart);
    }, [cart, product] )
    
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
                        <small className="text-muted">In Stock: {productsInStock}</small>
                    </div>
                </Card.Body>
            </Card>
    )
}
export default Product;