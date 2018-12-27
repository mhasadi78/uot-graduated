console.log(
    'This is a temprary program \n \n App is runnig ... \n \n .json file created'
    )

const fs = require('fs')
// objects~
var std1, std2, std3, std4, std5

std1 = {
    'firstName' : 'Hassan',
    'lastName' : 'Abdi',
    'nationalID' : 156237001
}

std2 = {
    'firstName' : 'Ali',
    'lastName' : 'Zolfi',
    'nationalID' : 156237354
}
std3 = {
    'firstName' : 'Mehran',
    'lastName' : 'Latifi',
    'nationalID' : 156237332
}
std4 = {
    'firstName' : 'Arman',
    'lastName' : 'Zoormand',
    'nationalID' : 156237857
}
std5 = {
    'firstName' : 'Milad',
    'lastName' : 'Ganji',
    'nationalID' : 156237325
}
// put objects into an array
var stdInfo = [std1, std2, std3, std4, std5]
// making json file
fs.writeFileSync('stdInfoGiven.json', JSON.stringify(stdInfo))
