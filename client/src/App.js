import Home from "./Home";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import RegisterCard from "./components/RegisterCard/RegisterCard";
import RegisterEvent from "./components/RegisterEvent/RegisterEvent";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/events" element={<RegisterCard />} />
            {/* If the user is not signed in, paid_base_fees has to be given as false if we want the pay Base Fees page to render  */}
            <Route path="/registerevent" element={<RegisterEvent paid_base_fees={false} signed_in={true}/>} />
            <Route path="*" element={<Navigate to ="/home" replace/>} />
          </Routes>
          <div className='space'></div>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
