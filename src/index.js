const express = require("express");

const routes = require('./routes')
const config = require("./config")
const setupViewEngine = require('./config/viewEngine');
const initDataBase = require('./config/databaseinit')


const app = express();
setupViewEngine(app)

app.use(express.static('./src/public'))
app.use(express.urlencoded({extended: false}))
app.use(routes)


initDataBase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running of port ${config.PORT}......`)))
    .catch((err) => console.error(err.message))
