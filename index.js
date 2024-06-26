const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res, next) => {
    res.sendFile("./index.html", { root: __dirname })
});

app.listen(8080, () => {
    console.log("app listening");
});