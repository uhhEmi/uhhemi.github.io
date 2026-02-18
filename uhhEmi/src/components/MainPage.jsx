import bgVideo from '../custom/backgrounds/background25mb.mp4';
import OC from '../custom/characters/default.png';

function MainPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        src={bgVideo}
        className="absolute inset-0 h-full w-full object-cover, blur-[2px]"
        autoPlay
        muted
        loop
      />
      <SFMCinematicBars />
    </div>
  );
}

function SFMCinematicBars() {
  return (
    <>
      <div
        className="absolute bg-black top-[-10vh] left-[-25vw] h-[30vh] w-[150vw] rotate-[1deg]"
        style={{ animation: 'topSway 6s ease-in-out infinite' }}
      ></div>
      <OCInfo />
      <div
        className="absolute bg-black bottom-[-20vh] left-[-25vw] h-[40vh] w-[150vw] rotate-[-3deg]"
        style={{ animation: 'botSway 6s ease-in-out infinite' }}
      ></div>
    </>
  );
}

function OCInfo() {
  return (
    <div className="flex h-screen w-full items-center gap-4">
      <div className="relative grow-3 basis-3/7">
        <img
          src={OC}
          alt="uhhEmi's OC"
          style={{ animation: 'charSway 10s infinite ease-in-out' }}
        />
      </div>
      <div className="relative grow-4 basis-4/7"></div>
    </div>
  );
}

export default MainPage;
