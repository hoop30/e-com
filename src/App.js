import React from 'react';
import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Home } from './pages/home/Home'
import { ProductsList } from './pages/productsList/ProductsList'
import { ProductsSubList } from './pages/productsSubList/ProductsSubList'
import { Product } from './pages/product/Product'
import { Cart } from './pages/cart/Cart'

function App() {
    return (
        <React.Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="ProductsList" element={<ProductsList />} />
                <Route path="ProductsSubList" element={<ProductsSubList />} />
                <Route path="Product" element={<Product />} />
                <Route path="Cart" element={<Cart />} />
            </Routes>
            <Footer />
        </React.Fragment>
    );
}

export default App;
