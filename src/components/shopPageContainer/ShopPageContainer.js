import React, { useCallback } from 'react';
import { fetchProducts } from '../storeSlice/mainShopPage/mainShopPage';
import { useDispatch, useSelector } from 'react-redux';
import ShopPage from '../shopPage/ShopPage';
import MessageComponent from '../../messageComponent/MessageComponent';

function ShopPageContainer (){
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchProducts());
    },[dispatch]);

    const { isLoading, products } = useSelector( (state) => state.mainShopPage);
    const message = {
        title: 'LOADING...',
        text: false,
    }

    if(isLoading){
        <MessageComponent message={message}/>
    }else{
        return (<ShopPage products={products}/>);
    }
}
export default ShopPageContainer;