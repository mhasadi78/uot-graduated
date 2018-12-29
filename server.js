console.log('server is runnig');
// import required packages
const fs = require('fs');
const hbs = require('hbs');
const express = require('express')
const bodyParser = require('body-parser')
var app = express()
// using hbs for view (appearance of program)
app.set('view engine', 'hbs')
// 
app.use(bodyParser.urlencoded({extended : true}))
//
app.get('/index',(req, res) => {
    res.render('index.hbs')
})











app.listen(3000)