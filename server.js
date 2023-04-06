const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
// console.log("pathway: ", __dirname);
app.get("/main", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get("/info", (req, res) => {
  res.sendFile(`${__dirname}/public/info.html`);
  //   console.log("test: ", __dirname);
});

app.get("/contact", (req, res) => {
  res.sendFile(`${__dirname}/public/contact.html`);
});
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
