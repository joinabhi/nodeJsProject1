const express=require('express');
const app=express();
const cors=require('cors');

const bodyParser=require('body-parser');
const itemRoute=require('./route/item');
const sequelize=require('./util/database');

app.use(cors())
app.use(bodyParser.json());
app.use('/', itemRoute);


sequelize.sync().then(()=>{
  app.listen(4100,()=>{
    console.log(`your server is running on port 4100`)
  })
}).catch(error => console.log(error));