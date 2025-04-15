import { lazy } from 'react';

// Lazy loading for better performance
const Home = lazy(() => import('../components/pages/Home'));
const Dashboard = lazy(() => import('../components/pages/Dashboard'));
const PropertiesGridPage = lazy(() => import('../components/pages/PropertiesGridPage'));
const ComparePage = lazy(() => import('../components/pages/ComparePage'));
const PropertySingle = lazy(() => import('../components/pages/PropertySingle'));
const Contact = lazy(() => import('../components/pages/Contact'));
const AuthForm = lazy(() => import('../components/pages/AuthForm'));
const MyFavorites = lazy(() => import('../components/pages/MyFavorites'));
const CheckoutPage = lazy(() => import('../components/pages/CheckoutPage'));
const NumberOfPayments = lazy(() => import('../components/pages/NumberOfPayments'));

// Public routes - accessible to all users
export const publicRoutes = [
  {
    path: '/',
    element: <Home />,
    name: 'Home',
  },
  {
    path: '/properties',
    element: <PropertiesGridPage />,
    name: 'Properties',
  },
  {
    path: '/property/:id',
    element: <PropertySingle />,
    name: 'Property Details',
  },
  {
    path: '/contact',
    element: <Contact />,
    name: 'Contact',
  },
  {
    path: '/auth',
    element: <AuthForm />,
    name: 'Authentication',
  },
  {
    path: '/favorites',
    element: <MyFavorites />,
    name: 'My Favorites',
  },
  {
    path: '/compare',
    element: <ComparePage />,
    name: 'Compare Properties',
  },
];

// Protected routes - only accessible to authenticated users
export const protectedRoutes = [
  {
    path: '/dashboard',
    element: <Dashboard />,
    name: 'Dashboard',
    roles: ['admin'], // Only admin can access
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
    name: 'Checkout',
  },
  {
    path: '/payments',
    element: <NumberOfPayments />,
    name: 'Payment Options',
  },
];

// Combine all routes
export const allRoutes = [...publicRoutes, ...protectedRoutes]; 