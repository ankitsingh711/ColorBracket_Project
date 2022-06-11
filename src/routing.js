import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Component/Home/Login';
import Register from './Component/Home/register'
import Header from './header';
import Footer from './footer';
import Details from "./Component/Details/details";
import Employees from './Component/employee/employee'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={ Login } />
                <Route path="/employee" component={Employees}/>
                <Route path="/register" component={Register}/>
                <Route path="/details" component={Details}/>
            <Footer/>
        </BrowserRouter>
        
    )
}

export default Routing;