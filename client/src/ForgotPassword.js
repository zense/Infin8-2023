import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
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

export function ForgotPassword(props){
    let navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const routeChange = (path) => {
        navigate(path);
    }
    const goToRegister = async () => {
        routeChange(`/sign-up`);
    }
    var passComp = <>
        <span class="input-group-text" id="basic-addon1"><BsEyeFill
            id="togglePassword"
            onClick={() => {
                setShow(true);
            }} /></span>
        <input type="password" class="form-control"
            placeholder="**********" aria-label="Password"
            id="your_password"  required="required"
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
                id="your_password"  required="required"
                aria-describedby="basic-addon1" />
        </>
    }

    return (
        <div className="signin" style={{"overflowX": "hidden"}}>
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
                        <div class="formtitle">Forgot Password</div>
                    </div>
                    <div className="row centerrow labelrow">
                        Email
                    </div>
                    <div class="input-group mb-3 centerrow">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control"
                            id="your_email"
                            placeholder="yourname@example.com" aria-label="Email"
                            required="required"
                            aria-describedby="basic-addon1" />
                    </div>
                    <div className="row centerrow labelrow">
                        New Password
                    </div>
                    <div class="input-group mb-3 centerrow">
                        {passComp}
                    </div>
                    <div class="form-group centerrow">
                        <btn name="signin" id="signin" className="btn registerbtn btn-dark" value="signin" disabled={waiting} style={{"margin-top": "20px"}}>{
                            waiting ?
                            <Spinner></Spinner> : 
                            "Change Password"
                        }</btn>
                        {/* <btn onClick={login} name="signin" id="signin" class="btn btn-primary" value="signin">Login</btn> */}
                    </div>
                    <div className="form-group centerrow registertext mb-5">
                        New here?
                        <button className="txtbtn btn btn-link" onClick={goToRegister} name="goToRegister" id="goToRegister" value="Don't have an account? Sign Up">
                            Register
                        </button>
                    </div>
                </div>
                <div className="d-none d-lg-block col-lg-6">
                    <div className="signin-image"></div>
                </div>
            </div>
        </div>
    )
}