from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pickle
import numpy as np
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# ======================================================================================
# DB CONNECTION
# ======================================================================================

def create_db_connection():
    try:
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='AAss12345',
            database='pulse_guard'
        )
        return connection
    except Error as e:
        print(f"The error '{e}' occurred")
        return None
# ======================================================================================
# ======================================================================================

# Load models and scalers 
stroke_model = joblib.load('client/src/voting_clf.pkl')
heart_failure_model = joblib.load('client/src/ensemble_model.pkl')
af_model = joblib.load('client/src/model_pickle.pkl')
with open('client/src/scaler.pkl', 'rb') as f:
    heart_attack_scaler = pickle.load(f)
heart_attack_model = joblib.load('client/src/Best_ha_model.pkl')

@app.route('/stroke', methods=['POST'])
def predict_stroke():
    data = request.get_json(force=True)
    connection = create_db_connection()  # Create a new database connection
    cursor = connection.cursor()
    try:
        features = np.array([
            data['gender'], data['age'], data['hypertension'],
            data['heart_disease'], data['ever_married'], data['Residence_type'],
            data['avg_glucose_level'], data['bmi'], data['smoking_status_formerly_smoked'],
            data['smoking_status_never_smoked'], data['smoking_status_smokes'], data['work_type_Govt_job'],
            data['work_type_Never_worked'], data['work_type_Private'], data['work_type_Self_employed'],
            data['work_type_children']
        ]).reshape(1, -1)
        prediction = stroke_model.predict(features)
        prediction_value = int(prediction[0])
        
        insert_query = """INSERT INTO stroke_data (
            gender, age, hypertension, heart_disease, ever_married, residence_type,
            avg_glucose_level, bmi, smoking_status_formerly_smoked, smoking_status_never_smoked,
            smoking_status_smokes, work_type_govt_job, work_type_never_worked, work_type_private,
            work_type_self_employed, work_type_children, prediction)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
        
        record = (
            data['gender'], data['age'], data['hypertension'], data['heart_disease'], data['ever_married'], data['Residence_type'],
            data['avg_glucose_level'], data['bmi'], data['smoking_status_formerly_smoked'], data['smoking_status_never_smoked'],
            data['smoking_status_smokes'], data['work_type_Govt_job'], data['work_type_Never_worked'], data['work_type_Private'],
            data['work_type_Self_employed'], data['work_type_children'], prediction_value
        )

        cursor.execute(insert_query, record)
        connection.commit()
        return jsonify({'prediction': prediction_value})
    except ValueError as e :
        return jsonify({'error':str(e)}), 400
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

@app.route('/stroke/latest', methods=['GET'])
def get_latest_record():
    connection = create_db_connection()  # Create a new database connection
    cursor = connection.cursor(dictionary=True)
    try:
        # Query to fetch the latest record from the stroke_data table
        query = "SELECT * FROM stroke_data ORDER BY id DESC LIMIT 1"
        cursor.execute(query)
        latest_record = cursor.fetchone()  # Fetch the latest record

        if latest_record:
            return jsonify(latest_record)
        else:
            return jsonify({'message': 'No records found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

@app.route('/hf', methods=['POST'])
def predict_heart_failure():
    data = request.get_json(force=True)
    connection = create_db_connection()  # Create a new database connection
    cursor = connection.cursor()
    try:
        features = np.array([
            data['age'], data['anaemia'],
            data['creatinine_phosphokinase'], data['diabetes'],
            data['ejection_fraction'], data['high_blood_pressure'],
            data['platelets'], data['serum_creatinine'],
            data['serum_sodium'], data['sex'],
            data['smoking'], data['time']
        ]).reshape(1, -1)

        prediction = heart_failure_model.predict(features)
        prediction_value = int(prediction[0])

        insert_query = """INSERT INTO heart_failure_data (age, anaemia, creatinine_phosphokinase, diabetes, ejection_fraction, high_blood_pressure, platelets, serum_creatinine, serum_sodium, sex, smoking, time, prediction) 
             VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
        record = (
            data['age'], data['anaemia'],
            data['creatinine_phosphokinase'], data['diabetes'],
            data['ejection_fraction'], data['high_blood_pressure'],
            data['platelets'], data['serum_creatinine'],
            data['serum_sodium'], data['sex'],
            data['smoking'], data['time'], prediction_value
        )

        cursor.execute(insert_query, record)
        connection.commit()
        return jsonify({'prediction': prediction_value})
    except ValueError as e :
        return jsonify({'error':str(e)}), 400
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

@app.route('/atrial', methods=['POST'])
def predict_af():
    data = request.get_json(force=True)
    connection = create_db_connection()  # Create a new database connection
    cursor = connection.cursor()
    try:
        features = np.array([
        data['I'], data['II'], data['III'], data['aVF'], data['aVR'], data['aVL'],
        data['V1'], data['V2'], data['V3'], data['V4'], data['V5'], data['V6'],
        data['age'], data['sex'], data['height'], data['weight']
        ]).reshape(1, -1)
    
        prediction = af_model.predict(features)
        prediction_value = int(prediction[0])

        insert_query = """INSERT INTO af_data (I, II, III, aVF, aVR, aVL, V1, V2, V3, V4, V5, V6, age, sex, height, weight, prediction) 
             VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
        record = (
            data['I'], data['II'], data['III'], data['aVF'], data['aVR'], data['aVL'],
            data['V1'], data['V2'], data['V3'], data['V4'], data['V5'], data['V6'],
            data['age'], data['sex'], data['height'], data['weight'], prediction_value
        )

        cursor.execute(insert_query, record)
        connection.commit()
        return jsonify({'prediction': prediction_value})
    except ValueError as e :
        return jsonify({'error':str(e)}), 400
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
# ======================================================================================
# Heart Attack API
# ======================================================================================
# @app.route('/hattack', methods=['POST'])
# def predict_heart_attack():
#     data = request.get_json(force=True)
#     try:
#         features = np.array([
#             float(data['Age']), float(data['Gender']), float(data['Heart_Rate']),
#             float(data['Systolic_Blood_Pressure']), float(data['Diastolic_Blood_Pressure']),
#             float(data['Blood_Sugar']), float(data['CK_MB']), float(data['Troponin'])
#         ]).reshape(1, -1)
#         features_scaled = heart_attack_scaler.transform(features)
#         prediction = heart_attack_model.predict(features_scaled)
#         return jsonify({'prediction': int(prediction[0])})
#     except ValueError as e:
#         return jsonify({'error': str(e)}), 400
    
# ======================================================================================
# NEW API BELOW
# ======================================================================================
# Route to predict heart attack and store results
@app.route('/hattack', methods=['POST'])
def predict_heart_attack():
    data = request.get_json(force=True)
    connection = create_db_connection()  # Create a new database connection
    cursor = connection.cursor()
    try:
        features = np.array([
            float(data['Age']), float(data['Gender']), float(data['Heart_Rate']),
            float(data['Systolic_Blood_Pressure']), float(data['Diastolic_Blood_Pressure']),
            float(data['Blood_Sugar']), float(data['CK_MB']), float(data['Troponin'])
        ]).reshape(1, -1)
        
        features_scaled = heart_attack_scaler.transform(features)
        prediction = heart_attack_model.predict(features_scaled)
        prediction_value = int(prediction[0])
        
        # SQL to insert data
        insert_query = """
        INSERT INTO heart_attack_data (Age, Gender, Heart_Rate, Systolic_BP, Diastolic_BP, Blood_Sugar, CK_MB, Troponin, Prediction)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """
        record = (
            data['Age'], data['Gender'], data['Heart_Rate'], 
            data['Systolic_Blood_Pressure'], data['Diastolic_Blood_Pressure'],
            data['Blood_Sugar'], data['CK_MB'], data['Troponin'],
            prediction_value
        )
        
        cursor.execute(insert_query, record)
        connection.commit()
        return jsonify({'prediction': prediction_value})
    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
# ======================================================================================
# ======================================================================================

if __name__ == '__main__':
    app.run(debug=True)
