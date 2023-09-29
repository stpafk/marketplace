import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage';
import Album from './components/Album';

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
        }
    ])

    return <RouterProvider router={router} />
}