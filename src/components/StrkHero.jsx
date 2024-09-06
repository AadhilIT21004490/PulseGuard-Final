import video1 from "../assets/video1.mp4";
import video2 from "../assets/video22.mp4";

const StrkHero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        STROKE  
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          PREDICTION
        </span>
      </h1>
      <p className="mt-10 mb-8 text-lg text-center text-neutral-500 max-w-4xl">
      The Basics. Heart disease and stroke are part of a group of cardiovascular diseases.
       Heart disease is the leading cause of death for both men and women. These diseases 
       affect your heart and blood vessels. Stroke is a condition in which the brain can't get enough blood flow.
      </p>
    </div>
  );
};

export default StrkHero;
