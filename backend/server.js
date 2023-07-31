const express = require('express')
const app=express()
const bodyParser = require('body-parser')


//middle ware
app.use(bodyParser.json({ limit:"50mb"}))
app.use(bodyParser.urlencoded({extended: true, limit:"50mb"}))
  
//cors
