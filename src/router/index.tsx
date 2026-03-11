import { createBrowserRouter } from 'react-router-dom';
import { routes } from '@Router/routes';
import MainSite from '@Layouts/MainSite';

const finalRoutes = routes.map((route) => {
  return {
    ...route,
    element: route.layout === 'site' ? <MainSite>{route.element}</MainSite> : '',
    // <Dashboard>{route.element}</Dashboard>,
  };
});

const router = createBrowserRouter(finalRoutes, {
  basename: '/Mivator-Pro-Landing-Site',
  future: {
    v7_skipActionErrorRevalidation: true,
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_partialHydration: true,
    v7_normalizeFormMethod: true,
  },
});

export default router;
