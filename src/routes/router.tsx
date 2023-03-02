import Blog from '@src/pages/Blog';
import Login from '@src/pages/Login';
import About from '@src/pages/About';
import { createBrowserRouter } from 'react-router-dom';
import Error from '@src/pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Blog />,
    errorElement: <Error />,
  },
  {
    path: '/blog',
    element: <Blog />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <Error />,
  },
]);

export default router;
