import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage';
import Album from './components/Genre/Album';
import Search from './components/Search/Search';
import Cart from './components/Cart';
import Home from './components/Home';

export default function Router() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {index: true, element: <Home />},
                {path: "cart", element: <Cart />},
                {path: "search", element: <Search />}
            ]
        },    
        {
            path: "/album/:type",
            element: <Album />,
        },
        
    ])

    return <RouterProvider router={router} />
}