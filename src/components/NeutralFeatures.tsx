import React, { useMemo } from 'react';
import { memo } from 'react';

// Dynamically import icons
const icons = {
  IconFast: React.lazy(() => import('@Icons/Features/IconFast')),
  IconModify: React.lazy(() => import('@Icons/Features/IconModify')),
  IconCompatible: React.lazy(() => import('@Icons/Features/IconCompatible')),
  IconUi: React.lazy(() => import('@Icons/Features/IconUi')),
  IconFeatures: React.lazy(() => import('@Icons/Features/IconFeatures')),
  IconInput: React.lazy(() => import('@Icons/Features/IconInput')),
};

// Type definition for icon configuration
interface IconConfig {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  alignment?: 'start' | 'center' | 'end';
}

const NeutralFeatures: React.FC = () => {
  // Icon grid configuration
  const iconGrid: IconConfig[] = useMemo(
    () => [
      { Icon: icons.IconFast, label: 'Fast & Efficient', alignment: 'start' },
      { Icon: icons.IconModify, label: 'Easy to Modify', alignment: 'center' },
      { Icon: icons.IconCompatible, label: 'Highly Compatible', alignment: 'end' },
      { Icon: icons.IconUi, label: 'Better UI', alignment: 'start' },
      { Icon: icons.IconFeatures, label: 'Premium Features', alignment: 'center' },
      { Icon: icons.IconInput, label: 'Resolvable Inputs', alignment: 'end' },
    ],
    []
  );

  // Memoized icon rendering
  const renderIcon = React.useCallback(
    ({ Icon, label, alignment }: IconConfig) => (
      <div key={label} className={`flex ${alignment === 'start' ? '' : alignment === 'end' ? 'justify-end' : 'flex-col items-center'}`}>
        <div className="flex flex-col items-center drop-shadow-[0px_8px_24px_rgba(7,7,10,0.1)] dark:drop-shadow-[0px_8px_24px_rgba(7,7,10,0.7)]">
          <div className="mask mask-squircle">
            <div className="connection_icon">
              <span className="text-secondary dark:text-primary-600">
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Icon className="size-16" />
                </React.Suspense>
              </span>
            </div>
          </div>
          <p className="connection_text" dangerouslySetInnerHTML={{ __html: label.replace('&', '&amp;') }} />
        </div>
      </div>
    ),
    []
  );

  return (
    <div className="w-screen flex justify-center items-center px-4 iconscontainer py-32">
      <div className="relative w-screen max-w-5xl z-[1] flex flex-col justify-between">
        <div className="relative grid grid-cols-3 gap-y-40 !mt-auto w-full px-12 z-[5]">{iconGrid.map(renderIcon)}</div>
      </div>
    </div>
  );
};

export default memo(NeutralFeatures);
