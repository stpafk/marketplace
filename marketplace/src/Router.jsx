import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/default/ErrorPage';
import Album from './components/Genre/Album';
import Search from './components/Search/Search';
import Cart from './components/header/Cart';
import Home from './components/default/Home';
import Contact from './components/outer/Contact';

export default function Router() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {index: true, element: <Home />},
                {path: "cart", element: <Cart />},
                {path: "search", element: <Search />},
                {path: "album/:type", element: <Album />},
            ]
        },   
        {
            path: "/contact",
            element: <Contact />
        } 
    ])

    return <RouterProvider router={router} />
}