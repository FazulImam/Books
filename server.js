const express = require("express");
const env = require("dotenv");

env.config({ path: "./config/config.env" });

const app = express();

const port = process.env.PORT || 5000;

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



