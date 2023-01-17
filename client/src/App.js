import Home from "./Home";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import RegisterCard from "./components/RegisterCard/RegisterCard";
import RegisterEvent from "./components/RegisterEvent/RegisterEvent";
import PayBaseFees from "./components/RegisterEvent/PayBaseFees/PayBaseFees";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Profile from "./screens/Profile";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import OTPVerification from "./OTPVerification";

import Contact from "./components/Contact/Contact";
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
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        {/* <ScrollToTop> */}
          <Routes>
            <Route path="/home" element={<Home user={user} loggedInStatus={loggedInStatus} navigator={navigator}/>} />
            <Route path="/sign-up" element={<SignUp setUser={setUser} setLoggedInStatus={setLoggedInStatus} navigator={navigator}/>}></Route>
            <Route path="/sign-in" element={<SignIn user={user} setUser={setUser} setLoggedInStatus={setLoggedInStatus} navigator={navigator}/>}></Route>
            <Route path="/otp-verification" element={<OTPVerification user={user} setUser={setUser} setLoggedInStatus={setLoggedInStatus} navigator={navigator}/>}></Route>
            
            <Route path="/events" element={<RegisterCard loggedInStatus={loggedInStatus}/>} />
            
            {/* If the user is not signed in, paid_base_fees has to be given as false if we want the pay Base Fees page to render  */}
            <Route path="/registerevent/:id" element={<RegisterEvent loggedInStatus={loggedInStatus} paid_base_fees={false} signed_in={true} registered_for_event={false}/>} />
            <Route path="/profile" element = {<Profile loggedInStatus={loggedInStatus}/>}/>
            <Route path="/contact" element={<Contact loggedInStatus={loggedInStatus}/>} />
            <Route path="/pay_base_fees" element={
              <PayBaseFees
                loggedInStatus={loggedInStatus}
                contacts=
                {
                  [
                  {name:"Person1",
                  contact:"999999999"},
                  {name:"Person1",
                  contact:"999999999"},
                  {name:"Person1",
                  contact:"999999999"}
                  ]
                }
                email={"vikaskaly@gmail.com"}
                entrance_fee={50}
              />
            } />
            <Route path="*" element={<Navigate to ="/home" replace/>} />
          </Routes>
          {/* </ScrollToTop> */}
          <div className='space'></div>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
