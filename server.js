"use strict"

const http = require("http")
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const api = require("./api");
const PORT = 3000;

let app;

morgan.token("req-headers", function(req, res){
    return JSON.stringify(req.headers);
});

async function init() {
    app = express();

    app.use(morgan(":method :url :status - :req-headers - :response-time ms"));
    app.use(cors());

    app.use(
        bodyParser.urlencoded({
            extended: true
        })
    );
    app.use(bodyParser.json());
    app.use("/smarthome", api)
    const server = http.createServer(app);

    server.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
    server.on("error", (e) => console.error("Error", e));
}

init();

module.exports = app;