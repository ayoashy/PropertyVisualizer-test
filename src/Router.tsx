import { Navigate, RouterProvider } from 'react-router';
import { createHashRouter } from 'react-router';
import RootLayout from './pages/RootLayout';
import TowerOverview from './pages/TowerOverview';


const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <TowerOverview />,
        index: true,
      },
      {
        path: '/*',
        element: <Navigate to='/' />,
      },
    ],
  },
  // {
  //   path: '/*',
  //   element: <ErrorPage />,
  // },
]);


const Router = ()=>{ 
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default Router;
