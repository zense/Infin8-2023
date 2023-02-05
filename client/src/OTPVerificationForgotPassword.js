import { useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase-config";
import { collection, doc, getDocs, addDoc, setDoc } from "firebase/firestore";
import './Auth.scss'
// import {"fa-solid fa-paper-plane-top" } from 'react-icons/fa'
// import { BsFillTelephoneFill, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import infilogo from './images/infilogoblack.svg';
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineWarning } from 'react-icons/ai'
import { Spinner } from "react-bootstrap";

function OTPVerificationForgotPassword(props) {

    const [otpdis, setOtpdis] = useState(false);
    const [enteredOTP, setEnteredOTP] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState("You are a moron!");
    const auth = getAuth();

    const AlertDialog = (props) => {
        return <div className="alertdiv">
            <div className="alertbox">
                <AiOutlineWarning size={25}/> {message}
            </div>
        </div>
    };

    async function validateOTP() {
        
        var publicURL = `https://infin8-backend.onrender.com/api/verifyOTPForgotPassword`;
        var testingURL = `http://localhost:${5000}/api/verifyOTPForgotPassword`;

        const result = await fetch(testingURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: props.user.email,
                enteredOTP: enteredOTP
            }),
        }).then((res) =>{
                console.log("printing")

            return res.json();
        }).catch(err => {
                console.log("printing")

        })

        if (result.status === "success") {
            setShowAlert(false);
            console.log(enteredOTP);
            setOtpdis(true);
            
            // Move to Enter New Password Page
            routeChange(`/enter-new-password`);

        }
        else{
            setMessage("Invalid OTP");
            setShowAlert(true);
        }
    }

    let navigate = useNavigate();
    const routeChange = (path) => {
        // let path = `home`; 
        navigate(path);
    }


    return (
        <div className="signin">
            <div class="row">
                <div className="col-12 col-lg-6">
                    <img src={infilogo} className='authlogo'
                        onClick={
                            ()=>{
                                navigate('/home');
                            }
                        }
                    >
                    </img>
                    <div className="row centerrow">
                        <h2 class="formtitle">Verify</h2>
                    </div>
                    <div className="row centerrow labelrow">
                        We have sent you an OTP on the email address you provided.<br />
                        Enter the same below:
                    </div>
                    <div class="input-group mb-3 centerrow mt-5">
                        <span class="input-group-text" id="basic-addon1"><BiTimeFive></BiTimeFive></span>
                        <input type="text" name="otp" id="otp" class="form-control"
                            aria-label="Name"
                            onChange={(event) => {
                                setEnteredOTP(event.target.value);
                            }} required="required"
                            aria-describedby="basic-addon1" />
                    </div>
                    {
                        showAlert ? 
                        <div className="form-group centerrow">
                            <AlertDialog></AlertDialog>
                        </div> : 
                        <></>
                    }
                    <div class="form-group centerrow mt-3">
                        <btn onClick={validateOTP} name="otp-btn" id="otp-btn" class="btn registerbtn btn-dark"
                        disabled = {otpdis} 
                        value="validate-otp">{
                            otpdis ?
                            <Spinner></Spinner>
                            : "Validate"
                        }</btn>
                    </div>
                </div>
                <div className="d-none d-lg-block col-lg-6">
                    <div className="signin-image"></div>
                </div>
            </div>
        </div>
    );
}

export default OTPVerificationForgotPassword;
{/* <div class="form-group user-box">
    <input type="text" name="otp" id="otp" class="form-control" onChange={(event) => {
        setEnteredOTP(event.target.value);
    }} required="required"/>
    <label alt='otp' placeholder='Enter OTP'>OTP</label>
</div> */}

