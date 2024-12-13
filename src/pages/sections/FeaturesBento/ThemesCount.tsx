import ThemesCountSvg from './svgs/ThemesCountSvg';

const ThemesCount = () => {
  return (
    <div>
      <div className="flex justify-center w-full">
        <ThemesCountSvg />
      </div>
      <div className="absolute z-[2] inset-0 m-auto flex flex-col items-center justify-end">
        <div className="text-4xl feature-card-title">
          <div className="relative overflow-hidden z-[1] flex justify-center">
            <div hoverstagger="title" className="relative inline-block">
              Themes
            </div>
            <div hoverstagger="title" className="absolute inset-y-0">
              Themes
            </div>
          </div>
        </div>
        <p className="feature-card-subtitle">Customize Your Experience</p>
      </div>
    </div>
  );
};

export default ThemesCount;
