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
    //console.log(stdGivenArray)
   // console.log(stdGivenArray[3].firstName)
    for (var i = 0 ; i < stdGivenArray.length ; i++) {
        // checking if national ID is true
        if(stdGivenArray[i].nationalID == natId) {
            // pushing other info to "data" array
            //console.log(i)
            //console.log(stdGivenArray[i].lastName)
            data.push({
                'FirstName': req.body.nameField,
                'FamilyName': req.body.familyField,
                'NationalID': req.body.natIdField,
                'BirthDate': req.body.birthDateField,
                'FieldOfStudy': req.body.studyField,
                'EnteringYear': req.body.enterYearField
            })
            // saving data into "stdInfoDataBase.json" file
            fs.appendFileSync('stdInfoDataBase.json', JSON.stringify(data))
            // display a page to confirm the job is done
            res.render('thanks.hbs')
        }
            // display sorry page for fake information
        else if (i == stdGivenArray.length - 1) {
            res.render('sorry.hbs')
        }
    }
    
})



// local server host will run on port 3000
app.listen(3000)