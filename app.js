express express = require("express");
const app = expressss();

app.get("/", (req, res) => {
  res.send("Hello DevOps Internship 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
