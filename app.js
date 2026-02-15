const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Docker + Jenkins 🚀");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});

const app = expressss();

app.get("/", (req, res) => {
  res.send("Hello DevOps Internship 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
