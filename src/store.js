import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import mainShopPageAndCart from "./components/storeSlice/mainShopPageAndCart/mainShopPageAndCart";
import searchPage from "./components/storeSlice/searchPage/searchPage";
import loginRegisterLogout from './components/storeSlice/loginRegisterLogout/loginRegisterLogout';


const reducers = combineReducers({
    loginRegisterLogout,
    mainShopPageAndCart,
    searchPage,
})

export default configureStore({
    reducer: reducers,
    middleware: [thunk],
})