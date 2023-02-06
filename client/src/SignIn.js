import { useState } from "react";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {getAuth} from "@firebase/auth"
// import { auth } from "./firebase-config";
import { db } from "./firebase-config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import './Auth.scss'
import { FaUser } from 'react-icons/fa'
import { BsFillTelephoneFill, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import infilogo from './images/infilogoblack.svg';
import { AiOutlineWarning } from 'react-icons/ai'
import { Spinner } from "react-bootstrap";
import {Link} from "react-router-dom";

function SignIn(props) {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState("You are a moron!");
    const [waiting, setWaiting] = useState(false);
    const AlertDialog = (props) => {
        return <div className="alertdiv">
            <div className="alertbox">
                <AiOutlineWarning size={25} /> {message}
            </div>
        </div>
    };

    const auth = getAuth();
    const login = async () => {
        setWaiting(true);
        await signInWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
        ).then(async (userCredential) => {
                console.log("printing")

            setShowAlert(false);
            await getData(userCredential).then(() => {
                console.log("printing")

            }).catch(err => {
                console.log("printing")

            })

            props.setLoggedInStatus(true);
            routeChange(`home`);
            // props.navigator("/", false);

        }).catch((error) => {
            console.log(error);
            setMessage("Invalid Credentials");
            setWaiting(false);
            setShowAlert(true);
        });
    }

    const getData = async (userCredential) => {
        const docRef = doc(db, "users_list", userCredential.user.uid);
        const docSnap = await getDoc(docRef);
                console.log("printing")



        if (docSnap.exists()) {

            var IIITBStudent = false;
            if (registerEmail.slice(-12) === "@iiitb.ac.in") {
                IIITBStudent = true;
            }

            const userDetails = {
                id: userCredential.user.uid,
                name: docSnap.data().name,
                email: docSnap.data().email,
                contact: docSnap.data().contact,
                iiitbStudent: IIITBStudent
            }

            props.setUser(userDetails);
        } else {
        }
    }

    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const goToRegister = async () => {
        routeChange(`/sign-up`);
    }

    const [show, setShow] = useState(false);


    const validateInput = () => {

        return true;
    }

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

    return (

        <div className="signin">
            <div className="row">
                <div className="col-12 col-lg-6 detailscol">
                    <img src={infilogo} className='authlogo'
                        onClick={
                            ()=>{
                                navigate('/home');
                            }
                        }
                    >
                    </img>
                    <div className="row centerrow">
                        <div class="formtitle">Sign In</div>
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

                    <div className="row centerrow labelrow">
                        Email
                    </div>
                    <div class="input-group mb-3 centerrow">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control"
                            id="your_email"
                            placeholder="yourname@example.com" aria-label="Email"
                            onChange={(event) => {
                                setRegisterEmail(event.target.value);
                            }}
                            required="required"
                            aria-describedby="basic-addon1" />
                    </div>
                    <div className="row centerrow labelrow">
                        Password
                    </div>
                    {/* password */}
                    <div class="input-group mb-3 centerrow">
                        {passComp}
                    </div>

                    <div className="row centerrow labelrow">
                        <Link to={`/forgot-password`}
                        >Forgot Password?
                        </Link>
                    </div>
                    {
                        showAlert ?
                            <div className="form-group centerrow">
                                <AlertDialog></AlertDialog>
                            </div> :
                            <></>
                    }
                    <div class="form-group centerrow">
                        <button onClick={login} name="signin" id="signin" className="btn registerbtn btn-dark" value="signin" 
                        disabled = {(!props.up) || waiting}
                        >{
                            waiting ?
                            <Spinner></Spinner> : 
                            "Login"
                        }</button>
                        {/* <btn onClick={login} name="signin" id="signin" class="btn btn-primary" value="signin">Login</btn> */}
                    </div>
                    <div className="form-group centerrow registertext mb-5">
                        New here?
                        <button className="txtbtn btn btn-link" onClick={goToRegister} name="goToRegister" id="goToRegister" value="Don't have an account? Sign Up">
                            Register
                        </button>
                    </div>

                    {/*<div class="form-group centerrow">
                        <btn onClick={goToRegister} name="goToRegister" id="goToRegister" class="btn registerbtn btn-dark" value="Don't have an account? Sign Up">Register</btn>
                    </div> */}
                </div>

                <div className="d-none d-lg-block col-lg-6">
                    <div className="signin-image"></div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
