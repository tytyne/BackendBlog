import express from 'express';
const app=express()
import routes from './src/routes/index.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import ejs from 'ejs'
import {dirname}from 'path'
import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
import serveStatic from 'serve-static'
import config from 'config'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './src/swagger.json'

// swaggerDocument = require('./src/swagger.json');
const   PORT=process.env.PORT||4000;

app.get('/',(req,res)=>{

    res.send('trying')
})


if (!config.get('PrivateKey')) {
  console.error('FATAL ERROR: PrivateKey is not defined.');
  process.exit(1);
}


var MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost:27017/blog";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
};
mongoose.connect(MONGODB_URI,options)



mongoose.connection.on("error", err => {
  console.log("err", err)
})

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

app.engine("html", ejs.renderFile);

app.set("view engine", "html");
app.set("views", path.join(__dirname, "public"));
app.use(serveStatic(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));


app.use("/css", express.static("public/css"));
app.use("/js", express.static("public/js"));
app.use("/assets", express.static("public/assets"));


//showing landing page
app.get("/home",(req,res)=>{
  return res.render('index.html')})
 //showing article page
app.get("/article",(req,res)=>{
  return res.render('article.html')}) 
  // all articles
  app.get("/articles",(req,res)=>{
    return res.render('all.html')}) 
    app.get("/users",(req,res)=>{
      return res.render('userdashboard.html')}) 
//showing registration page
app.get("/register",(req,res)=>{
  return res.render('registration.html')})
//showing login page
app.get("/login",(req,res)=>{
  return res.render('login.html')
})

app.get("/queries",(req,res)=>{
  return res.render('queries.html')
})
app.use(express.json())
app.use(bodyParser.json())
// console.log(routes)
app.use('/api',routes)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const server = app.listen(PORT,()=>{
    console.log(`listen to port ${PORT}`)
})


export default server;

