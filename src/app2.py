from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Load the HF trained model
model = joblib.load('src/ensemble_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    features = np.array([
        data['age'], data['anaemia'],
        data['creatinine_phosphokinase'], data['diabetes'],
        data['ejection_fraction'], data['high_blood_pressure'],
        data['platelets'], data['serum_creatinine'],
        data['serum_sodium'], data['sex'],
        data['smoking'], data['time']
    ])
    features = features.reshape(1, -1)
    prediction = model.predict(features)
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
