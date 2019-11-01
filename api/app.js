'use strict';

const express = require('express');
var testDBRouter = require("./routes/testDB");
// Constants
const PORT = 9000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.use("/testDB", testDBRouter);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);