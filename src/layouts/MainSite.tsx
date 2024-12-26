import { PropsWithChildren, Suspense } from 'react';
import App from '@/App';
import Portals from '@Layouts/Portals';
import PreLoader from '@Components/PreLoader';
const MainSite = ({ children }: PropsWithChildren) => {
  return (
    <App>
      {/* BEGIN MAIN CONTAINER */}
      <div className="relative">
        {/* PRELOADER */}
        <PreLoader />

        <div className={`main-container text-secondary dark:text-white min-h-screen`}>
          {/* <Setting /> */}
          <div className="main-content flex flex-col min-h-screen">
            {/* BEGIN CONTENT AREA */}

            <Suspense>{children}</Suspense>

            {/* END CONTENT AREA */}
            <Portals />
          </div>
        </div>
      </div>
    </App>
  );
};

export default MainSite;
