import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import AboutPage from "../aboutPage/AboutPage";
import HomePage from "../homePage/HomePage";
import ShopPageContainer from "../shopPageContainer/ShopPageContainer";
import CheckOut from "../checkOut/CheckOut";
import AfterCheckoutSummary from "../afterCheckoutSummary/AfterCheckoutSummary";

export default function AppRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/checkout" element={<CheckOut/>}></Route>
            <Route path="/after-checkout-summary" element={<AfterCheckoutSummary/>}></Route>
            <Route path="/shop" element={<ShopPageContainer/>}></Route>           
        </Routes>
    );
  }
  