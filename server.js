var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
require('app-module-path').addPath(__dirname);
// create express app
var app = express();
var config = require('./config/config.js').get(process.env.NODE_ENV);
var sessionConfig = require('./config/session.config');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);

var db = mongoose.connect(config.DBHost,{
    useMongoClient: true
});
// app.use(session({
//     secret: sessionConfig.get('secret'),
//     resave: sessionConfig.get('resave'),
//     saveUninitialized: sessionConfig.get('saveUninitialized'),
//     store: new MongoStore({
//         mongooseConnection: db
//     })
// }));
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));
// parse application/json
app.use(bodyParser.json())

// serve static files
app.use(express.static('/static'))

app.set('view engine', 'ejs')

require('./app/routes/user.routes.js')(app);
require('./app/routes/wallet.routes.js')(app);
//require('./app/routes/contracts.js')(app);


// Configuring the database
var mongoose = require('mongoose');
var dbConfig = require('./config/dev.json');

mongoose.connect(dbConfig.DBHost,{
    useMongoClient: true
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

// define a simple route
// app.get('/', function(req, res) {
//     res.sendFile('/index.html', {root: './static'});
//     //res.sendFile(__dirname + "/static/index.html");
// });

app.get('/wallet_cr', function(req, res) {
    res.render('wallets.ejs', {root: './views'});
});
// GET route for reading data
app.get('/', function(req, res) {
    res.render('index.ejs', {root: './views'});
});
// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});
