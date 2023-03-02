import Blog from '@src/pages/Blog';
import Login from '@src/pages/Login';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Blog />,
    // errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
    // errorElement: <ErrorPage />,
  },
]);

export default router;
