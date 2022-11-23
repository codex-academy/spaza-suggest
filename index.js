const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const SpazaSuggest = require('./spaza-suggest');
const SpazaRoutes = require('./spaza_route.js');


const pgPromise = require("pg-promise")
const pgp = pgPromise({})

// SSL connection
let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}

// which db connection to use
const connectionString = process.env.DATABASE_URL || 'postgresql://zuggs:suggest123@localhost:5432/spaza_suggest';

const db = pgp({
    connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});

const spaza = SpazaSuggest(db)
const spazaRoute = SpazaRoutes(spaza)
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
 app.use(bodyParser.json());

 app.use(session({
    secret: "my spaza secret",
    cookie: {
        maxAge: 1000 * 36000
      },
    resave: false,
    saveUninitialized: true
}));

 app.use(flash());

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', spazaRoute.displayRegPage);
app.post('/', spazaRoute.addUser);




const PORT = process.env.PORT || 3008

app.listen(PORT, function() {
    console.log('App started at port:', PORT)

})