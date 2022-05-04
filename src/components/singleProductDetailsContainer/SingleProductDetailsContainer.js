import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchedProduct } from '../storeSlice/searchPage/searchPage';
import { useDispatch, useSelector } from 'react-redux';
import SingleProductDetails from '../singleProductDetails/SingleProductDetails';
import MessageComponent from '../messageComponent/MessageComponent';

export default function SingleProductDetailsContainer () {
    
    const isLoading = useSelector(state => state.searchPage.isLoading);
    const dispatch = useDispatch();
    const { name, id } = useParams();
    let searchedData = null
    const message = {
        title: 'LOADING...',
        text: 'Loading Searched Product Data',
    }
    const spinner = true;

    if(id){
        searchedData = id;
    }else{
        searchedData = name
    }

    const searchedProduct = useSelector((state) => state.searchPage.searchedProduct );

    React.useEffect(() => {
        dispatch(fetchSearchedProduct(searchedData));
    },[searchedData, dispatch])

    if(isLoading){
        return <MessageComponent spinner={spinner} message={message}/>
    }

    return(
        <SingleProductDetails product={searchedProduct}/>
    );
}