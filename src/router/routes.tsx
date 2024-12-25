import { lazy } from 'react';
import IconsPage from '@Pages/IconsPage';
import Setup from '@/pages/Setup';
const Home = lazy(() => import('@Pages/Home'));
const ERROR404 = lazy(() => import('@Pages/Error404'));

const routes = [
  // dashboard
  {
    path: '/',
    element: <Home />,
    layout: 'site',
  },
  {
    path: '/Setup',
    element: <Setup />,
    layout: 'site',
  },
  {
    path: '/icons',
    element: <IconsPage />,
    layout: 'site',
  },
  {
    path: '*',
    element: <ERROR404 />,
    layout: 'site',
  },
];

export { routes };
