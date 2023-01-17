import Home from "./Home";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import RegisterCard from "./components/RegisterCard/RegisterCard";
import RegisterEvent from "./components/RegisterEvent/RegisterEvent";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Profile from "./screens/Profile";
import { useEffect } from "react";
import { useLocation } from "react-router";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import OTPVerification from "./OTPVerification";

import Contact from "./components/Contact/Contact";
// import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";


const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};
function App(props) {

  function navigator(position, replace) {
    props.navigate(position, { replace: replace });
  }
  
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const [user, setUser] = useState({});

  return (
    <>
    <div>
        {/* <Navbar></Navbar> */}
        {/* <ScrollToTop> */}
          <Routes>
            <Route exact path="/" element={<Home user={user} loggedInStatus={loggedInStatus} navigator={navigator}/>}></Route>
            <Route path="/sign-up" element={<SignUp setUser={setUser} setLoggedInStatus={setLoggedInStatus} navigator={navigator}/>}></Route>
            <Route path="/sign-in" element={<SignIn user={user} setUser={setUser} setLoggedInStatus={setLoggedInStatus} navigator={navigator}/>}></Route>
            <Route path="/otp-verification" element={<OTPVerification user={user} setUser={setUser} setLoggedInStatus={setLoggedInStatus} navigator={navigator}/>}></Route>
            {/* <Route path="/home" element={<Home/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/otp-verification" element={<OTPVerification/>} /> */}
            <Route path="/events" element={<RegisterCard />} />
            {/* If the user is not signed in, paid_base_fees has to be given as false if we want the pay Base Fees page to render  */}
            <Route path="/registerevent/:id" element={<RegisterEvent paid_base_fees={true} signed_in={true} registered_for_event={false}/>} />
            <Route path="/profile" element = {<Profile/>}/>
            <Route path="/contact" element={<Contact/>} />
            {/* <Route path="*" element={<Navigate to ="/home" replace/>} /> */}
          </Routes>
          {/* </ScrollToTop> */}
          <div className='space'></div>
        {/* <Footer></Footer> */}
    </div>
    </>
  );
}

function WithNavigate(props) {
  let navigate = useNavigate();
  return <App navigate={navigate} />
}

export default WithNavigate;

