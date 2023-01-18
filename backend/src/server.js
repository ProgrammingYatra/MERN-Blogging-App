require('dotenv').config()
const app=require("./app");
const connectDatabse = require('./config/db');

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

//Connection Database
connectDatabse()

app.listen(process.env.PORT, function () {
  console.log("Express app running on port " + (process.env.PORT));
});