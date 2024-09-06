import express from 'express';
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());

app.listen(8081, ()=>{
    console.log('Shelby, server is running on port 8081');
})