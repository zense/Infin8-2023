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
import { BiRupee } from 'react-icons/bi'
import { db } from "./firebase-config";
import { collection, doc, getDocs, addDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import './Auth.scss'
import { FaLessThanEqual, FaUser } from 'react-icons/fa'
import { BsFillTelephoneFill, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import infilogo from './images/infilogoblack.svg';
import './components/Alert/Alert.scss';
import { AiOutlineWarning } from 'react-icons/ai'
import { Spinner } from 'react-bootstrap'

function SignUp(props) {

    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerContact, setRegisterContact] = useState(0);
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerRePassword, setRegisterRePassword] = useState("");
    const [IIITBStudent, toggleIIITBStudent] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [waiting, setWaiting] = useState(false);
    const auth = getAuth();

    const AlertDialog = (props) => {
        return <div className="alertdiv">
            <div className="alertbox">
                <AiOutlineWarning size={25} /> {message}
            </div>
        </div>
    };

    const validateInput = () => {

        if (registerRePassword != registerPassword) {
            setMessage("Passwords do not match!");
            return false;
        }
        if (registerPassword.length < 6) {
            setMessage("Password should be atleast 6 characters long!");
            return false;
        }
        if (registerName.length == 0) {
            setMessage("Please enter your name.");
            return false;
        }
        if (registerName.length > 30) {
            setMessage("The name field can't contain more than 30 characters");
            return false;
        }
        if (IIITBStudent && !registerEmail.trim().endsWith("@iiitb.ac.in")) {
            setMessage("Register with your @iiitb.ac.in email id.");
            return false;
        }
        if (registerEmail.trim().endsWith("@iiitb.ac.in") && !IIITBStudent) {
            setMessage("If you are from IIITB, please check the box above.");
            return false;
        }
        return true;
    }

    let navigate = useNavigate();

    const routeChange = (path) => {
        // let path = `home`; 
        navigate(path);
    }

    const register = async () => {
        setShowAlert(false);
        if (!validateInput()) {
            setShowAlert(true);
            return;
        }
        setWaiting(true);
        setShowAlert(false);
        const PORT = process.env.PORT || 5000;

        var publicURL = `https://infin8-backend.onrender.com/api/sendOTP`;
        var testingURL = `http://localhost:${PORT}/api/sendOTP`;

        const result = await fetch(publicURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                registerEmail,
                registerName,
            }),
        }).then((res) => res.json());

        console.log(result.status);
        console.log(result.body);
        if (result.status === "ok") {
            var userDetails = {
                name: registerName,
                email: registerEmail,
                contact: registerContact,
                IIITBStudent: IIITBStudent,
                password: registerPassword,
            }
            props.setUser(userDetails);
            routeChange(`/otp-verification`);
        }
        else if (result.status === "Exists") {
            console.log("User already exists");
        }
        else if (result.status === "error") {
            console.log("Error encountered!");
        }
    }

    const goToLogin = async () => {
        routeChange(`/sign-in`);
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
        ><BsEyeFill /></span>
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


    // const [show, setShow] = useState(false);

    var passComp = <>
        <span class="input-group-text" id="basic-addon1"><BsEyeFill
            id="togglePassword"
            onClick={() => {
                setShow(true);
            }} /></span>
        <input type="password" class="form-control"
            placeholder="**********" aria-label="Password"
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
                placeholder="**********" aria-label="Password"
                id="your_password" onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }} required="required"
                aria-describedby="basic-addon1" />
        </>
    }

    // const [conf, setConf] = useState(false);
    var confComp = <>
        <span
            class="input-group-text"
            onClick={() => {
                setConf(true);
            }}
        ><BsEyeFill /></span>
        <input type="password" class="form-control"
            placeholder="**********" aria-label="Confirm Password"
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
                placeholder="**********" aria-label="Confirm Password"
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
                    <img src={infilogo} className='authlogo'
                        onClick={
                            () => {
                                navigate('/home');
                            }
                        }
                    ></img>
                    <div className="row centerrow">
                        <div class="formtitle">Sign up</div>
                    </div>
                    {
                        props.up ?
                            null :
                            <div className='col-12 Disclaimer' style={{ "padding": "20px 20px 20px 20px", "color": "white", "fontFamily": "Poppins" }}
                            >
                                <div>
                                    We are facing some technical difficulties with our server, please check again in some time.
                                </div>
                            </div>
                    }

                    <div className="row centerrow labelrow1">
                        Name
                    </div>
                    <div class="input-group mb-3 centerrow">
                        <span class="input-group-text" id="basic-addon1"><FaUser /></span>
                        <input type="text" class="form-control"
                            placeholder="Name" aria-label="Name"
                            id="your_name" onChange={(event) => {
                                setRegisterName(event.target.value);
                            }} required="required"
                            aria-describedby="basic-addon1" />
                    </div>

                    <div className="row centerrow labelrow1">
                        Contact
                    </div>
                    <div class="input-group centerrow mb-3">
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
                    <div class="input-group mb-3 centerrow">
                        <span class="input-group-text" id="basic-addon1"><BsFillTelephoneFill /></span>
                        <input type="text" class="form-control"
                            placeholder="Phone" aria-label="Contact"
                            id="your_contact" onChange={(event) => {
                                setRegisterContact(event.target.value);
                            }} required="required"
                            aria-describedby="basic-addon1" />
                    </div>
                    {/* password */}
                    <div className="row centerrow labelrow1">
                        Password
                    </div>
                    <div class="input-group centerrow mb-3">
                        {passComp}
                    </div>

                    <div className="row centerrow labelrow1">
                        Confirm Password
                    </div>
                    <div class="input-group centerrow mb-3">
                        {confComp}
                    </div>


                    <div class="form-group centerrow">
                        <input type="checkbox" name="iiitb-student" id="iiitb-student"
                            className="agree-term" onChange={(event) => {
                                toggleIIITBStudent(!IIITBStudent);
                            }} />
                        <label for="iiitb-student" class="label-agree-term"><span><span></span></span>I am from IIITB</label>
                    </div>

                    {/* alert */}
                    {
                        showAlert ?
                            <div className="form-group centerrow">
                                <AlertDialog></AlertDialog>
                            </div> :
                            <></>
                    }


                    <div class="form-group centerrow">
                        {/* {(registerPassword === registerRePassword && ((IIITBStudent && (registerEmail.slice(-12) === "@iiitb.ac.in")) || (!IIITBStudent && (registerEmail.slice(-12) !== "@iiitb.ac.in"))))
                            ? <button onClick={register} name="signup" id="signup" className="btn registerbtn btn-dark" value="signup">Register</button>
                            :  */}
                        <button onClick={register} name="signup" id="signup" class="btn btn-dark registerbtn" value="signup"
                            disabled={waiting || !props.up}
                        >{
                                waiting ?
                                    <Spinner animation="border" /> :
                                    "Register"
                            }
                        </button>
                    </div>
                    {/* <div className="form-group centerrow registertext mb-5">
                        New here?
                        <button className="txtbtn btn btn-link" onClick={goToRegister} name="goToRegister" id="goToRegister" value="Don't have an account? Sign Up">
                            Register
                        </button>
                    </div> */}
                    <div className="form-group centerrow registertext mb-5">
                        Already registered?
                        <button className="txtbtn btn btn-link" onClick={goToLogin} name="goToLogin" id="goToLogin" value="Don't have an account? Sign Up">
                            Sign In
                        </button>
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
                    <div className="signin-image sgnimg2"></div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;