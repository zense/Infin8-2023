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


function OTPVerification(props) {

    const [enteredOTP, setEnteredOTP] = useState("");

    const auth = getAuth();

    function validateOTP(){
        console.log(enteredOTP);
        console.log(props.user.OTP);
        if (props.user.OTP === enteredOTP){
            const user = createUserWithEmailAndPassword(
                auth,
                props.user.email,
                props.user.password 
            ).then((userCredential) => {

                const docRef = doc(db, "users_list", userCredential.user.uid);
                setDoc(docRef, {
                    name: props.user.name,
                    contact: props.user.contact,
                    email: props.user.email,
                    baseFeePaid: false
                })

                // After login or signUp, 
                // we can access name, uid, email of the user from anywhere

                const userDetails = {
                    name: props.user.name,
                    id: userCredential.user.uid,
                    email: userCredential.user.email
                }
    
                props.setUser(userDetails);
                // Add the new uid generated in the user json. 
                props.setLoggedInStatus(true);
            
                routeChange(`home`);

            }).catch((error) => {
                console.log(error.message);
            });
        }
        else{
            console.log("Wrong OTP");
        }
    }

    let navigate = useNavigate();
    const routeChange = (path) =>{ 
        // let path = `home`; 
        navigate(path);
    }

    return (
        <div>
            {/* <section class="sign-in"> */}
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image"></div>

                    <h2 class="form-title">Sign In</h2>
                    <div class="signin-form login-box">

                        <div class="form-group user-box">
                            {/* <label for="your_email"><i class=""></i></label> */}
                            <input type="text" name="otp" id="otp" class="form-control" onChange={(event) => {
                                setEnteredOTP(event.target.value);
                            }} required="required"/>
                            <label alt='otp' placeholder='Enter OTP'>OTP</label>
                        </div>

                        <div class="form-group">
                            <btn onClick={validateOTP} name="otp-btn" id="otp-btn" class="btn btn-primary" value="validate-otp">Validate</btn>
                        </div>
                        {/* <div class="form-group">
                            <btn onClick={goToRegister} name="goToRegister" id="goToRegister" class="btn btn-primary" value="Don't have an account? Sign Up">Register</btn> 
                        </div> */}
                      
                        {/* <div class="social-login">
                                <span class="social-label">Or login with</span>
                                <ul class="socials">
                                    <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                    <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                                </ul>
                            </div> */}
                    </div>
                </div>
            </div>
            {/* </section> */}
        </div>
    );
}

export default OTPVerification;