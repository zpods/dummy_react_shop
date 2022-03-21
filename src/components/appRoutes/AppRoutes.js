import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import AboutPage from "../aboutPage/AboutPage";
import HomePage from "../homePage/HomePage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={HomePage}>
            </Route>
            <Route path="/about" element={AboutPage}>
            </Route>
        </Routes>
    );
  }
  