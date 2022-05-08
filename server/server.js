const express = require("express");

const app = express();
app.use(express.json());

app.get("*", (req, res, next) => {
  req.user = { username: "Nick", email: "nick@gmail.com" };

  next();
});

app.get("/", (req, res, next) => {
  res.status(200).json({
    success: true,
    body: req.user,
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
