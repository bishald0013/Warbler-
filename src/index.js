import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutUs from './Components/Pages/AboutUs';
import Product from './Components/Pages/Product';
import Navbar from './Components/Navbar';
import Header from './Components/Header';

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="header" element={<Header />} />
            <Route path="product" element={<Product />} />
            <Route path="aboutus" element={<AboutUs />} />
        </Routes>
    </BrowserRouter>
);