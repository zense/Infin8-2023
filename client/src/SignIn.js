import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { auth } from "./firebase-config";
import { db } from "./firebase-config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";


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
            
            var userDetails = {
                id: userCredential.user.uid,
                email: userCredential.user.email
            }
            props.setUser(userDetails);

            // getDoc(doc(db, "users_list", userCredential.user.uid)).then(docData => {
            //     var userDetails = {
            //         id: userCredential.user.uid,
            //         name: docData.data().name,
            //         email: docData.data().email
            //     }
            //     props.setUser(userDetails);
            //     console.log(props.user);
            // }).catch(error => {
            //     console.log(error);
            // })

            props.setLoggedInStatus(true);
            props.navigator("/", false);

        }).catch((error) => {
            console.log(error.message);
        });
    }


    const goToRegister = async() => {
        props.navigator("sign-up", false);
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
                            <input type="email" name="your_email" id="your_email" class="form-control" onChange={(event) => {
                                setRegisterEmail(event.target.value);
                            }} required="required"/>
                            <label alt='Email' placeholder='Type Your Email'>Email</label>

                        </div>

                        <div class="form-group user-box">
                            {/* <label for="your_password"><i class=""></i></label> */}
                            <input type="password" name="your_password" id="your_password" class="form-control" onChange={(event) => {
                                setRegisterPassword(event.target.value);
                            }} required="required"/>
                            <label alt='Password' placeholder='Password'>Password</label>
                            <i class="far fa-eye eye-position" id="togglePassword" onClick={()=>{

                                if (document.getElementById("togglePassword").classList.contains('fa-eye')){
                                    document.getElementById("togglePassword").classList.replace('fa-eye', 'fa-eye-slash');
                                }
                                else{
                                    document.getElementById("togglePassword").classList.replace('fa-eye-slash', 'fa-eye');
                                }

                                if (document.getElementById("your_password").type === "password"){
                                    document.getElementById("your_password").type = "text";
                                }
                                else{
                                    document.getElementById("your_password").type = "password";
                                }
                            }}></i>
                        </div>

                        <div class="form-group">
                            <btn onClick={login} name="signin" id="signin" class="btn btn-primary" value="signin">Login</btn>
                        </div>
                        <div class="form-group">
                            <btn onClick={goToRegister} name="goToRegister" id="goToRegister" class="btn btn-primary" value="Don't have an account? Sign Up">Register</btn> 
                        </div>
                      
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

export default SignIn;