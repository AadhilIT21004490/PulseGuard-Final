import React, { useState } from 'react';
import { TriangleAlert, ShieldCheck } from "lucide-react";
import AfHero from '../components/AfHero';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const Atrial = () => {
  const [formData, setFormData] = useState({
    I: '', II: '', III: '', aVF: '', aVR: '', aVL: '',
    V1: '', V2: '', V3: '', V4: '', V5: '', V6: '',
    age: '', sex: '', height: '', weight: ''
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

    setError(null);
    setPrediction(null);

    const parsedFormData = {
      ...formData,
      sex: formData.sex === 'Male' ? 1 : 0,
    };

    Object.keys(parsedFormData).forEach(key => {
      if (!isNaN(parsedFormData[key])) {
        parsedFormData[key] = parseFloat(parsedFormData[key]);
      }
    });

    fetch('http://127.0.0.1:5000/atrial', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
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

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.text('Atrial Fibrillation Prediction Report', 14, 22);

    // Subtitles and Data
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text('Input Data:', 14, 32);

    // Using autoTable for input data
    const inputData = Object.keys(formData).map((key) => [key.replace('_', ' '), formData[key]]);
    
    doc.autoTable({
      startY: 36,
      head: [['Field', 'Value']],
      body: inputData,
      theme: 'grid',
      styles: { fontSize: 10, cellPadding: 4 },
      headStyles: { fillColor: [22, 160, 133], textColor: [255, 255, 255] },
      alternateRowStyles: { fillColor: [241, 245, 249] },
    });

    // Prediction Result
    doc.text('Prediction Result:', 14, doc.lastAutoTable.finalY + 10);

    const predictionText = prediction === 2 ? 'HIGH RISK' : prediction === 1 ? 'LOW RISK' : 'NORMAL';
    const predictionColor = prediction === 2 ? [255, 0, 0] : prediction === 1 ? [255, 165, 0] : [0, 128, 0];

    doc.setFontSize(14);
    doc.setTextColor(...predictionColor);
    doc.text(predictionText, 14, doc.lastAutoTable.finalY + 20);

    // Save the PDF
    doc.save('Atrial_Fibrillation_Prediction_Report.pdf');
  };

  return (
    <>
      <AfHero/>
      <div className="flex h-screen mb-8">
        <div>
          <form onSubmit={handleSubmit} className="max-w-xl min-w-max m-4 p-10 bg-white rounded-3xl shadow-xl">
            <p className="text-gray-800 font-medium">Atrial Fibrillation Prediction</p>
            <div className="grid gap-4 grid-cols-2">
              {Object.keys(formData).map((key) => {
                if (key === 'sex') {
                  return (
                    <div key={key} className="mt-2 w-full pr-1">
                      <label className="block text-sm text-gray-600" htmlFor={key}>Sex</label>
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
                  <h1 className={`text-4xl font-semibold ${prediction === 2 ? 'text-red-500' : prediction === 1 ? 'text-yellow-500' : 'text-green-500'}`}>
                    {prediction === 2 ? (<span>HIGH RISK <TriangleAlert /></span>) : prediction === 1 ? 'LOW RISK' : (<span>NORMAL <ShieldCheck /></span>)}
                  </h1>
                  <h1>_</h1>
                  <p>Schedule regular check-ups to monitor your heart health. This includes tracking blood pressure, cholesterol levels, blood sugar levels, and weight.</p>
                  <p>
                    <a href="../admin/atrial/Dashboard">
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
}

export default Atrial;
