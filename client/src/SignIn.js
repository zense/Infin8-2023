import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { auth } from "./firebase-config";
import { db } from "./firebase-config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import './Auth.scss'
import { FaUser } from 'react-icons/fa'
import { BsFillTelephoneFill, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'


function SignIn(props) {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const auth = getAuth();
    const login = async () => {
        await signInWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
        ).then((userCredential) => {
            
            getData(userCredential);

            props.setLoggedInStatus(true);
            
            routeChange(`home`);
            // props.navigator("/", false);

        }).catch((error) => {
            console.log(error.message);
        });
    }

    const getData = async (userCredential) => {
        const docRef = doc(db, "users_list", userCredential.user.uid);
        const docSnap = await getDoc(docRef);

      
        if (docSnap.exists()) {

            var IIITBStudent = false;
            if (registerEmail.slice(-12) === "@iiitb.ac.in"){
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
            console.log("No such document!");
        }
    } 

    let navigate = useNavigate(); 
    const routeChange = (path) =>{ 
        navigate(path);
    }

    const goToRegister = async() => {
        routeChange(`/sign-up`);
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


    return (

        <div className="signin">
        <div class="row">
            <div className="col-12 col-lg-6">
                <div className="row">
                    <h2 class="form-title">Sign In</h2>
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

                {/* password */}
                <div class="input-group mb-3">
                    {passComp}
                </div>

                <div class="form-group">
                    <btn onClick={login} name="signin" id="signin" className="btn registerbtn btn-dark" value="signin">Login</btn>
                    {/* <btn onClick={login} name="signin" id="signin" class="btn btn-primary" value="signin">Login</btn> */}
                </div>
                <div class="form-group">
                    <btn onClick={goToRegister} name="goToRegister" id="goToRegister" class="btn registerbtn btn-dark" value="Don't have an account? Sign Up">Register</btn> 
                </div>      
            </div>
            
            <div className="d-none d-lg-block col-lg-6">
                <div className="signin-image"></div>
            </div>
        </div>
    </div>
    );
}

export default SignIn;
