// AWS wants these imports
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// Import all needed routes
// ex: const resultsRouter = require("./routes/api/results");

// Express imports
const express = require("express");
const app = express();

// view engine setup
app.use(logger("dev"));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Define Routes
// ex: app.use("/api/results", resultsRouter);

app.use(express.static("web-app/build"));
app.get("*", function (req, res) {
   res.sendFile(path.resolve(__dirname, "web-app", "build", "index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
   next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get("env") === "development" ? err : {};

   // render the error page
   res.status(err.status || 500);
   res.render("error");
});

module.exports = app;
// Getting the server to listen is handled in bin/www
