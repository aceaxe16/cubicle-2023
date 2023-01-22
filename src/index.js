const express = require("express");
const config = require("./config")
const app = express();
const handlebars = require('express-handlebars');

app.engine('hbs', handlebars.engine({
    extname: "hbs",
}));
app.set("view engine", 'hbs');
app.set('views', './src/views');

app.get("/", (req,res) => {
    res.render("home");
})

app.listen(config.PORT, () => console.log(`Server is running of port ${config.PORT}......`))