const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mail = require('./sendMail');
const router = express.Router();
const path = require('path');
const http = require("http");
const credentials = require("./database/key.json");
var admin = require("firebase-admin");
const otpGenerator = require('otp-generator');
const { reset } = require('nodemon');

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
    // console.log("this is body",req.body);
    const email = req.body.registerEmail;
    const name = req.body.registerName;
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    // Need to create a temporary array for storing unverified data
    // Choose the user with his id and send him verification mail

    console.log(otp);
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
        console.log("Wait...sending otp");
        // save otp in database with email as id
        await db.collection("otp_list").doc(email).set({
            otp: otp,
        })
        mail.setConfiguration(email, name, otp);
        mail.sendMail(res);
    }
})

app.post('/api/verifyOTP', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);

    const otp = req.body.enteredOTP;
    const email = req.body.registerEmail;

    const otpData = await db.collection("otp_list").doc(email).get();
    const otpFromDB = otpData.data().otp;
    console.log(otpFromDB);
    if (otpFromDB === otp){
        res.json({status: "success"});
    }
    else{
        res.json({status: "failed"});
    }
})

app.post("/api/changestatus",async(req,res) => {
    const paymentId = req.query.paymentId;
    console.log(paymentId);
    // fetch the user with paymentId from document = payments and change the status to processed
    // fetch payment object from payments collection
    const paymentData = await db.collection("payments").doc(paymentId).get();
    console.log(paymentData.data());

    if(paymentData.data() === null || paymentData.data() === undefined){
        res.json({status: "failed"});
    }else{
        await db.collection("payments").doc(paymentId).update({
            status: "processed",
        });

        if (paymentData.data().multi){
            const userID = paymentData.data().user;
            const eventID = paymentData.data().event_id;

            // fetch user docs in user collection
            const userData = await db.collection("users_list").doc(userID).get();
            const teamID = userData.data().eventTeamMap[eventID];

            // update team status in teams collection
            await db.collection("teams").doc(teamID).update({
                status: "processed",
            })
        }
        res.json({status: "success"});
    }

})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

