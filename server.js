const express = require("express");
const env = require("dotenv");

const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errors");
const booksRoute = require("./routes/books");

env.config({ path: "./config/config.env" });

const app = express();

app.use(connectDB);

const port = process.env.PORT || 5000;

app.use('/api/v1/books',booksRoute);

app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(
    `The Server is running on port ${port} in ${process.env.NODE_ENV} mode`
  );
});

const shutDown = () => {
  server.close(() => {
    process.exit(1);
  });
};

process.on("SIGTERM", shutDown);
process.on("SIGINT", shutDown);
process.on("unhandledRejection", shutDown);
process.on("uncaughtException", shutDown);
