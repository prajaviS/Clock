const express = require('express')
const app = express()
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("index")
})
app.get('/timer', function (req, res) {
    res.render("timer")
})
app.get('/today', function (req, res) {
    res.render("today")
})

app.use(express.static('./public'));
app.listen(3000)


