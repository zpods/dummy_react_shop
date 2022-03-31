import React, { useCallback } from 'react';
import { fetchProducts } from '../storeSlice/mainShopPage/mainShopPage';
import { useDispatch, useSelector } from 'react-redux';
import ShopPage from '../shopPage/ShopPage';

function ShopPageContainer (){
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchProducts());
    },[dispatch]);

    const { isLoading, products } = useSelector( (state) => state.mainShopPage);

    if(isLoading){
        return (<div>laoding</div>);
    }else{
        return (<ShopPage products={products}/>);
    }
}
export default ShopPageContainer;