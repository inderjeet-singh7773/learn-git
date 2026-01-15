// const fs = require("fs");

// console.log("Start reading file...");

// fs.readFile("example.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log("Error:", err.message);
//         return;
//     }
//     console.log("File Content:", data);
// });

// console.log("End of script");


const express = require("express");
const app = express();

app.use(express.json()); // body data read karne ke liye

// GET - Read
app.get("/users", (req, res) => {
  res.send("All Users Data");
});

// POST - Create
app.post("/users", (req, res) => {
  res.send("New User Created!");
});

// PUT - Update
app.put("/users/:id", (req, res) => {
  res.send(`User with ID ${req.params.id} Updated!`);
});

// DELETE - Remove
app.delete("/users/:id", (req, res) => {
  res.send(`User with ID ${req.params.id} Deleted!`);
});

// app.listen(3000, () => console.log("Server running..."));

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});