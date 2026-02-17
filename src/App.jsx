import { Routes, Route } from "react-router-dom";
import './index.css'; 
import Landing from "./components/Landing";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Navbar from "./components/Navbar"; // Navbar component
import Services from "./components/Services";
import Footer from "./components/Footer";
import CandidateForm from "./components/CandidateForm";
import CurrentOpenings from "./components/CurrentOpenings";

function App() {

  return (
  
   
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/CandidateForm" element={<CandidateForm/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/navbar" element={<Navbar/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/current-openings" element={<CurrentOpenings/>}></Route>
      </Routes>

      <Footer/>
   </>


  )
};


export default App;
