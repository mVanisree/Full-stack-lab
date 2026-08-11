const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/testDB")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(3000, () => {
    console.log("Server running");
});