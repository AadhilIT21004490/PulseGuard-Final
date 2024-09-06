from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Load the AF trained model
model = joblib.load('src/model_pickle.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    features = np.array([
        data['I'], data['II'], data['III'], data['aVF'], data['aVR'], data['aVL'],
        data['V1'], data['V2'], data['V3'], data['V4'], data['V5'], data['V6'],
        data['age'], data['sex'], data['height'], data['weight']
    ])
    features = features.reshape(1, -1)
    prediction = model.predict(features)
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
