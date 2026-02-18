import bgVideo from '../custom/backgrounds/background25mb.mp4';

function AnimatedBG() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-white">
      <video
        src={bgVideo}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
      />
    </div>
  );
}

export default AnimatedBG;
