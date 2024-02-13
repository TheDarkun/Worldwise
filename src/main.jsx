import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import "./index.css"
import Login from "./pages/LoginPage.jsx";
import AppLayout from "./pages/AppLayout.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<HomePage/>}/>
                <Route path="product" element={<ProductPage/>}/>
                <Route path="pricing" element={<PricingPage/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="app" element={<AppLayout/>}>
                    <Route path="cities" element={<p>List of cities</p>}/>
                    <Route path="countries" element={<p>List of countries</p>}/>
                    <Route path="form" element={<p>form</p>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
