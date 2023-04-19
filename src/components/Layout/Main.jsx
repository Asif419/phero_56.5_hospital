import React, { createContext, useState } from 'react';
import './Main.css';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext([]);


const Main = () => {
  const [carts, setCarts] = useState([]);
  return (
    <CartContext.Provider value={[carts, setCarts]}>
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer />
      </div>
    </CartContext.Provider>

  );
};

export default Main;