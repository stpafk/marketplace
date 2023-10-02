import { Outlet, useParams } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Home from './components/Home';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';

export default function App() {

    const [onCart, setCart] = useState([])

    function addToCart(object) {
      setCart(oldObj => [...oldObj, object]);
      return;
    }

    function deleteItem(name) {
      let newItens = onCart.filter((item) => item !== name)
      setCart(newItens);
    }

    return(
      <>
          <Header a={addToCart} d={deleteItem}/>
          <Outlet context={addToCart}/>
      </>
    )
}