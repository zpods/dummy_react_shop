import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchedProduct } from '../storeSlice/searchPage/searchPage';
import { useDispatch, useSelector } from 'react-redux';
import SingleProductDetails from '../singleProductDetails/SingleProductDetails';
import MessageComponent from '../messageComponent/MessageComponent';

export default function SingleProductDetailsContainer () {
    
    const { searchError, searchIsLoading } = useSelector(state => state.searchPage);
    const dispatch = useDispatch();
    const { name, id } = useParams();
    let searchedData = null

    if(id){
        searchedData = id;
    }else{
        searchedData = name
    }

    const searchedProduct = useSelector((state) => state.searchPage.searchedProduct );

    React.useEffect(() => {
        dispatch(fetchSearchedProduct(searchedData));
    },[searchedData, dispatch])

    if(searchError || searchIsLoading){
        return <MessageComponent/>
    }
console.log(searchedProduct);
    return(
        <SingleProductDetails product={searchedProduct}/>
    );
}