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
function OTPVerification(props) {

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
        if (props.user.OTP === enteredOTP) {
            setShowAlert(false);
            console.log(enteredOTP);
            setOtpdis(true);
            const user = await createUserWithEmailAndPassword(
                auth,
                props.user.email,   
                props.user.password
            ).then(async (userCredential) => {

                const userEventParticipationDetail = {
                    1: "Register",
                    2: "Register",
                    3: "Register",
                    4: "Register",
                    5: "Register",
                    6: "Register",
                    7: "Register",
                    8: "Register",
                    9: "Register",
                    10: "Register",
                    11: "Register",
                    12: "Register",
                    13: "Register",
                    14: "Register",
                    15: "Register",
                    16: "Register",
                    17: "Register"
                }

                const eventTeamMap = {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                    9: "",
                    10: "",
                    11: "",
                    12: "",
                    13: "",
                    14: "",
                    15: "",
                    16: "",
                    17: ""
                }

                const docRef = doc(db, "users_list", userCredential.user.uid);
                await setDoc(docRef, {
                    name: props.user.name,
                    contact: props.user.contact,
                    email: props.user.email,
                    paymentDetails: userEventParticipationDetail,
                    eventTeamMap: eventTeamMap
                })

                // After login or signUp, 
                // we can access name, uid, email of the user from anywhere

                const userDetails = {
                    name: props.user.name,
                    id: userCredential.user.uid,
                    email: userCredential.user.email,
                    contact: props.user.contact,
                    iiitbStudent: props.user.IIITBStudent
                }

                props.setUser(userDetails);
                // Add the new uid generated in the user json. 
                props.setLoggedInStatus(true);

                routeChange(`home`);

            }).catch((error) => {
                setMessage("User already exists");
                setShowAlert(true);
            });
        }
        else {
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
                    <img src={infilogo} className='authlogo'></img>
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

export default OTPVerification;
{/* <div class="form-group user-box">
    <input type="text" name="otp" id="otp" class="form-control" onChange={(event) => {
        setEnteredOTP(event.target.value);
    }} required="required"/>
    <label alt='otp' placeholder='Enter OTP'>OTP</label>
</div> */}

