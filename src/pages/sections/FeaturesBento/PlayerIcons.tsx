import BandCampSvg from './svgs/BandCampSvg';
import DeezerSvg from './svgs/DeezerSvg';
import SoundCloudSvg from './svgs/SoundCloudSvg';
import SpotifySvg from './svgs/SpotifySvg';

const PlayerIcons = () => {
  return (
    <>
      <div className="col-span-8 feature-card bg-gradient-to-tr flex flex-col items-center justify-center p-6 !size-32">
        <SpotifySvg />
        <span className="players_icon_text">Spotify</span>
      </div>
      <div className="col-span-8 feature-card bg-gradient-to-tr flex flex-col items-center justify-center p-6 !size-32">
        <SoundCloudSvg />
        <span className="players_icon_text">SoundCloud</span>
      </div>
      <div className="col-span-8 feature-card bg-gradient-to-tr flex flex-col items-center justify-center p-6 !size-32">
        <DeezerSvg />
        <span className="players_icon_text">Deezer</span>
      </div>
      <div className="col-span-8 feature-card bg-gradient-to-tr flex flex-col items-center justify-center p-6 !size-32">
        <BandCampSvg />
        <span className="players_icon_text">Bandcamp</span>
      </div>
    </>
  );
};

export default PlayerIcons;
