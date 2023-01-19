const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mail = require('./sendMail');
const router = express.Router();
const path = require('path');
const http = require("http");
const credentials = require("./Database/key.json");
var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

require("dotenv").config();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set('/src', path.join(__dirname, '/src'));

app.use(
    cors({
        origin: "*",
    })
);


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

// routes

app.get("/api", (req, res) => {
    res.send("Hello Backend peeps");
})


const db = admin.firestore();


app.post('/api/sendOTP', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    
    const email = req.body.registerEmail;
    const name = req.body.registerName;
    const otp = req.body.OTP;
    // Need to create a temporary array for storing unverified data
    // Choose the user with his id and send him verification mail

    // await db.collection()
    var alreadyExist = false;
    const usersData = await db.collection("users_list").get();
    
    usersData.forEach(doc=>{
        if (email === doc.data().email){
            alreadyExist = true;
        }
    });
    
    if (alreadyExist){
        res.json({status: "Exists"});
    }
    else{
        mail.setConfiguration(email, name, otp);
        mail.sendMail(res);
    }
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

