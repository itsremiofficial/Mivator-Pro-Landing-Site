import FastSpeedSvg from './svgs/FastSpeedSvg';

const FastSpeed = ({ isDark }: { isDark: boolean }) => {
  return (
    <div>
      <div className="flex justify-center">
        <FastSpeedSvg isDark={isDark} />
      </div>
      <div className="absolute z-[2] inset-0 m-auto flex flex-col items-center justify-end">
        <div className="text-4xl feature-card-title uppercase">
          <div className="relative overflow-hidden z-[1] flex justify-center">
            <div hoverstagger="title" className="relative inline-block">
              MS
            </div>
            <div hoverstagger="title" className="absolute inset-y-0">
              MS
            </div>
          </div>
        </div>
        <p className="feature-card-subtitle">Fast and Seamless</p>
      </div>
    </div>
  );
};
export default FastSpeed;
