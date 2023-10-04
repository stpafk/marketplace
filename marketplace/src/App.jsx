import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header'
import { useState } from 'react';

export default function App() {

    const [onCart, setCart] = useState([])

    function addToCart(object) {

      if (onCart.find(obj => obj.name === object.name)){
        onCart.find(obj => obj.name === object.name).quantity++;
        return;
      }

      setCart(oldObj => [...oldObj, object]);
      return;
    }

    function deleteItem(name) {

      let newItens = onCart.filter((item) => item.name !== name) 
      setCart(newItens);

    }

    return(
      <>
          <Header cartItems={onCart}/>
          <Outlet context={[addToCart, onCart, deleteItem]}/>
      </>
    )
}