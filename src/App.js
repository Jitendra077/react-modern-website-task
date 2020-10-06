import React from 'react';
import Navbar from "./Components/Navbar_";
//import { BrowserRouter as Router , Switch , Route } from "react-router-dom"
import Welcome from "./Components/Welcome"
//import SubComponent1 from './Components/SubComponents/SubComponent1';
//import SubComponent2 from './Components/SubComponents/SubComponent2';
//import SubComponent3 from './Components/SubComponents/SubComponent3';

import Names from './Components/Names';
import FormParentComponent from './Components/FormParentComponent';
import SubComponents from './Components/SubComponents/SubComponents';
import FormSideInfo from "./Components/FormSideInfo";
import BarChartComponent from "./Components/BarChartComponent";
import AirbnbCard from './Components/AirbnbCard';
import Stayfocused from './Components/Stayfocused';
import "./App.css"
import SubFooter from './Components/SubFooter';

function App() {
  return (
    <div>
      <div style = {{backgroundColor:"white"}}>
        <Navbar/> 
        <Welcome/>
        <SubComponents/>
        <Names/>
      </div>
      <div style ={{backgroundColor:"smoke"}}>
        <FormParentComponent/>
        <FormSideInfo/>
        <BarChartComponent/>
        <AirbnbCard/>
       </div>  
       
        <div style = {{backgroundColor:"smoke"}}>
        <Stayfocused/>
        </div>
        <SubFooter/>
    </div>
  );
}

export default  App;
