const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
    res.sendFile("./index.html", { root: __dirname })
});

app.listen(8080, () => {
    console.log("app listening");
});