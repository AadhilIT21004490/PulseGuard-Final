import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Predictions
      </h2>
      <div className="flex flex-wrap">
          <div className="w-full max-w-fit sm:w-1/2 lg:w-1/3 p-2">
            <div className="w-auto p-10 border border-neutral-700 rounded-xl">
              <img src="src/assets/profile-pictures/afs.jpg" alt="af" className="mb-8 w-auto max-h-fit rounded-lg" />
              <p className="text-2xl mb-8">
              Atrial Fibrillation Prediction
              </p>
              {/* <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p> */}
              <ul>
                  <li className="mt-8 flex text-justify italic items-center">
                    {/* <CheckCircle2 /> */}
                    <span className="ml-2">Predicts the likelihood of atrial fibrillation by analyzing patient data for irregular heart rhythms and other risk factors.</span>
                  </li>
              </ul>
              <Link
                to="/atrial"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Diagnose
              </Link>
            </div>
          </div>

          <div className="w-full max-w-fit sm:w-1/2 lg:w-1/3 p-2">
            <div className="w-auto p-10 border border-neutral-700 rounded-xl">
              <img src="src/assets/profile-pictures/strk.jpg" alt="af" className="mb-8 w-auto max-h-fit rounded-lg" />
              <p className="text-2xl mb-8">
              Heart Stroke Prediction
              </p>
              {/* <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p> */}
              <ul>
                  <li className="mt-8 flex text-justify italic items-center">
                    {/* <CheckCircle2 /> */}
                    <span className="ml-2">Assesses the risk of stroke by evaluating critical indicators such as blood pressure, cholesterol levels, and medical history.</span>
                  </li>
              </ul>
              <Link
                to="/stroke"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Diagnose
              </Link>
            </div>
          </div>

          <div className="w-full max-w-fit sm:w-1/2 lg:w-1/3 p-2">
            <div className="w-auto p-10 border border-neutral-700 rounded-xl">
              <img src="src/assets/profile-pictures/ha.jpg" alt="af" className="mb-8 w-auto max-h-fit rounded-lg" />
              <p className="text-2xl mb-8">
              Heart Attack Prediction
              </p>
              {/* <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p> */}
              <ul>
                  <li className="mt-8 flex text-justify italic items-center">
                    {/* <CheckCircle2 /> */}
                    <span className="ml-2">Identifies the probability of a heart attack by examining vital signs, lifestyle factors, and previous cardiac events.</span>
                  </li>
              </ul>
              <Link
                to="/hattack"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Diagnose
              </Link>
            </div>
          </div>

          <div className="w-full max-w-fit sm:w-1/2 lg:w-1/3 p-2">
            <div className="w-auto p-10 border border-neutral-700 rounded-xl">
              <img src="src/assets/profile-pictures/hf.jpeg" alt="af" className="mb-8 w-auto max-h-fit rounded-lg" />
              <p className="text-2xl mb-8">
              Heart Failiure Prediction
              </p>
              {/* <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p> */}
              <ul>
                  <li className="mt-8 flex text-justify italic items-center">
                    {/* <CheckCircle2 /> */}
                    <span className="ml-2">Forecasts potential heart failure by monitoring patient data for symptoms like shortness of breath, fluid retention, and fatigue.</span>
                  </li>
              </ul>
              <Link
                to="/hf"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Diagnose
              </Link>
            </div>
          </div>
      </div>

      
    </div>
  );
};

export default Pricing;
