const express = require('express');
const path = require("path");
// const logger = require("./middleware/logger");
const app = express();

//init middlware
// app.use(logger)

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//API members
app.use("/api/members", require("./routes/api/members"));

//set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server starting on the PORT " + PORT);
});
