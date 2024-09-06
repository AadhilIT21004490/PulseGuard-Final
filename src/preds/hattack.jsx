import React, { useState } from 'react';
import { TriangleAlert, ShieldCheck } from "lucide-react";
import HaHero from '../components/HaHero';

const Hattack = () => {
  const [formData, setFormData] = useState({
    Age: '', Gender: '', Heart_Rate: '',
    Systolic_Blood_Pressure: '', Diastolic_Blood_Pressure: '', Blood_Sugar: '',
    CK_MB: '', Troponin: ''
  });
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert the relevant fields to numerical values
    const parsedFormData = {
      ...formData,
      Blood_Sugar: formData.Blood_Sugar === 'Yes' ? 1 : 0,
      Gender: formData.Gender === 'Male' ? 1 : 0,
    };

    // Convert other numeric string fields to actual numbers
    Object.keys(parsedFormData).forEach(key => {
      if (!isNaN(parsedFormData[key])) {
        parsedFormData[key] = parseFloat(parsedFormData[key]);
      }
    });

    fetch('http://127.0.0.1:5000/hattack', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parsedFormData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setPrediction(data.prediction);
      setError(null);
    })
    .catch(error => {
      setError(error.message);
      setPrediction(null);
    });
  };

  return (
    <>
      <HaHero />
      <div className="flex h-screen mb-8">
        <div>
          <form onSubmit={handleSubmit} className="max-w-xl min-w-max m-4 p-10 bg-white rounded-3xl shadow-xl">
            <p className="text-gray-800 font-medium">Heart Attack Prediction</p>
            <div className="grid gap-4 grid-cols-2">
              {Object.keys(formData).map((key) => {
                if (key === 'Blood_Sugar') {
                  return (
                    <div key={key} className="mt-2 w-full pr-1">
                      <label className="block text-sm text-gray-600" htmlFor={key}>Blood Sugar</label>
                      <div>
                        <label className="inline-flex items-center mr-4">
                          <input
                            type="radio"
                            name={key}
                            value="Yes"
                            checked={formData[key] === 'Yes'}
                            onChange={handleChange}
                            className="form-radio"
                          />
                          <span className="ml-2 block text-sm text-gray-600">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name={key}
                            value="No"
                            checked={formData[key] === 'No'}
                            onChange={handleChange}
                            className="form-radio"
                          />
                          <span className="ml-2 block text-sm text-gray-600">No</span>
                        </label>
                      </div>
                    </div>
                  );
                } else if (key === 'Gender') {
                  return (
                    <div key={key} className="mt-2 w-full pr-1">
                      <label className="block text-sm text-gray-600" htmlFor={key}>Gender</label>
                      <div>
                        <label className="inline-flex items-center mr-4">
                          <input
                            type="radio"
                            name={key}
                            value="Male"
                            checked={formData[key] === 'Male'}
                            onChange={handleChange}
                            className="form-radio"
                          />
                          <span className="ml-2 block text-sm text-gray-600">Male</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name={key}
                            value="Female"
                            checked={formData[key] === 'Female'}
                            onChange={handleChange}
                            className="form-radio"
                          />
                          <span className="ml-2 block text-sm text-gray-600">Female</span>
                        </label>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={key} className="mt-2 w-full pr-1">
                      <label className="block text-sm text-gray-600" htmlFor={key}>{key.replace('_', ' ')}</label>
                      <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                        id={key}
                        name={key}
                        type="text"
                        value={formData[key]}
                        onChange={handleChange}
                        required
                        placeholder={key.replace('_', ' ')}
                        aria-label={key}
                      />
                    </div>
                  );
                }
              })}
            </div>
            <div className="mt-4">
              <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded w-full" type="submit">PREDICT</button>
            </div>
          </form>
        </div>
        <div>
          {prediction !== null && (
            <div className="flex flex-wrap m-4 min-w-max">
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <div className="bg-neutral-900 rounded-3xl p-6 text-md border border-neutral-800">
                  <h1 className={`text-4xl font-semibold ${prediction === 1 ? 'text-red-500' : 'text-green-500'}`}>
                    {prediction === 1 ? (<span>NEGATIVE <TriangleAlert /></span>) : (<span>POSITIVE <ShieldCheck /></span>)}
                  </h1>
                  <h1>_</h1>
                  <p>Schedule regular check-ups to monitor your heart health. This includes tracking blood pressure, cholesterol levels, blood sugar levels, and weight.</p>
                  <p>
                    <button className="mt-4 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">DOWNLOAD PDF</button>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hattack;
