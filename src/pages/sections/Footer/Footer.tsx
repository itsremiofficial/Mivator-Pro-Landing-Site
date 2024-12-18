const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-primary-1200 w-screen py-24 group/footer relative h-max">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center ">
          <div className="pb-9">
            <a className="inline-block mb-20" href="#">
              <img className="block h-24" src="favicon/favicon.svg" alt="" />
            </a>
            <div className="flex flex-wrap -mx-4 -mb-4 justify-center items-center">
              <div className="w-full xs:w-1/2 md:w-auto px-4 xl:px-8 mb-4">
                <a className="inline-block text-xs tracking-widest font-bold font-nippo uppercase dark:text-primary-700/50 hover:text-primary transition-colors duration-500" href="#">
                  Features
                </a>
              </div>
              <div className="w-full xs:w-1/2 md:w-auto px-4 xl:px-8 mb-4">
                <a className="inline-block text-xs tracking-widest font-bold font-nippo uppercase dark:text-primary-700/50 hover:text-primary transition-colors duration-500" href="#">
                  Why Mivator Pro?
                </a>
              </div>
              <div className="w-full xs:w-1/2 md:w-auto px-4 xl:px-8 mb-4">
                <a className="inline-block text-xs tracking-widest font-bold font-nippo uppercase dark:text-primary-700/50 hover:text-primary transition-colors duration-500" href="#">
                  How it Works?
                </a>
              </div>
              <div className="w-full xs:w-1/2 md:w-auto px-4 xl:px-8 mb-4">
                <a className="inline-block text-xs tracking-widest font-bold font-nippo uppercase dark:text-primary-700/50 hover:text-primary transition-colors duration-500" href="#">
                  Legal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 w-full flex justify-center dark:text-primary-700/30 border-t py-12 dark:border-white/5 font-nippo font-medium group-hover/footer:text-primary transition-colors duration-500">
        Mivator © 2024{'  '}-{'  '}All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
