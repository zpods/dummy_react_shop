import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import AboutPage from "../aboutPage/AboutPage";
import HomePage from "../homePage/HomePage";
import ShopPageContainer from "../shopPageContainer/ShopPageContainer";
import CheckOut from "../aboutPage/checkOut/CheckOut";

export default function AppRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/checkout/:id" element={<CheckOut/>}></Route>
            <Route path="/shop" element={<ShopPageContainer/>}></Route>           
        </Routes>
    );
  }
  