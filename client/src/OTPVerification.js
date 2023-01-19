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


function OTPVerification(props) {

    const [enteredOTP, setEnteredOTP] = useState("");

    const auth = getAuth();

    function validateOTP(){
        if (props.user.OTP === enteredOTP){

            console.log(enteredOTP);

            const user = createUserWithEmailAndPassword(
                auth,
                props.user.email,
                props.user.password 
            ).then((userCredential) => {

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
                setDoc(docRef, {
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
            });
        }
        else{
        }
    }

    let navigate = useNavigate();
    const routeChange = (path) =>{ 
        // let path = `home`; 
        navigate(path);
    }

    return (
        <div className="signin">
            <div class="row">
                <div className="col-12 col-lg-6">
                    <div className="row">
                        <h2 class="form-title">Enter OTP</h2>
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">OTP</span>
                        <input type="text" name="otp"  id="otp" class="form-control"
                            aria-label="Name"
                             onChange={(event) => {
                                setEnteredOTP(event.target.value);
                            }} required="required"
                            aria-describedby="basic-addon1" />
                    </div>

                    <div class="form-group">
                        <btn onClick={validateOTP} name="otp-btn" id="otp-btn" class="btn registerbtn btn-dark" value="validate-otp">Validate</btn>
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

