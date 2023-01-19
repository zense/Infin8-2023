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
import './Auth.scss'
import { FaUser } from 'react-icons/fa'
import { BsFillTelephoneFill, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'


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
            routeChange(`/otp-verification`);
        } 
=======
            routeChange(`otp-verification`);
        }
>>>>>>> 01caeebf85d12b222de7296e71c70b733dc87134
        else if (result.status === "Exists") {
            console.log("User already exists");
        }
        else if (result.status === "error") {
            console.log("Error encountered!");
        }
    }

    let navigate = useNavigate();

    const routeChange = (path) => {
        // let path = `home`; 
        navigate(path);
    }


    function generateOTP(numberOfDigits) {
        var max = Math.pow(10, (numberOfDigits)) - 1;
        return Math.floor(Math.random() * max);
    }

    const [show, setShow] = useState(false);

    var passComp = <>
        <span class="input-group-text" id="basic-addon1"><BsEyeFill
            id="togglePassword"
            onClick={() => {
                setShow(true);
            }} /></span>
        <input type="password" class="form-control"
            placeholder="Password" aria-label="Password"
            id="your_password" onChange={(event) => {
                setRegisterPassword(event.target.value);
            }} required="required"
            aria-describedby="basic-addon1" />
    </>
    if (show) {
        passComp = <>
            <span class="input-group-text" id="basic-addon1"><BsEyeSlashFill
                id="togglePassword"
                onClick={() => {
                    setShow(false);
                }} /></span>
            <input type="text" class="form-control"
                placeholder="Password" aria-label="Password"
                id="your_password" onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }} required="required"
                aria-describedby="basic-addon1" />
        </>
    }

    const [conf, setConf] = useState(false);
    var confComp = <>
        <span
            class="input-group-text"
            onClick={() => {
                setConf(true);
            }}
        ><BsEyeFill/></span>
        <input type="password" class="form-control"
            placeholder="Confirm Password" aria-label="Confirm Password"
            id="repeat_password" onChange={(event) => {
                setRegisterRePassword(event.target.value);

                if (event.target.value !== registerPassword) {
                    event.target.classList.add("focus");
                }
                else {
                    event.target.classList.remove("focus");
                }
            }} required="required"
            aria-describedby="basic-addon1" />
    </>
    if (conf) {
        confComp = <>
            <span
                class="input-group-text"
                onClick={() => {
                    setConf(false);
                }}
            ><BsEyeSlashFill /></span>
            <input type="text" class="form-control"
                placeholder="Confirm Password" aria-label="Confirm Password"
                id="repeat_password" onChange={(event) => {
                    setRegisterRePassword(event.target.value);

                    if (event.target.value !== registerPassword) {
                        event.target.classList.add("focus");
                    }
                    else {
                        event.target.classList.remove("focus");
                    }
                }} required="required"
                aria-describedby="basic-addon1" />
        </>
    }


<<<<<<< HEAD
    const [show, setShow] = useState(false);

    var passComp = <>
        <span class="input-group-text" id="basic-addon1"><BsEyeFill
            id="togglePassword"
            onClick={() => {
                setShow(true);
            }} /></span>
        <input type="password" class="form-control"
            placeholder="Password" aria-label="Password"
            id="your_password" onChange={(event) => {
                setRegisterPassword(event.target.value);
            }} required="required"
            aria-describedby="basic-addon1" />
    </>
    if (show) {
        passComp = <>
            <span class="input-group-text" id="basic-addon1"><BsEyeSlashFill
                id="togglePassword"
                onClick={() => {
                    setShow(false);
                }} /></span>
            <input type="text" class="form-control"
                placeholder="Password" aria-label="Password"
                id="your_password" onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }} required="required"
                aria-describedby="basic-addon1" />
        </>
    }

    const [conf, setConf] = useState(false);
    var confComp = <>
        <span
            class="input-group-text"
            onClick={() => {
                setConf(true);
            }}
        ><BsEyeFill/></span>
        <input type="password" class="form-control"
            placeholder="Confirm Password" aria-label="Confirm Password"
            id="repeat_password" onChange={(event) => {
                setRegisterRePassword(event.target.value);

                if (event.target.value !== registerPassword) {
                    event.target.classList.add("focus");
                }
                else {
                    event.target.classList.remove("focus");
                }
            }} required="required"
            aria-describedby="basic-addon1" />
    </>
    if (conf) {
        confComp = <>
            <span
                class="input-group-text"
                onClick={() => {
                    setConf(false);
                }}
            ><BsEyeSlashFill /></span>
            <input type="text" class="form-control"
                placeholder="Confirm Password" aria-label="Confirm Password"
                id="repeat_password" onChange={(event) => {
                    setRegisterRePassword(event.target.value);

                    if (event.target.value !== registerPassword) {
                        event.target.classList.add("focus");
                    }
                    else {
                        event.target.classList.remove("focus");
                    }
                }} required="required"
                aria-describedby="basic-addon1" />
        </>
    }



  return (
        <div className="signin">
            <div class="row">
                <div className="col-12 col-lg-6">
                    <div className="row">
                        <h2 class="form-title">Sign up</h2>
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><FaUser /></span>
                        <input type="text" class="form-control"
                            placeholder="Name" aria-label="Name"
                            id="your_name" onChange={(event) => {
                                setRegisterName(event.target.value);
                            }} required="required"
                            aria-describedby="basic-addon1" />
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control"
                            id="your_email"
                            placeholder="Email" aria-label="Email"
                            onChange={(event) => {
                                setRegisterEmail(event.target.value);
                            }}
                            required="required"
                            aria-describedby="basic-addon1" />
                    </div>

=======
    return (
        <div className="signin">
            <div class="row">
                <div className="col-12 col-lg-6">
                    <div className="row">
                        <h2 class="form-title">Sign up</h2>
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><FaUser /></span>
                        <input type="text" class="form-control"
                            placeholder="Name" aria-label="Name"
                            id="your_name" onChange={(event) => {
                                setRegisterName(event.target.value);
                            }} required="required"
                            aria-describedby="basic-addon1" />
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control"
                            id="your_email"
                            placeholder="Email" aria-label="Email"
                            onChange={(event) => {
                                setRegisterEmail(event.target.value);
                            }}
                            required="required"
                            aria-describedby="basic-addon1" />
                    </div>

>>>>>>> 01caeebf85d12b222de7296e71c70b733dc87134
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><BsFillTelephoneFill /></span>
                        <input type="text" class="form-control"
                            placeholder="Contact" aria-label="Contact"
                            id="your_contact" onChange={(event) => {
                                setRegisterContact(event.target.value);
                            }} required="required"
                            aria-describedby="basic-addon1" />
                    </div>
                    {/* password */}
                    <div class="input-group mb-3">
                        {passComp}
                    </div>


                    <div class="input-group mb-3">
                        {confComp}
                    </div>

                    {/* Name */}
                    {/* <div class="signin-form login-box">
                        <div class="form-group user-box">
                            <input type="text" name="your_name" class="form-control" id="your_name" onChange={(event) => {
                                setRegisterName(event.target.value);
                            }} required="required" />
                            <label alt='Name' placeholder='Type Your Name'>Username</label>
                        </div> */}

                    {/* Email */}
                    {/* <div class="form-group user-box">
                                <input type="email" name="your_email" class="form-control" id="your_email" onChange={(event) => {
                                    setRegisterEmail(event.target.value);
                                }} required="required" />
                                <label alt='Email' placeholder='Type Your Email'>Email</label>
                            </div> */}

                    {/* Contact */}
                    {/* <div class="form-group user-box">
                                <input type="number" name="your_contact" class="form-control" id="your_contact" onChange={(event) => {
                                    setRegisterContact(event.target.value);
                                }} required="required" />
                                <label alt='Contact' placeholder='Contact'>Contact</label>
                            </div> */}

                    {/* Password */}
                    {/* <div class="form-group user-box">
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
                            </div> */}

                    {/* Re-Password */}
                    {/* <div class="form-group user-box">
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
                            </div> */}

                    <div class="form-group">
                        <input type="checkbox" name="iiitb-student" id="iiitb-student"
                            className="agree-term" onChange={(event) => {
                                toggleIIITBStudent(!IIITBStudent);
                            }} />
                        <label for="iiitb-student" class="label-agree-term"><span><span></span></span>I am from IIITB</label>
                    </div>

                    <div class="form-group">
                        {(registerPassword === registerRePassword && ((IIITBStudent && (registerEmail.slice(-12) === "@iiitb.ac.in")) || (!IIITBStudent && (registerEmail.slice(-12) !== "@iiitb.ac.in"))))
                            ? <button onClick={register} name="signup" id="signup" className="btn registerbtn btn-dark" value="signup">Register</button>
                            : <button onClick={register} name="signup" id="signup" class="btn btn-dark registerbtn" value="signup" disabled>Register</button>}
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

                    {/* to be uncommented */}
                    {/* </div> */}
                </div>
                <div className="d-none d-lg-block col-lg-6">
                    <div className="signin-image"></div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;