import express  from "express";
import cors from 'cors';
import rutas from "./rutas/ruta.js"

const app=express();
app.use(express.json())
app.use(cors("http://localhost:3000"));
app.use(rutas)
app.listen(8000)
console.log("Escuchando en el puerto 8000");