const express=require("express");
const curso =require("../models/curso_models");
const ruta =express.Router();


ruta.get('/', (req,res)=>{
res.json('Respuesta a peticion GET de cursos funcionando correctamente');   
 });

module.exports=ruta;

