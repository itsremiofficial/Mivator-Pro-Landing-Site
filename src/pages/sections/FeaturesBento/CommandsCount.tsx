import Balancer from 'react-wrap-balancer';
import CommandsCountSvg from './svgs/CommandsCountSvg';
import { LinkSquare02Icon } from 'hugeicons-react';

const CommandsCount = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className="grid md:grid-cols-2 h-full">
      <div className="flex flex-col justify-between relative">
        <div className="mask mask-squircle w-max relative">
          <div className="p-10 size-32 bg-secondary dark:bg-primary-900 rounded-3xl flex items-center justify-center">
            <div className="perspective-distant relative size-full flex justify-center items-center">
              <div
                className="size-full rounded-xl transform-3d rotate-x-45 rotate-z-45 absolute -top-2 inset-0 z-[3] border-4
              dark:bg-primary-600 dark:border-primary-900 bg-light-100 border-secondary
              group-hover/commands:-top-4 transition-all duration-500 ease-fluid group-hover/commands:rotate-z-225"
              ></div>
              <div
                className="
              size-full rounded-xl transform-3d rotate-x-45 rotate-z-45 dark:bg-primary-600/50 dark:border-primary-900 bg-light-100/50 border-secondary
              backdrop-blur-3xl absolute top-1 inset-0 z-[2] border-4  group-hover/commands:top-0 transition-all duration-500 ease-fluid group-hover/commands:rotate-z-135"
              ></div>
              <div
                className="
              size-full rounded-xl transform-3d rotate-x-45 rotate-z-45
              absolute top-4 inset-0 z-[1] border-4
              dark:bg-primary-600/30 dark:border-primary-900 bg-light-100/30 border-secondary"
              ></div>
            </div>
          </div>
        </div>

        <div className="absolute z-[2] inset-0 flex flex-col justify-end w-full">
          <div className="text-6xl feature-card-title">
            <div className="relative overflow-hidden z-[1] w-full">
              <div hoverstagger="title" className="relative inline-block w-full">
                Commands
              </div>
              <div hoverstagger="title" className="absolute inset-y-0 w-full">
                Commands
              </div>
            </div>
          </div>
          <div>
            <Balancer className="feature-card-subtitle">Explore a vast library of versatile commands, tailored for every need.</Balancer>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex flex-col items-center justify-center gap-4 dark:bg-primary-1100 bg-light-400/50 p-4 rounded-4xl h-48 w-full grow relative">
          <div className="flex h-full justify-center">
            <CommandsCountSvg isDark={isDark} />
          </div>
          <p className="absolute bottom-3 text-light-800 group-hover/bento:text-light-1000 dark:text-primary-800 text-lg font-medium font-nippo transition-colors duration-1000">...and counting</p>
        </div>
        <a href="" className="w-full">
          <button className="btn bg-light-500 hover:bg-light-600 dark:bg-primary-1000 hover:dark:bg-primary-900 hover:dark:text-primary-700 dark:text-primary text-light-800 hover:text-secondary border-none w-full font-medium rounded-3xl relative mt-4 px-7 py-4 gap-2 transition-colors duration-400">
            Explore Commands Library
            <LinkSquare02Icon className="size-5 ml-2" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default CommandsCount;
