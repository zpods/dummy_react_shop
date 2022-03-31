import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import mainShopPage from "./components/storeSlice/mainShopPage/mainShopPage";

const reducers = combineReducers({
    mainShopPage,
})

export default configureStore({
    reducer: reducers,
    middleware: [thunk],
})