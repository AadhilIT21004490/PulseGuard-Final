import video1 from "../assets/video1.mp4";
import video2 from "../assets/video22.mp4";

const HaHero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        HEART ATTACK  
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          PREDICTION
        </span>
      </h1>
      <p className="mt-10 mb-8 text-lg text-center text-neutral-500 max-w-4xl">
      A heart attack, also known as a myocardial infarction, happens when the flow of 
      blood that brings oxygen to a part of your heart muscle suddenly becomes blocked.
      Your heart can't get enough oxygen. If blood flow is not restored quickly, the heart
       muscle will begin to die. Heart attacks are very common.
      </p>
    </div>
  );
};

export default HaHero;
