import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import mainShopPage from "./components/storeSlice/mainShopPage/mainShopPage";
import searchPage from "./components/storeSlice/searchPage/searchPage";

const reducers = combineReducers({
    mainShopPage,
    searchPage,
})

export default configureStore({
    reducer: reducers,
    middleware: [thunk],
})