import { Outlet, useParams } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Home from './components/Home';
import Cart from './components/Cart';

export default function App() {

    return(
      <>
          <Header />
          <Outlet />
      </>
    )
}