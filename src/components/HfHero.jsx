import video1 from "../assets/video1.mp4";
import video2 from "../assets/video22.mp4";

const HfHero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        HEART FAILIURE  
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          PREDICTION
        </span>
      </h1>
      <p className="mt-10 mb-8 text-lg text-center text-neutral-500 max-w-4xl">
      Heart failure, also known as congestive heart failure, is a condition that 
      develops when your heart doesn't pump enough blood for your body's needs. 
      This can happen if your heart can't fill up with enough blood. It can also 
      happen when your heart is too weak to pump properly.
      </p>
    </div>
  );
};

export default HfHero;
