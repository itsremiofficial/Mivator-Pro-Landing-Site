import { Activity01Icon, FastWindIcon, GridIcon, Layers01Icon, Rocket01Icon, Target01Icon, TradeDownIcon, UserIcon } from 'hugeicons-react';
import React, { useState } from 'react';

const AdvancedFluidGrid = () => {
  const [activeCard, setActiveCard] = useState(null);

  const gridItems = [
    {
      id: 1,
      icon: <GridIcon className="w-10 h-10 text-blue-500" />,
      title: 'Strategic Insights',
      description: 'Comprehensive analytics and predictive modeling',
      color: 'from-blue-50 to-blue-100',
      textColor: 'text-blue-900',
      hoverEffect: 'hover:bg-blue-100/50',
    },
    {
      id: 2,
      icon: <Activity01Icon className="w-10 h-10 text-green-500" />,
      title: 'Performance Metrics',
      description: 'Real-time performance tracking and optimization',
      color: 'from-green-50 to-green-100',
      textColor: 'text-green-900',
      hoverEffect: 'hover:bg-green-100/50',
    },
    {
      id: 3,
      icon: <Rocket01Icon className="w-10 h-10 text-purple-500" />,
      title: 'Innovation Hub',
      description: 'Emerging trends and technological frontiers',
      color: 'from-purple-50 to-purple-100',
      textColor: 'text-purple-900',
      hoverEffect: 'hover:bg-purple-100/50',
    },
    {
      id: 4,
      icon: <Target01Icon className="w-10 h-10 text-red-500" />,
      title: 'Strategic Goals',
      description: 'Aligned objectives and key results framework',
      color: 'from-red-50 to-red-100',
      textColor: 'text-red-900',
      hoverEffect: 'hover:bg-red-100/50',
    },
    {
      id: 5,
      icon: <FastWindIcon className="w-10 h-10 text-yellow-500" />,
      title: 'Dynamic Workflows',
      description: 'Adaptive process optimization engine',
      color: 'from-yellow-50 to-yellow-100',
      textColor: 'text-yellow-900',
      hoverEffect: 'hover:bg-yellow-100/50',
    },
  ];

  return (
    <div className="relative w-full max-w-screen-2xl mx-auto px-4 py-12">
      <div
        className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        gap-6 
        auto-rows-[minmax(200px,auto)]"
      >
        {/* Primary Insights Card - Spanning Multiple Columns */}
        <div
          className="
          md:col-span-3 
          lg:col-span-4 
          xl:col-span-3 
          bg-gradient-to-br 
          from-neutral-50 
          to-neutral-100 
          dark:from-neutral-900 
          dark:to-neutral-800 
          rounded-3xl 
          p-8 
          flex 
          flex-col 
          justify-between 
          hover:scale-[1.01] 
          shadow-2xl 
          hover:shadow-3xl 
          transition-all 
          duration-300 
          group"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">Integrated Intelligence Platform</h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg">Transformative insights through advanced data synthesis and predictive analytics.</p>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="
                w-full 
                h-56 
                bg-neutral-200/50 
                dark:bg-neutral-700/50 
                rounded-2xl 
                flex 
                items-center 
                justify-center 
                text-neutral-500 
                backdrop-blur-md"
              >
                <Layers01Icon className="w-24 h-24 text-neutral-400 opacity-50" />
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((user) => (
                <div
                  key={user}
                  className="
                    w-10 
                    h-10 
                    rounded-full 
                    border-2 
                    border-white 
                    dark:border-neutral-800 
                    bg-gradient-to-br 
                    from-blue-400 
                    to-purple-600"
                />
              ))}
              <div
                className="
                w-10 
                h-10 
                rounded-full 
                border-2 
                border-white 
                dark:border-neutral-800 
                bg-neutral-200 
                dark:bg-neutral-700 
                flex 
                items-center 
                justify-center 
                text-neutral-500 
                text-sm 
                font-bold"
              >
                +5
              </div>
            </div>
            <button
              className="
              px-4 
              py-2 
              bg-neutral-900 
              dark:bg-neutral-100 
              text-neutral-100 
              dark:text-neutral-900 
              rounded-full 
              hover:bg-neutral-700 
              dark:hover:bg-neutral-300 
              transition-colors 
              duration-300"
            >
              Explore Insights
            </button>
          </div>
        </div>

        {/* Dynamic Grid Items */}
        {gridItems.map((item) => (
          <div
            key={item.id}
            // onClick={() => setActiveCard(item.id === activeCard ? null : item.id)}
            className={`
              bg-gradient-to-br 
              ${item.color}
              dark:from-neutral-900 
              dark:to-neutral-800 
              rounded-3xl 
              p-6 
              flex 
              flex-col 
              justify-between 
              cursor-pointer 
              hover:scale-[1.02] 
              shadow-lg 
              hover:shadow-xl 
              transition-all 
              duration-300 
              ${item.hoverEffect}
              ${activeCard === item.id ? 'ring-4 ring-neutral-500/50' : ''}
            `}
          >
            <div className="flex justify-between items-start">
              {item.icon}
              <TradeDownIcon className={`w-6 h-6 ${item.textColor} opacity-50`} />
            </div>
            <div>
              <h3 className={`text-xl font-bold ${item.textColor} mb-2`}>{item.title}</h3>
              <p className={`text-sm ${item.textColor} opacity-70`}>{item.description}</p>
            </div>
          </div>
        ))}

        {/* User & Team Section */}
        <div
          className="
          bg-gradient-to-br 
          from-neutral-50 
          to-neutral-100 
          dark:from-neutral-900 
          dark:to-neutral-800 
          rounded-3xl 
          p-6 
          flex 
          flex-col 
          items-center 
          justify-center 
          hover:scale-[1.02] 
          shadow-lg 
          hover:shadow-xl 
          transition-all 
          duration-300"
        >
          <UserIcon className="w-12 h-12 text-neutral-500 mb-4" />
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Team Collaboration</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-center mb-4">Seamless communication and workspace integration</p>
          <button
            className="
            px-4 
            py-2 
            bg-neutral-900 
            dark:bg-neutral-100 
            text-neutral-100 
            dark:text-neutral-900 
            rounded-full 
            hover:bg-neutral-700 
            dark:hover:bg-neutral-300 
            transition-colors 
            duration-300"
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFluidGrid;
