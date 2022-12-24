const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();

// middleware
app.use(cors());
app.use(bodyParser.json());

// routes

app.get("/", (req,res) => {
    res.send("Hello Backend peeps")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

