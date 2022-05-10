const express=require('express')
const app=express();
const {PORT}=require('./config/index')
const bodyParser = require('body-parser');
const port=PORT ||3000;
const JtoERoutes=require('./router/JtoE.route')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',JtoERoutes)

app.listen(port,()=>{
    console.log(`servere use port no ${port}`)
});