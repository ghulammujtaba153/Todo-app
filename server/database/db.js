
import mongoose from "mongoose";
import dotenv  from 'dotenv';

 const connection=()=>{
    dotenv.config()
    const mongoUri=process.env.DB_URI;
    mongoose.connect(mongoUri, { useNewUrlParser: true })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
}

export default connection;