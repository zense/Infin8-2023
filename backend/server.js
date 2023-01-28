const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mail = require('./sendMail');
const router = express.Router();
const path = require('path');
const http = require("http");
var admin = require("firebase-admin");
const otpGenerator = require('otp-generator');
const { reset } = require('nodemon');

const credentials = {
    type:process.env.type,
    project_id:process.env.project_id,
    private_key_id: process.env.private_key_id,
    client_email: process.env.client_email,
    client_id: process.env.client_id,
    auth_uri: process.env.auth_uri,
    token_uri: process.env.token_uri,
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.client_x509_cert_url,
    private_key: process.env.private_key
          ? process.env.private_key.replace(/\\n/gm, "\n")
          : undefined,
}

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
app.post("/api/rejectstatus", async(req,res) => {
    const paymentId = req.query.paymentId;
    console.log(paymentId);
    // fetch the user with paymentId from document = payments and change the status to processed
    // fetch payment object from payments collection
    const paymentData = await db.collection("payments").doc(paymentId).get();
    
    if(paymentData.data() === null || paymentData.data() === undefined){
        res.json({status: "failed"});
    }else{
        // delete from payments collection
        await db.collection("payments").doc(paymentId).delete();
        if(paymentData.data().multi){
            const userID = paymentData.data().user;
            const eventID = paymentData.data().event_id;

            // fetch user docs in user collection
            const userData = await db.collection("users_list").doc(userID).get();
            const teamID = userData.data().eventTeamMap[eventID];

            // delete team from teams collection
            await db.collection("teams").doc(teamID).delete();
        }
        res.json({status: "success"});
    }

})

// add contact no in teams collection
app.post("/api/addContactNoTeams", async(req,res) =>{
    // get all the docs from teams collection
    const teamsData = await db.collection("teams").get();
    teamsData.forEach(async doc => {
        // get the team leader id
        const teamLeaderID = doc.data().leaderID;
        // console.log(teamLeaderID);
        // get the team leader data from users_list collection
        const teamLeaderData = await db.collection("users_list").doc(teamLeaderID).get();
        // get the contact number of team leader
        const contactNo = teamLeaderData.data().contact;
        console.log(contactNo);
        // update the contact number in teams collection
        await db.collection("teams").doc(doc.id).update({
            contact: contactNo, 
        })
    })
    res.json({status: "success"});

})

app.post("/api/addContactNoPayments", async(req,res) => {
    const paymentsData = await db.collection("payments").get();
    paymentsData.forEach(async doc => {
        // get the user id
        const userID = doc.data().user;
        // get the user data from users_list collection
        const userData = await db.collection("users_list").doc(userID).get();
        // get the contact number of user
        const contactNo = userData.data().contact;
        console.log(contactNo);
        // update the contact number in payments collection
        await db.collection("payments").doc(doc.id).update({
            contact: contactNo,
        })
    })
    res.json({status: "success"});
})

app.post("/api/updateProcessStatusforIIITB", async(req,res) => {
    const paymentsData = await db.collection("teams").get();
    paymentsData.forEach(async doc => {
        // console.log(doc.id);
        // get the leaderID
        const leaderID = doc.data().leaderID;
        console.log(leaderID);
        // get the user data from users_list collection
        const userData = await db.collection("users_list").doc(leaderID).get();
        // if the user is from IIITB then update the status to processed
        if(userData.data() === null || userData.data() === undefined){
            console.log("no data");
        }
        else if(userData.data().email.includes("iiitb.ac.in")){
            await db.collection("teams").doc(doc.id).update({
                status: "processed",
            })
        }
    })
    res.json({status: "success"});
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

