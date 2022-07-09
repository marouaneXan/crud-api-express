const express = require("express");
const path = require("path");
var exphbs = require("express-handlebars");
const logger = require("./middleware/logger");
const app = express();

//Handle bars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//API members
app.use("/api/members", require("./routes/api/members"));

//set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server starting on the PORT " + PORT);
});
