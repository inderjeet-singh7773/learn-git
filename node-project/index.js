const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.get("/", (req, res) => {
  // res.send("login page");
  res.sendFile(path.join(__dirname, "login.html"));
});
app.get("/form", (req, res) => {
  // res.send("About Page");
  res.sendFile(path.join(__dirname, "page.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
