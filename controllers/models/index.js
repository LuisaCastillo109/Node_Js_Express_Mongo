const express =require("express");
const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost:27017/userscoursesdb',{userNewUrlParser: true, useUnifiedTopology:true})

  .then(()=> console.log("Conectado a MongoDB..."))
  .catch(err => console.log("No se pudo conectar con MongoDB..",err));

  const app=express();
  app.use(express.json());
  app.use(express.urlencoded({extended:true}));

  const port =process.env.PORT || 3003;
  app.listen(port,()=>{
    console.log('Api rest esta ejecutandose');
  })