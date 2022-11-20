const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const helpers = require('./utils/helpers');
const routes = require('./controllers')

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.SESSION_SECRET, 
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }, 
    resave: false, 
    saveUninitialized: true, 
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
 
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// Setup route middleware
app.use(require('./controllers'));

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });
});