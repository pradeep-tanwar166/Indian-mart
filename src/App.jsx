import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Profile";
import Profile from "./Pages/Profile";
import Myaccount from "./Pages/Myaccount";
import Logout from "./Pages/Logout";


function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/Myaccount" element={<Myaccount/>} />
        <Route path="/Logout" element={<Logout/>} />

      </Routes>
      
    </>
  );
}

export default App