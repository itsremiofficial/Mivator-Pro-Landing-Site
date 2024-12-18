import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '@Store/themeConfigSlice';

import * as Iconss from '@Icons/index';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const IconsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Font Icons'));
  });

  const { t } = useTranslation();
  const copyIconCode = (iconName = '', fill = false) => {
    const code = `<${iconName} ${fill ? 'fill={true}' : ''}/>`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          showSuccessToast(iconName, 'success');
        })
        .catch((err) => {
          showSuccessToast(iconName, 'error');
          console.error('Failed to copy: ', err);
        });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        showSuccessToast(iconName, 'success');
      } catch (err) {
        showSuccessToast(iconName, 'error');
        console.error('Fallback copy failed: ', err);
      }
      document.body.removeChild(textArea);
    }
  };

  const showSuccessToast = (iconName: string, toastType: SweetAlertIcon) => {
    const toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      customClass: {
        popup: 'w-[100%] text-red-700',
        title: 'text-red-500',
        icon: '',
      },
    });

    toast.fire({
      icon: toastType,
      title: `${iconName} copied!`,
      padding: '10px 20px',
    });
  };

  const [searchQuery, setSearchQuery] = useState<any>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <div>
      <div className="space-y-8">
        <div className="panel">
          <div className="panel-header flex w-full justify-between">
            <h5 className="text-lg mb-5 font-semibold dark:text-white-light">Icons List</h5>
            <div className="mb-5">
              <form
                className={`${searchQuery && '!block'} sm:relative absolute inset-x-0 sm:top-0 top-1/2 sm:translate-y-0 -translate-y-1/2 sm:mx-0 mx-4 z-10 sm:block hidden`}
                onSubmit={() => setSearchQuery(false)}
              >
                <div className="relative">
                  <input
                    type="text"
                    className="form-input ltr:pl-9 rtl:pr-9 ltr:sm:pr-4 rtl:sm:pl-4 ltr:pr-9 rtl:pl-9 peer sm:bg-transparent !bg-gray-100 focus:!bg-gray-200 placeholder:tracking-wider dark:!bg-brandsec-deep-90 dark:focus:!bg-brandsec-deep-100 placeholder:text-brandsec placeholder:font-normal transition duration-300"
                    autoFocus
                    placeholder={`${t('Search')}...`}
                    value={searchQuery}
                    onInput={handleInputChange}
                  />
                  <button type="button" className="absolute w-9 h-9 inset-0 ltr:right-auto rtl:left-auto appearance-none peer-focus:text-primary transition duration-300">
                    <Iconss.IconSearchAlt className="mx-auto w-5 h-5" />
                  </button>
                  <button type="button" className="hover:opacity-80 sm:hidden block absolute top-1/2 -translate-y-1/2 ltr:right-2 rtl:left-2" onClick={() => setSearchQuery(false)}>
                    <Iconss.IconCloseCircle />
                  </button>
                </div>
              </form>
              <button
                type="button"
                onClick={() => setSearchQuery(!searchQuery)}
                className="search_btn sm:hidden p-4 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
              >
                <Iconss.IconSearch className="w-3.5 h-3.5 mx-auto dark:text-[#d0d2d6]" />
              </button>
            </div>
          </div>

          <div className="mb-5">
            <div className="bg-[#03bd87]/[.16] text-[#03bd87] py-1 px-3 rounded-xl inline-block text-base mb-5">Line Duotone</div>
            <div className="flex items-center max-[600px]:justify-between flex-wrap gap-lg-5 gap-3 mb-5">
              {Object.entries(Iconss)
                .filter(([name]) => name.toLowerCase().includes(searchQuery))
                .map(([name, Icon], index) => (
                  <div key={name} className="grid place-content-center" onClick={() => copyIconCode(name, false)}>
                    <Icon className="w-16 h-16 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800/30 rounded-2xl text-2xl cursor-pointer text-gray-600 dark:text-brandsec-40 dark:hover:bg-gray-800/70 dark:hover:text-brand hover:text-brand transition-all duration-300 linear p-4" />
                  </div>
                ))}

              {Object.entries(Iconss).filter(([name]) => name.toLowerCase().includes(searchQuery)).length === 0 && (
                <div className="flex w-full p-2 text-center">
                  <p className="text-center text-gray-500 w-full">No icons found.</p>
                </div>
              )}
            </div>

            <div className="bg-[#03bd87]/[.16] text-[#03bd87] py-1 px-3 rounded-xl inline-block text-base mb-5">Bold Duotone</div>
            <div className="flex items-center max-[600px]:justify-between flex-wrap gap-lg-5 gap-3 mb-5">
              {Object.entries(Iconss)
                .filter(([name]) => name.toLowerCase().includes(searchQuery))
                .map(([name, Icon], index) => (
                  <div key={name} className="grid place-content-center" onClick={() => copyIconCode(name, true)}>
                    <Icon
                      className="w-16 h-16 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800/30 rounded-2xl text-2xl cursor-pointer text-gray-600 dark:text-brandsec-50 dark:hover:bg-gray-800/70 dark:hover:text-brand hover:text-brand transition-all duration-300 linear p-4"
                      fill={true}
                    />
                  </div>
                ))}

              {Object.entries(Iconss).filter(([name]) => name.toLowerCase().includes(searchQuery)).length === 0 && (
                <div className="flex w-full p-2 text-center">
                  <p className="text-center text-gray-500 w-full">No icons found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconsPage;
