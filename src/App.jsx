import './App.scss'
import Mylogo from '././assets/_DSC9933 (2).jpg'
import { useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './Component/Home/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import Skills from './Component/Skills/Skills';
import Portfolio from './Component/Portfolio/Portfolio';
gsap.registerPlugin(ScrollTrigger);

function App() {

  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/"  element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/skill' element={<Skills/>}/>
      <Route path='/portfolio' element ={<Portfolio/>}/>
      {/* Add more routes here */}
    </Routes>
    <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
