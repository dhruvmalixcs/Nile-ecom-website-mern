import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../customer/components/Cart.jsx/Cart";
import Checkout from "../customer/components/Checkout/Checkout";
import footer from "../customer/components/footer/footer";
import Navigation from "../customer/components/Navigation/Navigation";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import HomePage from "../customer/Pages/Homepage/HomePage";

const CustomerRoutes = () => {
  return (
    <div>
    <div><Navigation/></div>
      <Routes>
      <Route path="/login" element={<HomePage/>}></Route>
      <Route path="/register" element={<HomePage/>}></Route>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product/>}></Route>
      <Route path="/product/:productId" element={<ProductDetails/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path="/account/order" element={<Order/>}></Route>
      <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>
      
      </Routes>
      <div><footer/></div>
    </div>
  );
};

export default CustomerRoutes;
