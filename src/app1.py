from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Load the Strk trained model
model = joblib.load('src/voting_clf.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    features = np.array([
        data['gender'], data['age'], data['hypertension'],
        data['heart_disease'], data['ever_married'], data['Residence_type'],
        data['avg_glucose_level'], data['bmi'], data['smoking_status_formerly_smoked'],
        data['smoking_status_never_smoked'], data['smoking_status_smokes'], data['work_type_Govt_job'],
        data['work_type_Never_worked'], data['work_type_Private'], data['work_type_Self_employed'],
        data['work_type_children']
    ])
    features = features.reshape(1, -1)
    prediction = model.predict(features)
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
