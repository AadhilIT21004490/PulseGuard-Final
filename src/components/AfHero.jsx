import video1 from "../assets/video1.mp4";
import video2 from "../assets/video22.mp4";

const AfHero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        ATRIAL FIBRILLATION 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          PREDICTION
        </span>
      </h1>
      <p className="mt-10 mb-8 text-lg text-center text-neutral-500 max-w-4xl">
      Atrial fibrillation (AFib) is an irregular and often very rapid heart rhythm. 
      An irregular heart rhythm is called an arrhythmia. AFib can lead to blood clots in the heart. 
      The condition also increases the risk of stroke, heart failure and other heart-related complications.
      </p>
    </div>
  );
};

export default AfHero;
