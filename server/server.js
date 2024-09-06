import express from 'express';
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pulse_guard'
})

app.get('/', (req,res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) =>{
        if(err) return res.json({Message:"Error inside server"});
        return res.json(result)
    })
})

// NEED TO CHECK THIS API
// NEED TO CHECK THIS API
// NEED TO CHECK THIS API
app.post('/hattack', (req, res) =>{
    const sql = "INSERT INTO heart_attack (`Age`,`Gender`,`Heart_Rate`,`Systolic_Blood_Pressure`,`Diastolic_Blood_Pressure`,`Blood_Suger`,`CK_MB`,`Troponin`) VALUES (?)";
    //values changed to formData
    const formData = [
        req.body.Age,
        req.body.Gender,
        req.body.Heart_Rate,
        req.body.Systolic_Blood_Pressure,
        req.body.Diastolic_Blood_Pressure,
        req.body.Blood_Suger,
        req.body.CK_MB,
        req.body.Troponin
    ]
    //values changed to formData
    db.query(sql, [formData], (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})

app.listen(8081, ()=>{
    console.log('Shelby, server is running on port 8081');
})