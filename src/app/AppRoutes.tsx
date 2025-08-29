import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/widgets/Layout';
import Home from '@/pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
