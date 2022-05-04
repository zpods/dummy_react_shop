import React, { useRef } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ShopButton from '../shopButton/ShopButton';
import ImageComponent from '../imageComponent/ImageComponent';
import { addProductToCart } from '../storeSlice/mainShopPage/mainShopPage';
import { buySingleProduct } from '../storeSlice/mainShopPage/mainShopPage';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Product.module.css';

function Product(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.mainShopPage.cart);
    const product = props.product;
    const productUrl = `/shop/products/${product.id}`;
    const price = props.product.price;
    const name = props.product.name;
    const image = {name};
    const [a,setA] = React.useState(0);
    let inStock = useRef(null);

    React.useEffect(()=>{
        const setInStockVar = (cart) => {
            let found = cart.find(item => item.id === product.id);
            if(found){
                setA(found.instock);   
            }else{
                setA(product.instock);
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
                        <small className="text-muted">In Stock: {a}</small>
                    </div>
                </Card.Body>
            </Card>
    )
}
export default Product;