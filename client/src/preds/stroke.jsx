import React, { useState } from 'react';
import { TriangleAlert, ShieldCheck } from "lucide-react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StrkHero from '../components/StrkHero';

const Stroke = () => {
  const [formData, setFormData] = useState({
    gender: '', age: '', hypertension: '', heart_disease: '',
    ever_married: '', Residence_type: '', avg_glucose_level: '', bmi: '',
    smoking_status_formerly_smoked: '0', smoking_status_never_smoked: '0', smoking_status_smokes: '0',
    work_type_Govt_job: '0', work_type_Never_worked: '0', work_type_Private: '0', work_type_Self_employed: '0', work_type_children: '0'
  });
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSmokingStatusChange = (e) => {
    const selectedStatus = e.target.value;
    setFormData({
      ...formData,
      smoking_status_formerly_smoked: selectedStatus === 'formerly_smoked' ? '1' : '0',
      smoking_status_never_smoked: selectedStatus === 'never_smoked' ? '1' : '0',
      smoking_status_smokes: selectedStatus === 'smokes' ? '1' : '0',
    });
  };

  const handleWorkTypeChange = (e) => {
    const selectedWorkType = e.target.value;
    setFormData({
      ...formData,
      work_type_Govt_job: selectedWorkType === 'Govt_job' ? '1' : '0',
      work_type_Never_worked: selectedWorkType === 'Never_worked' ? '1' : '0',
      work_type_Private: selectedWorkType === 'Private' ? '1' : '0',
      work_type_Self_employed: selectedWorkType === 'Self_employed' ? '1' : '0',
      work_type_children: selectedWorkType === 'children' ? '1' : '0',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(null);
    setPrediction(null);

    const parsedFormData = {};
    Object.keys(formData).forEach(key => {
      parsedFormData[key] = parseFloat(formData[key]);
    });

    fetch('http://127.0.0.1:5000/stroke', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
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
      <StrkHero/>
      <div className="flex h-screen mb-8">
        <div>
          <form onSubmit={handleSubmit} className="max-w-xl min-w-max m-4 p-10 bg-white rounded-3xl shadow-xl">
            <p className="text-gray-800 font-medium">Stroke Prediction</p>
            <div className="grid gap-4 grid-cols-2">

              {/* Gender Dropdown */}
              <div className="mt-2 w-full pr-1">
                <label className="block text-sm text-gray-600" htmlFor="gender">Gender</label>
                <select
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  aria-label="gender"
                >
                  <option value="">Select Gender</option>
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
              </div>

              {/* Hypertension Dropdown */}
              <div className="mt-2 w-full pr-1">
                <label className="block text-sm text-gray-600" htmlFor="hypertension">Hypertension</label>
                <select
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="hypertension"
                  name="hypertension"
                  value={formData.hypertension}
                  onChange={handleChange}
                  required
                  aria-label="hypertension"
                >
                  <option value="">Select Hypertension</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              {/* Heart Disease Dropdown */}
              <div className="mt-2 w-full pr-1">
                <label className="block text-sm text-gray-600" htmlFor="heart_disease">Heart Disease</label>
                <select
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="heart_disease"
                  name="heart_disease"
                  value={formData.heart_disease}
                  onChange={handleChange}
                  required
                  aria-label="heart_disease"
                >
                  <option value="">Select Heart Disease</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              {/* Ever Married Dropdown */}
              <div className="mt-2 w-full pr-1">
                <label className="block text-sm text-gray-600" htmlFor="ever_married">Ever Married</label>
                <select
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="ever_married"
                  name="ever_married"
                  value={formData.ever_married}
                  onChange={handleChange}
                  required
                  aria-label="ever_married"
                >
                  <option value="">Select Marital Status</option>
                  <option value="1">Married</option>
                  <option value="0">Un-Married</option>
                </select>
              </div>

              {/* Residence Type Dropdown */}
              <div className="mt-2 w-full pr-1">
                <label className="block text-sm text-gray-600" htmlFor="Residence_type">Residence Type</label>
                <select
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="Residence_type"
                  name="Residence_type"
                  value={formData.Residence_type}
                  onChange={handleChange}
                  required
                  aria-label="Residence_type"
                >
                  <option value="">Select Residence Type</option>
                  <option value="1">Urban</option>
                  <option value="0">Rural</option>
                </select>
              </div>

              {/* Other input fields */}
              {Object.keys(formData).map((key) => {
                if (
                  key.startsWith('smoking_status') || 
                  key.startsWith('work_type') || 
                  key === 'gender' || 
                  key === 'hypertension' || 
                  key === 'heart_disease' || 
                  key === 'ever_married' || 
                  key === 'Residence_type'
                ) return null; // Skip smoking status, work type, and other dropdown fields
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
              })}

              {/* Dropdown for Smoking Status */}
              <div className="mt-2 w-full pr-1">
                <label className="block text-sm text-gray-600" htmlFor="smoking_status">Smoking Status</label>
                <select
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="smoking_status"
                  name="smoking_status"
                  onChange={handleSmokingStatusChange}
                  aria-label="smoking_status"
                >
                  <option value="">Select Smoking Status</option>
                  <option value="formerly_smoked">Formerly Smoked</option>
                  <option value="never_smoked">Never Smoked</option>
                  <option value="smokes">Smokes</option>
                </select>
              </div>

              {/* Dropdown for Work Type */}
              <div className="mt-2 w-full pr-1">
                <label className="block text-sm text-gray-600" htmlFor="work_type">Work Type</label>
                <select
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="work_type"
                  name="work_type"
                  onChange={handleWorkTypeChange}
                  aria-label="work_type"
                >
                  <option value="">Select Work Type</option>
                  <option value="Govt_job">Govt Job</option>
                  <option value="Never_worked">Never Worked</option>
                  <option value="Private">Private</option>
                  <option value="Self_employed">Self Employed</option>
                  <option value="children">Children</option>
                </select>
              </div>
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
                    {prediction === 1 ? (<span>POSITIVE<TriangleAlert /></span>) : (<span>NEGATIVE</span>)}
                  </h1>
                  <h1>_</h1>
                  <p>Schedule regular check-ups to monitor your heart health. This includes tracking blood pressure, cholesterol levels, blood sugar levels, and weight.</p>
                  <p>
                    <a href="../admin/stroke/Dashboard">
                      <button className="mt-4 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">DOWNLOAD PDF</button>
                    </a>
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

export default Stroke;
