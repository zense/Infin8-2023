import Home from "./Home";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import RegisterCard from "./components/RegisterCard/RegisterCard";
import RegisterEvent from "./components/RegisterEvent/RegisterEvent";
import PayBaseFees from "./components/RegisterEvent/PayBaseFees/PayBaseFees";
// import Fees from "./components/RegisterEvent/Fees/Fees";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Profile from "./screens/Profile";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import OTPVerification from "./OTPVerification";
import Team from './components/Team/Team'
import Contact from "./components/Contact/Contact";
import {ForgotPassword} from "./ForgotPassword";
const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};
function App(props) {
  // Whenever someone logs in, we need to update tge entire user state
  
  // function navigator(position, replace) {
  //   props.navigate(position, { replace: replace });
  // }
  
  //up = true, for when the website is up
  const [up, setUp] = useState(true);

  const [loggedInStatus, setLoggedInStatus] = useState(false);
  

  const [user, setUser] = useState({
    id: "",
    name: "",
    contact: "",
    email: "",
    iiitbStudent: false
  });


  return (
    <>
    <div>
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        {/* <ScrollToTop> */}
          <Routes>
            <Route path="/home" element={<Home user={user} loggedInStatus={loggedInStatus}/>} />
            <Route path="/sign-up" element={<SignUp setUser={setUser} setLoggedInStatus={setLoggedInStatus}
            up = {up}
            />}></Route>
            <Route path="/sign-in" element={<SignIn user={user} setUser={setUser} setLoggedInStatus={setLoggedInStatus}
            up = {up}
            />}></Route>

            <Route path="/forgot-password" element={<ForgotPassword setUser={setUser} setLoggedInStatus={setLoggedInStatus}/>}></Route>

            <Route path="/otp-verification" element={<OTPVerification user={user} setUser={setUser} setLoggedInStatus={setLoggedInStatus}/>}></Route>
            
            <Route path="/events" element={<RegisterCard loggedInStatus={loggedInStatus} paid_base_fees={user.baseFeePaid}/>} />
            
            {/**/}
            <Route path="/registerevent/:id" element={<RegisterEvent user={user} loggedInStatus={loggedInStatus} entrance_fee={50} signed_in={loggedInStatus} registered_for_event={false}/>} />
            <Route path="/profile" element = {<Profile user={user} loggedInStatus={loggedInStatus} setLoggedInStatus={setLoggedInStatus} setUser={setUser}/>}/>
            <Route path="/contact" element={<Contact loggedInStatus={loggedInStatus}/>} />
            <Route path="/team" element={<Team loggedInStatus={loggedInStatus}/>}></Route>
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


