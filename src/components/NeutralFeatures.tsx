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
    ({ Icon, label }: IconConfig) => (
      <div key={label} className="w-1/3 lg:w-1/4 py-10 lg:py-20 flex flex-col items-center grow drop-shadow-[0px_8px_24px_rgba(7,7,10,0.1)] dark:drop-shadow-[0px_8px_24px_rgba(7,7,10,0.7)]">
        <div className="mask mask-squircle">
          <div className="connection_icon">
            <span className="text-secondary dark:text-primary-600">
              <Icon className="size-16" />
            </span>
          </div>
        </div>
        <p className="connection_text" dangerouslySetInnerHTML={{ __html: label.replace('&', '&amp;') }} />
      </div>
    ),
    []
  );

  return (
    <div className="w-screen flex justify-center items-center px-4 iconscontainer py-32">
      <div className="relative z-[1] flex flex-wrap gap-12 justify-between">{iconGrid.map(renderIcon)}</div>
    </div>
  );
};

export default memo(NeutralFeatures);
