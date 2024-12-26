import React from 'react';
import ReactDOM from 'react-dom/client';

// Tailwind css
import '@/App.css';
import '@Assets/css/locomotive.css';

// Router
import { RouterProvider } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { store } from '@/store';
import { ThemeProvider } from '@/ThemeProvider';
import router from '@/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        {/* <MobileProvider> */}
        <RouterProvider router={router} />
        {/* </MobileProvider> */}
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
