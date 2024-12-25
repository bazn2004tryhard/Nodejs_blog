const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars"); // Import đúng cách
const app = express();
const port = 3000;

const route = require("./routes/index.route");
const db = require("./config/db");

//connect to db

db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
); // Khởi tạo engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "sources", "views")); // Đường dẫn thư mục views

// routes init khoiwr taoj tuyến đường
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
