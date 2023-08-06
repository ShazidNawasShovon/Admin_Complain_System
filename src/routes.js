import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import PrivateRoute from './ProtectedRoute/PrivateRoute/PrivateRoute';
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Form from './pages/Form/Form';
import Login from './pages/Login/Login/Login';
import SignUp from './pages/Login/SignUp/SignUp';


// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      
      path:"/",
      element:<Login />,index:true,
      
    },
    {
      path: "/signup",
      element:<SignUp/>
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" /> },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'form', element: <Form /> },
      ],
    },
    
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
