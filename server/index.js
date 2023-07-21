import express, { json } from 'express';
import connection from './database/db.js'
import cors from 'cors'
import route from './route/route.js';


const app=express();

app.use(cors({
    origin:"http://localhost:3000"
}));


connection()


app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use('/',route)


app.listen(4001,()=>{console.log("server 4001")});