import React from "react";
import AppRoutes from '../appRoutes/AppRoutes';
import NavLinks from "../navLinks/NavLinks";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>     
      <Router>
      <NavLinks/>
        <AppRoutes/>
      </Router>
    </React.Fragment> 
  );
}

export default App;
