import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// Tailwind css
import './App.css';
import './assets/css/locomotive.css';

// Router
import { RouterProvider } from 'react-router-dom';
import router from './router/index';

// Redux
import { Provider } from 'react-redux';
import { store } from '@/store';
import { ThemeProvider } from '@/ThemeProvider';
// import { MobileProvider } from '@utils/deviceDetection/MobileContext';

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

// import DeviceDetector from 'react-device-detector';

// function App() {
//   const deviceDetector = new DeviceDetector();

//   return (
//     <div>
//       {deviceDetector.getDeviceType() === 'Mobile' ? 'Mobile device detected' : 'Desktop device detected'}
//     </div>
//   );
// }
