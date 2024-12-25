import { PropsWithChildren, Suspense } from 'react';
import App from '@/App';
import Portals from '@Layouts/Portals';
import PreLoader from '@Components/PreLoader';
import useLocoScroll from '@/utils/useLocoScroll';
import SiteHeader from './SiteHeader';
import Footer from '@/pages/sections/Footer/Footer';

const MainSite = ({ children }: PropsWithChildren) => {
  const { scrollToSection } = useLocoScroll('[data-scroll-container]');
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
          <SiteHeader handleScroll={scrollToSection} />
          <div data-scroll-container className="main-content flex flex-col min-h-screen">
            {/* BEGIN CONTENT AREA */}

            <Suspense>{children}</Suspense>

            <Footer handleScroll={scrollToSection} />
            {/* END CONTENT AREA */}
            <Portals />
          </div>
        </div>
      </div>
    </App>
  );
};

export default MainSite;
