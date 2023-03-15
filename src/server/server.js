const express = require("express");
const router = require("../routes/routes");
const cors = require("cors");
const server = express();

server.use(express.json());

server.use(cors({ origin: true, credentials: true }));

server.use("/api", router);

module.exports = server;
