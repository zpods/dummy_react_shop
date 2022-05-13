import React  from 'react';
import { useSelector } from 'react-redux';
import { Table, Container, Row, Col } from 'react-bootstrap';
import ShopButton from '../shopButton/ShopButton';
import { useDispatch } from 'react-redux';
import { clearCart } from '../storeSlice/mainShopPageAndCart/mainShopPageAndCart';
import { useNavigate } from 'react-router-dom';
import { moveDecimal } from '../../utils/utils';
import { storeUserCart } from '../storeSlice/mainShopPageAndCart/mainShopPageAndCart';


function CheckOut (){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart, singleProductCart, totalPrice, totalQuantity } = useSelector((state) => state.mainShopPageAndCart); 
    const isAuth = useSelector(state => state.loginRegisterLogout.isAuth);
    let i = 1;
    let checkoutCart = singleProductCart[0] ? singleProductCart : cart ; 

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleCheckout =  () => { 
        const cartToClean = [...checkoutCart];
        let cleanCart = [];
        cartToClean.map((item)=>{
            return cleanCart.push({id: item.id, inCart: item.inCart});
        });
        dispatch(storeUserCart(cleanCart))
        .then( () => navigate('/after-checkout-summary') );        
    }

    const handleUserNotLoginOrRegister = () => {
        navigate('/login');
    }
    
    return (
        <React.Fragment>
            <Container className="border border-dark p-2 bg-light w-100 mt-5">
                <Table variant="dark">                
                    <thead>
                        <tr>
                            <th className='w-25'>#</th>
                            <th className='w-25'>Product</th>
                            <th className='w-25'>Price</th>
                            <th className='w-25'>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        { checkoutCart && checkoutCart.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{i++}</td>
                                    <td>{item.name}</td>
                                    <td>{moveDecimal(item.price)}</td>
                                    <td>{item.inCart}</td>
                                </tr>                  
                            );
                        })}                                         
                        <tr>
                            <th colSpan={2}>Total Price: {moveDecimal(totalPrice)}</th>
                            <th colSpan={2}>Total Quantity: {totalQuantity}</th>
                        </tr>                                                                                                  
                    </tbody>            
                </Table>
                { isAuth && 
                <Row >
                    <Col><ShopButton onClick={() => handleCheckout()} styleClass={'w-100'} size={'lg'} variant={'outline-dark'} buttonText="CHECKOUT"/></Col>
                    <Col><ShopButton onClick={() => handleClearCart()} styleClass={'w-100'} size={'lg'} variant={'outline-dark'} buttonText="CLEAR CART"/></Col>
                </Row> 
                } 
                { !isAuth &&
                <Row >
                    <Col><ShopButton onClick={() => handleUserNotLoginOrRegister()} styleClass={'w-100'} size={'lg'} variant={'outline-dark'} buttonText="LOGIN OR REGISTER"/></Col>
                </Row> 
                }              
            </Container>
        </React.Fragment>
    )
}
export default CheckOut;