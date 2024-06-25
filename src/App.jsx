import './App.scss'
import Mylogo from '././assets/_DSC9933 (2).jpg'
import { useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './Component/Home/Home';
import { BrowserRouter } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

function App() {

  

  return (
    <>
    <BrowserRouter>
     <Home/>
     </BrowserRouter>
    </>
  )
}

export default App
