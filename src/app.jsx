import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import Login from "./pages/LoginPage.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import CityList from "./components/CityList.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx"
import {CitiesProvider} from "./contexts/CitiesContext.jsx";

export default function App() {

    return (
        <CitiesProvider>
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
                               element={<CityList/>}/>
                        <Route path="cities/:id"
                               element={<City/>}/>
                        <Route
                            path="countries"
                            element={<CountryList/>}/>
                        <Route path="form" element={<Form/>}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
        </CitiesProvider>
    )
}