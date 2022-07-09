const express = require("express");
const path = require("path");
// const logger = require("./middleware/logger");
const app = express();

//init middlware
// app.use(logger)

//API members
app.use("/api/members", require("./routes/api/members"));

//body parser middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server starting on the PORT " + PORT);
});
