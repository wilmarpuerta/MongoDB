import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const mongodb = process.env.MONGODB_URL;

mongoose.connect(mongodb).then(()=>{
    console.log("Conexión exitosa con la base de datos");
    app.listen(port, ()=>{
        console.log(`Servidor corriendo en el puerto ${port}`);
    });
}).catch((error)=> console.log(error));

const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    ciudad: String,
    pais: String,
    salario: Number,
    edad: Number,
    altura: Number,
    peso: Number,
});

const userModel = mongoose.model("users", userSchema)

app.get("/users", async(req, res)=>{
     const userData = await userModel.find();
     res.json(userData);
});