import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import usersRouter from "./src/routes/users.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const mongodb = process.env.MONGODB_URL;

// Conexion con la base de datos utilizando la libreria mongoose
mongoose.connect(mongodb).then(()=>{
    console.log("Conexión exitosa con la base de datos");
    app.listen(port, ()=>{
        console.log(`Servidor corriendo en el puerto ${port}`);
    });
}).catch((error)=> console.log(error));

// Esquema de usuario
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

// Creando el modelo de usuario
const userModel = mongoose.model("users", userSchema)

// Realizando peticion get de usuarios
app.get("/users", async(req, res)=>{
     const userData = await userModel.find();
     res.json(userData);
});

app.post("/users", async(req, res)=>{
    const newUser = new userModel();
    newUser.nombre = req.nombre
    newUser.apellido = req.apellido
    newUser.correo = req.correo
    newUser.ciudad = req.ciudad
    newUser.pais = req.pais
    newUser.salario = req.salario
    newUser.edad = req.edad
    newUser.altura = req.altura
    newUser.peso = req.peso

    newUser.save().then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.json(error);
    });
});

// Realizando peticion get de usuarios pero con el ORM prisma
app.use("/api", usersRouter)