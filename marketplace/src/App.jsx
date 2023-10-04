import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header'
import { useState } from 'react';

export default function App() {

    const [onCart, setCart] = useState([])

    function addToCart(object) {
      setCart(oldObj => [...oldObj, object]);
      return;
    }

    function deleteItem(name) {

      let newItens = onCart.filter((item) => item.name !== name) 
      setCart(newItens);

    }

    return(
      <>
          <Header />
          <Outlet context={[addToCart, onCart, deleteItem]}/>
      </>
    )
}