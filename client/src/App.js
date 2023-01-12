import Home from "./Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import RegisterCard from "./components/RegisterCard/RegisterCard";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/events" element={<RegisterCard />} />
            <Route path="*" element={<Navigate to ="/home" replace/>} />
          </Routes>
          <div className='space'></div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
