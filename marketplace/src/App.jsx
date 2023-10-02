import { Outlet, useParams } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import { useEffect, useState } from 'react';

export default function App() {

    const [onCart, setCart] = useState([])

    function addToCart(object) {
      setCart(oldObj => [...oldObj, object]);
      console.log(onCart)
      return;
    }

    function deleteItem(name) {
      let newItens = onCart.filter((item) => item !== name)
      setCart(newItens);
    }

    return(
      <>
          <Header obj={onCart} d={deleteItem}/>
          <Outlet context={addToCart}/>
      </>
    )
}