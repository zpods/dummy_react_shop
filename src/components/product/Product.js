import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ShopButton from '../shopButton/ShopButton';
import ImageComponent from '../imageComponent/ImageComponent';
import { addProductToCart } from '../storeSlice/mainShopPageAndCart/mainShopPageAndCart';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Product.module.css';

function Product(props) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.mainShopPageAndCart.cart);
    
    const product = props.product;
    const productUrl = `/shop/products/${product.id}`;
    const price = props.product.price;
    const name = props.product.name;
    const image = {name};
    const inStock = props.product.instock;
    const [productsInStock, setProductsInStock] = React.useState();

    React.useEffect(()=>{
        const setInStockVar = (cart) => {
            let found = false;
            const singleProduct = product;
            if(typeof cart === 'undefined') return ;
            found = cart.find(item => item.id === singleProduct.id); 
            found ? setProductsInStock(found.instock) : setProductsInStock(product.instock);
        }
        setInStockVar(cart);
    }, [cart, product] )
    

    const handleAddProductToCart = (product) => {  
        dispatch(addProductToCart(product));;
    }

    return (
            <Card className="mb-4 box-shadow">
                <Link to={productUrl} >
                    <ImageComponent image={image} price={price}/>
                </Link>
                <Card.Body className={styles.cartBodyPadding}>
                    <Card.Text className={styles.description}>{product.description}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <ShopButton onClick={() => handleAddProductToCart(product)} size={'sm'} variant={"outline-secondary"} buttonText="Add To Cart" />
                        </div>
                        <small className="text-muted px-3">In Stock: {productsInStock ? productsInStock : inStock}</small>
                    </div>
                </Card.Body>
            </Card>
    )
}
export default Product;