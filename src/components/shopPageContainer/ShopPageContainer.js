import React, { useEffect } from "react";
import { fetchProducts } from '../storeSlice/mainShopPageAndCart/mainShopPageAndCart';
import { useDispatch, useSelector } from "react-redux";
import ShopPage from "../shopPage/ShopPage";
import MessageComponent from "../messageComponent/MessageComponent";

export default function ShopPageContainer (){ 

    const dispatch = useDispatch();
    const { products, isLoading, error } = useSelector(state => state.mainShopPageAndCart);

    useEffect(() => {
        dispatch(fetchProducts());
    },[dispatch]);
    
    if(error){
        return <MessageComponent/>
    }

    return (<ShopPage products={products} isLoading={isLoading}/>);
}