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
app.use(express.static('public'))
//
app.get('/index',(req, res) => {
    res.render('index.hbs')
})
app.get('/form', (req, res) => {
    res.render('form.hbs')
})










app.listen(3000)