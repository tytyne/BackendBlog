import express from 'express';
const app=express()
import routes from './src/routes/index.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
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

app.use(express.json())
app.use(bodyParser.json())
// console.log(routes)
app.use('/api',routes)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const server = app.listen(PORT,()=>{
    console.log(`listen to port ${PORT}`)
})


export default server;

