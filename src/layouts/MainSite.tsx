import { PropsWithChildren, Suspense } from 'react';
import { useSelector } from 'react-redux';
import App from '../App';
import { IRootState } from '../store';
import Portals from './Portals';
import PreLoader from '../components/PreLoader';
import SiteHeader from './SiteHeader';

const MainSite = ({ children }: PropsWithChildren) => {
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);

  return (
    <App>
      {/* BEGIN MAIN CONTAINER */}
      <div className="relative">
        {/* PRELOADER */}
        <PreLoader />
        <div className="fixed bottom-6 ltr:right-6 rtl:left-6 z-50">
          <button name="gototop" type="button" className="btn btn-primary rounded-full p-2 animate-pulse bg-[#fafafa] dark:bg-[#060818] dark:hover:bg-primary">
            {/* onClick={goToTop}> */}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
            </svg>
          </button>
        </div>

        <div className={`main-container text-secondary dark:text-white min-h-screen`}>
          {/* <Setting /> */}
          <div className="main-content flex flex-col min-h-screen">
            <SiteHeader />
            {/* BEGIN CONTENT AREA */}
            <Suspense>
              <div className={`${themeConfig.animation} animate__animated`}>{children}</div>
            </Suspense>
            {/* END CONTENT AREA */}
            <Portals />
          </div>
        </div>
      </div>
    </App>
  );
};

export default MainSite;
