var express = require('express')
var path = require('path')
var hbs = require('express-hbs')

var index = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.engine('hbs', hbs.express4({
    defaultLayout: __dirname + '/views/layouts/main.hbs'
}))

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/', index);

app.set('port', (process.env.port || 3000))
app.listen(app.get('port'), function(){
    console.log('Server running on port ' + app.get('port'))
})