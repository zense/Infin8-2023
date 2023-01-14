import Home from "./Home";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import RegisterCard from "./components/RegisterCard/RegisterCard";
import RegisterEvent from "./components/RegisterEvent/RegisterEvent";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import OTPVerification from "./OTPVerification";

import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";


function App(props) {

  
  function navigator(position, replace) {
    props.navigate(position, { replace: replace });
  }
  
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const [user, setUser] = useState({});

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home user={user} loggedInStatus={loggedInStatus} navigator={navigator}/>}></Route>
        <Route exact path="sign-up" element={<SignUp setUser={setUser} setLoggedInStatus={setLoggedInStatus} navigator={navigator}/>}></Route>
        <Route exact path="sign-in" element={<SignIn user={user} setUser={setUser} setLoggedInStatus={setLoggedInStatus} navigator={navigator}/>}></Route>
        <Route exact path="otp-verification" element={<OTPVerification user={user} setUser={setUser} setLoggedInStatus={setLoggedInStatus} navigator={navigator}/>}></Route>
        <Route exact path="events" element={<RegisterCard user={user} loggedInStatus={loggedInStatus} navigator={navigator}/>}></Route>
        <Route exact path="registerevent" element={<RegisterEvent user={user} paid_base_fees={true} signed_in={true} loggedInStatus={loggedInStatus} navigator={navigator}/>}></Route>
      </Routes>
      <div className='space'></div>
    </>
  );
}


function WithNavigate(props) {
  let navigate = useNavigate();
  return <App navigate={navigate} />
}

export default WithNavigate;
