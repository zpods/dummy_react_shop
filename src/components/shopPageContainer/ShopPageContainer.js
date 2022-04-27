import React from 'react';
import { fetchProducts, clearCart } from '../storeSlice/mainShopPage/mainShopPage';
import { useDispatch, useSelector } from 'react-redux';
import ShopPage from '../shopPage/ShopPage';
import MessageComponent from '../messageComponent/MessageComponent';

function ShopPageContainer (){
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchProducts());
        dispatch(clearCart());
    },[dispatch]);

    const { isLoading, products } = useSelector( (state) => state.mainShopPage);
    const message = {
        title: 'LOADING...',
        text: false,
    }
    const spinner = true;
    
    if(isLoading){
        return <MessageComponent spinner={spinner} message={message}/>
    }else{
        return (<ShopPage products={products}/>);
    }
}
export default ShopPageContainer;