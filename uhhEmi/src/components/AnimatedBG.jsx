import bgVideo from '../custom/backgrounds/background25mb.mp4';

function AnimatedBG() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        src={bgVideo}
        className="absolute inset-0 h-full w-full object-cover, blur-[2px]"
        autoPlay
        muted
        loop
      />
      <div
        className="absolute bg-black top-[-10vh] left-[-25vw] h-[30vh] w-[150vw] rotate-[1deg]"
        style={{ animation: 'topSway 6s ease-in-out infinite' }}
      ></div>
      <div
        className="absolute bg-black bottom-[-20vh] left-[-25vw] h-[40vh] w-[150vw] rotate-[-3deg]"
        style={{ animation: 'botSway 6s ease-in-out infinite' }}
      ></div>
    </div>
  );
}

export default AnimatedBG;
