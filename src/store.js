import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import mainShopPage from "./components/storeSlice/mainShopPage/mainShopPage";
import searchPage from "./components/storeSlice/searchPage/searchPage";
import loginRegisterLogout from './components/storeSlice/loginRegisterLogout/loginRegisterLogout';

const reducers = combineReducers({
    loginRegisterLogout,
    mainShopPage,
    searchPage,
})

export default configureStore({
    reducer: reducers,
    middleware: [thunk],
})