import React  from 'react';
import { useSelector } from 'react-redux';
import { Table, Container, Row, Col } from 'react-bootstrap';
import ShopButton from '../shopButton/ShopButton';
import { useDispatch } from 'react-redux';
import { clearCart } from '../storeSlice/mainShopPage/mainShopPage';
import { useNavigate } from 'react-router-dom';
import { moveDecimal } from '../../utils/utils';

function CheckOut (){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart, singleProductCart, totalPrice, totalQuantity } = useSelector((state) => state.mainShopPage); 
    let i = 1;
    let checkoutCart = singleProductCart[0] ? singleProductCart : cart;

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleCheckout =  () => { 
        navigate('/after-checkout-summary');
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
                                    <td>{item.price}</td>
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
                <Row >
                    <Col><ShopButton onClick={() => handleCheckout()} styleClass={'w-100'} size={'lg'} variant={'outline-dark'} buttonText="CHECKOUT"/></Col>
                    <Col><ShopButton onClick={() => handleClearCart()} styleClass={'w-100'} size={'lg'} variant={'outline-dark'} buttonText="CLEAR CART"/></Col>
                </Row>                
            </Container>
        </React.Fragment>
    )
}
export default CheckOut;