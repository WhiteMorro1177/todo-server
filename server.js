'use strict';

const express = require("express");
const { models } = require("./db/models");


const app = express();
app.use(express.json())

const port = 5001;

app.get("/", (req, res) => {
    // load main page

    const htmlPath = "E:\\Programming\\js\\todo-frontend\\main.html";

    res.set("Content-Type", "text/html").status(200).sendFile(htmlPath);
    console.log("Main page loaded");
});

app.post("/todo", (req, res) => {
    // create new todo
});

app.patch("/todo/:id", (req, res) => {
    // update todo (status for example)
});

app.delete("/todo/:id", (req, res) => {
    // delete todo
});



app.listen(port, () => {
    // connect to db
    const { sequelize } = require("./db/models");
    sequelize.sync().then(sequelize => { console.log("Models syncronized. Now exist", sequelize.models); })

    // load data

    console.log("Server up and running on port", port);
});
