var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// 解决跨域问题
// app.all的第一个参数传*就代表所有接口都走下面的规则，也可以写其他的形式，比如：
// "/users/*" : 就代表users下的接口都走下面的配置规则
app.all("*", function (req, res, next) {
  // 设置允许跨域的域名,如果传*代表允许任意域名跨域
  // 下面这里是配置了允许http://localhost:8000进行跨域请求
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", req.get("Origin")); // 添加这一行代码，代理配置不成功
  // 允许的header类型
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since"
  );
  // 跨域允许的请求方式
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE, PUT"
  );
  if (req.method.toLowerCase() == "options") {
    res.send(200); // 让options 尝试请求快速结束
  } else {
    next();
  }
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

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
