const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const path = require("path");

const { cardsRouter, readingsRouter, usersRouter } = require("./routes");

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(cookieParser());
app.use(logger("dev"));

app.use("/cards", cardsRouter);
app.use("/readings", readingsRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});

module.exports = app;
