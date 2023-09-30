import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage';
import Album from './components/Genre/Album';
import Search from './components/Search/Search';

export default function Router() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: "album/:type",
            element: <Album />,
        },
        {
            path: "search/",
            element: <Search />
        }        
    ])

    return <RouterProvider router={router} />
}