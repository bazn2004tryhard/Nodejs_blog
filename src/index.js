const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars"); // Import đúng cách
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
); // Khởi tạo engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "sources/views")); // Đường dẫn thư mục views

app.get("/", (req, res) => {
  res.render("home"); // Render file home.handlebars
});

app.get("/news", (req, res) => {
  res.render("news"); // Render file news.handlebars
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
