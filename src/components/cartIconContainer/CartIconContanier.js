import React from 'react';
import CartIcon from '../cartIcon/CartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCart } from '../storeSlice/mainShopPageAndCart/mainShopPageAndCart';

export default function CartIconContainer() {

    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.loginRegisterLogout.isAuth);
    
    React.useEffect(() => {
        if(isAuth){
            dispatch(getUserCart()); 
        }       
    }, [dispatch, isAuth])
    
    return ( <CartIcon/> )
}