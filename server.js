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
// using static css for our project
app.use(express.static('public'))
// routing to index page
app.get('/index',(req, res) => {
    res.render('index.hbs')
})
// routing to form page
app.get('/form', (req, res) => {
    res.render('form.hbs')
})
// making a local array
let data = []
// saving the income info to checking identity as a local variable
let natId = 0
// saving our mini-database to a local variable
let stdGiven = [], stdGivenArray = []
// checking identity and routing to thanks/sorry page
app.post('/thanks', (req, res) => {
    natId = req.body.natIdField
    //console.log(natId)
    stdGiven = fs.readFileSync('stdInfoGiven.json')
    stdGivenArray = JSON.parse(stdGiven)
    // chosing a flag to notice when the ID matches
    var iflag = false
    // searching
    for (var i = 0 ; i < stdGivenArray.length ; i++) {
        // checking if national ID is true
        if(stdGivenArray[i].nationalID == natId) {
            iflag = true
        }
    }
    if(iflag){
        data.push({
            'FirstName': req.body.nameField,
            'FamilyName': req.body.familyField,
            'NationalID': req.body.natIdField,
            'BirthDate': req.body.birthDateField,
            'FieldOfStudy': req.body.studyField,
            'EnteringYear': req.body.enterYearField
        })
        // saving data into the "stdInfoDataBase.json" file
        fs.appendFileSync('stdInfoDataBase.json', JSON.stringify(data))
        // display a page to confirm the job is done
        res.render('thanks.hbs')
    }
    else{
        res.render('sorry.hbs')
    }
})



// local server host will run on port 3000
app.listen(3000)