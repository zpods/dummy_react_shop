import React from "react";
import AppRoutes from '../appRoutes/AppRoutes';
import NavLinks from "../navLinks/NavLinks";
import Footer from "../footer/Footer";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';



function App() {

  const handleClick = () => {
      const navBar = document.getElementById("basic-navbar-nav");
      navBar.classList.add('animateCloseNavbar');
      setTimeout(() => {
        navBar.classList.remove('show');
      },281);
  }
 
  return (   
    <Router >
      <NavLinks/>
      <div onClick={() => handleClick()}>
        <AppRoutes/>
        <Footer/>
      </div>        
    </Router>
  );
}

export default App;
