import React from "react";
import AppRoutes from '../appRoutes/AppRoutes';
import NavLinks from "../navLinks/NavLinks";
import Footer from "../footer/Footer";
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.body}>     
      <Router>
        <NavLinks/>
        <AppRoutes/>
        <Footer/>
      </Router>
    </div> 
  );
}

export default App;
