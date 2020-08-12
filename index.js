const express = require("express");

const app = express();

// For the CRUD example:
// app.get();
// app.post();
// app.put();
// app.delete();

app.get("/ecpay/chcekAlive", (req, res) => {
    res.send("Online !!");
});

app.get("/ecpay/apiForward", (req, res) => {
  res.send([1, 2]);
});

// Set the prot dynamically with environment.
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
