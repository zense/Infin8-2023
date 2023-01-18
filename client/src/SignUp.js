import { useState, useEffect } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink
} from "firebase/auth";
import { db } from "./firebase-config";
import { collection, doc, getDocs, addDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


function SignUp(props) {

    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerContact, setRegisterContact] = useState(0);
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerRePassword, setRegisterRePassword] = useState("");
    const [IIITBStudent, toggleIIITBStudent] = useState(false);

    const auth = getAuth();

    const register = async () => {
        const PORT = process.env.PORT || 5000;
        
        console.log("Before OTP");

        var url = `http://localhost:${PORT}/sendOTP`;
        
        // generateOTP(n) generates OTP of length n
        var OTP = generateOTP(4).toString(10);
        console.log(OTP);
        const result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                registerEmail,
                registerName,
                OTP
            }),
        }).then((res) => res.json());
        
        if (result.status === "ok") {

            var userDetails = {
                name: registerName,
                email: registerEmail,
                contact: registerContact,
                IIITBStudent: IIITBStudent,
                password: registerPassword,
                OTP: OTP
            }

            console.log("After OTP");

            props.setUser(userDetails);
            routeChange(`home`);
        } 
        else if (result.status === "Exists") {
            console.log("User already exists");
        }
        else if (result.status === "error"){
            console.log("Error encountered!");
        }
    }

    let navigate = useNavigate(); 
    
    const routeChange = (path) =>{ 
        // let path = `home`; 
        navigate(path);
    }


    function generateOTP(numberOfDigits){
        var max = Math.pow(10, (numberOfDigits))-1;
        return Math.floor(Math.random()*max);
    }


    return (
        <div>
            {/* <section class="sign-in"> */}
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image"></div>

                    <h2 class="form-title">Sign up</h2>

                    <div class="signin-form login-box">

                        {/* Name */}
                        <div class="form-group user-box">
                            <input type="text" name="your_name" class="form-control" id="your_name" onChange={(event) => {
                                setRegisterName(event.target.value);
                            }} required="required" />
                            <label alt='Name' placeholder='Type Your Name'>Username</label>
                        </div>

                        {/* Email */}
                        <div class="form-group user-box">
                            <input type="email" name="your_email" class="form-control" id="your_email" onChange={(event) => {
                                setRegisterEmail(event.target.value);
                            }} required="required" />
                            <label alt='Email' placeholder='Type Your Email'>Email</label>
                        </div>

                        {/* Contact */}
                        <div class="form-group user-box">
                            <input type="number" name="your_contact" class="form-control" id="your_contact" onChange={(event) => {
                                setRegisterContact(event.target.value);
                            }} required="required" />
                            <label alt='Contact' placeholder='Contact'>Contact</label>
                        </div>

                        {/* Password */}
                        <div class="form-group user-box">
                            <input type="password" name="your_password" class="form-control" id="your_password" onChange={(event) => {
                                setRegisterPassword(event.target.value);
                            }} required="required" />
                            <label alt='Password' placeholder='Password'>Password</label>
                            <i class="far fa-eye eye-position" id="togglePassword" onClick={() => {

                                if (document.getElementById("togglePassword").classList.contains('fa-eye')) {
                                    document.getElementById("togglePassword").classList.replace('fa-eye', 'fa-eye-slash');
                                }
                                else {
                                    document.getElementById("togglePassword").classList.replace('fa-eye-slash', 'fa-eye');
                                }

                                if (document.getElementById("your_password").type === "password") {
                                    document.getElementById("your_password").type = "text";
                                }
                                else {
                                    document.getElementById("your_password").type = "password";
                                }
                            }}></i>
                        </div>

                        {/* Re-Password */}
                        <div class="form-group user-box">
                            <input type="password" name="repeat_password" class="form-control" id="repeat_password" onChange={(event) => {
                                setRegisterRePassword(event.target.value);

                                if (event.target.value !== registerPassword) {
                                    event.target.classList.add("focus");
                                }
                                else {
                                    event.target.classList.remove("focus");
                                }
                            }} required="required" />
                            <label alt='RePassword' placeholder='Confirm Password'>Confirm Password</label>
                            <i class="far fa-eye eye-position" id="reTogglePassword" onClick={() => {

                                if (document.getElementById("reTogglePassword").classList.contains('fa-eye')) {
                                    document.getElementById("reTogglePassword").classList.replace('fa-eye', 'fa-eye-slash');
                                }
                                else {
                                    document.getElementById("reTogglePassword").classList.replace('fa-eye-slash', 'fa-eye');
                                }

                                if (document.getElementById("repeat_password").type === "password") {
                                    document.getElementById("repeat_password").type = "text";
                                }
                                else {
                                    document.getElementById("repeat_password").type = "password";
                                }
                            }}></i>
                        </div>

                        <div class="form-group">
                            <input type="checkbox" name="iiitb-student" id="iiitb-student" class="agree-term" onChange={(event) => {
                                toggleIIITBStudent(!IIITBStudent);
                            }} />
                            <label for="iiitb-student" class="label-agree-term"><span><span></span></span>I am a IIITB student</label>
                        </div>

                        <div class="form-group">
                            {(registerPassword === registerRePassword && ((IIITBStudent && (registerEmail.slice(-12) === "@iiitb.ac.in")) || (!IIITBStudent && (registerEmail.slice(-12) !== "@iiitb.ac.in"))))
                                ? <button onClick={register} name="signup" id="signup" class="btn btn-primary" value="signup">Register</button>
                                : <button onClick={register} name="signup" id="signup" class="btn btn-secondary" value="signup" disabled>Register</button>}
                        </div>
                        {/* <div class="form-group">
                            <input onClick={getData} name="getData" id="getData" class="btn btn-primary" value="getData" />
                        </div> */}
                        {/* </form> */}
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

export default SignUp;