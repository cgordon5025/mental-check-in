const express = require('express');
const seedAll = require('./seeds/index')
const exphb = require('express-handlebars')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const path = require('path')
const { strict } = require('assert')

const routes = require('./controllers')
const sequelize = require('./config/connection')
// const helpers = require('./utils/helpers')
const { setDefaultResultOrder } = require('dns');

const app = express();
const PORT = process.env.PORT || 3001

const sess = {
    secret: "super duper secret",
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict'
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
}

app.use(session(sess))

const hbs = exphb.create({})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(routes)

// app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: true }).then(async () => {
    await seedAll()
    await app.listen(PORT, () => {
        console.log(`App Listening on port ${PORT}`)
    });
})

