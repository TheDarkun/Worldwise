﻿import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import Login from "./pages/LoginPage.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import CityList from "./components/CityList.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import {useEffect, useState} from "react";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx"
export default function App() {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const BASE_URL = "http://localhost:5174/"

    useEffect(() => {
        const fetchCities = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(`${BASE_URL}cities`);
                const data = await res.json();
                setCities(data);
            } catch {
                alert("Couldn't fetch data!");
            } finally {
                setIsLoading(false);
            }
        }

        fetchCities()

    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="product" element={<ProductPage/>}/>
                <Route path="pricing" element={<PricingPage/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="app" element={<AppLayout/>}>
                    <Route index
                           element={<Navigate to="cities"/>}/>
                    <Route path="cities"
                           element={<CityList
                               cities={cities}
                               isLoading={isLoading}/>}/>
                    <Route path="cities/:id"
                           element={<City
                               cities={cities}
                               isLoading={isLoading}/>}/>
                    <Route 
                        path="countries" 
                        element={<CountryList
                            cities={cities}
                            isLoading={isLoading}/>}/>
                    <Route path="form" element={<Form/>}/>

                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}