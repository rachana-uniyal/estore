import React from "react";
import {Routes,Route} from "react-router-dom";
import MainContainer from "./Main-Container/MainContainer";
import Header from "./Header-Component/Header";
import ProductDetails from "./Product/ProductDetails";
import Cart from "./Cart/Cart";
import PaymentResponse from "./Cart/PaymentResponse";

const LandingPage = () =>{
    return(
        <>
         <Header/>
         <section className="main-container">
            <Routes>
                <Route path="/" element={<MainContainer/>}/>
                <Route path="productdetails" element={<ProductDetails/>}/>
                <Route path="viewcart" element={<Cart/>}/>
                <Route path="paymentresponse" element={<PaymentResponse/>}/>
            </Routes>
        </section>
        </>
    )
}

export default LandingPage;
