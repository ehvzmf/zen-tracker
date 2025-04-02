import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Layout from '../../widgets/layout';
import { HomePage } from '../../pages/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
