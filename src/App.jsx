import './App.scss'
import Mylogo from '././assets/_DSC9933 (2).jpg'
import { useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './Component/Home/Home';
gsap.registerPlugin(ScrollTrigger);

function App() {

  

  return (
    <>
     <Home/>
    </>
  )
}

export default App
