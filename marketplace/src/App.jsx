import { Outlet, useParams } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Home from './components/Home';
import Cart from './components/Cart';
import { useState } from 'react';

export default function App() {

    const [onCart, setCart] = useState([])

    function addToCart(object) {
      setCart(object);
    }

    return(
      <>
          <Header />
          <Outlet />
      </>
    )
}