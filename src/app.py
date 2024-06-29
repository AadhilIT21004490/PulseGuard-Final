from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Load models and scalers
stroke_model = joblib.load('src/voting_clf.pkl')
heart_failure_model = joblib.load('src/ensemble_model.pkl')
af_model = joblib.load('src/model_pickle.pkl')
with open('src/scaler.pkl', 'rb') as f:
    heart_attack_scaler = pickle.load(f)
heart_attack_model = joblib.load('src/Best_ha_model.pkl')

@app.route('/stroke', methods=['POST'])
def predict_stroke():
    data = request.get_json(force=True)
    features = np.array([
        data['gender'], data['age'], data['hypertension'],
        data['heart_disease'], data['ever_married'], data['Residence_type'],
        data['avg_glucose_level'], data['bmi'], data['smoking_status_formerly_smoked'],
        data['smoking_status_never_smoked'], data['smoking_status_smokes'], data['work_type_Govt_job'],
        data['work_type_Never_worked'], data['work_type_Private'], data['work_type_Self_employed'],
        data['work_type_children']
    ]).reshape(1, -1)
    prediction = stroke_model.predict(features)
    return jsonify({'prediction': int(prediction[0])})

@app.route('/hf', methods=['POST'])
def predict_heart_failure():
    data = request.get_json(force=True)
    features = np.array([
        data['age'], data['anaemia'],
        data['creatinine_phosphokinase'], data['diabetes'],
        data['ejection_fraction'], data['high_blood_pressure'],
        data['platelets'], data['serum_creatinine'],
        data['serum_sodium'], data['sex'],
        data['smoking'], data['time']
    ]).reshape(1, -1)
    prediction = heart_failure_model.predict(features)
    return jsonify({'prediction': int(prediction[0])})

@app.route('/atrial', methods=['POST'])
def predict_af():
    data = request.get_json(force=True)
    features = np.array([
        data['I'], data['II'], data['III'], data['aVF'], data['aVR'], data['aVL'],
        data['V1'], data['V2'], data['V3'], data['V4'], data['V5'], data['V6'],
        data['age'], data['sex'], data['height'], data['weight']
    ]).reshape(1, -1)
    prediction = af_model.predict(features)
    return jsonify({'prediction': int(prediction[0])})

@app.route('/hattack', methods=['POST'])
def predict_heart_attack():
    data = request.get_json(force=True)
    try:
        features = np.array([
            float(data['Age']), float(data['Gender']), float(data['Heart_Rate']),
            float(data['Systolic_Blood_Pressure']), float(data['Diastolic_Blood_Pressure']),
            float(data['Blood_Sugar']), float(data['CK_MB']), float(data['Troponin'])
        ]).reshape(1, -1)
        features_scaled = heart_attack_scaler.transform(features)
        prediction = heart_attack_model.predict(features_scaled)
        return jsonify({'prediction': int(prediction[0])})
    except ValueError as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
