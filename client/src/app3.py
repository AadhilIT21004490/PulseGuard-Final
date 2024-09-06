from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the scaler and the HA trained model
with open('src/scaler.pkl', 'rb') as f:
    scaler = pickle.load(f)

model = joblib.load('src/Best_ha_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    
    # Extract and convert features
    try:
        features = np.array([
            float(data['Age']), float(data['Gender']), float(data['Heart_Rate']),
            float(data['Systolic_Blood_Pressure']), float(data['Diastolic_Blood_Pressure']),
            float(data['Blood_Sugar']), float(data['CK_MB']), float(data['Troponin'])
        ]).reshape(1, -1)
        
        # Scale the features
        features_scaled = scaler.transform(features)
        
        # Make prediction
        prediction = model.predict(features_scaled)
        
        print('Received Data:', data)
        print('Predicted:', prediction)
        
        return jsonify({'prediction': int(prediction[0])})
    except ValueError as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
