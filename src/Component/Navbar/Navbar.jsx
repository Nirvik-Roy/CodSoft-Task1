import React from 'react'
import Mylogo from '../../assets/_DSC9933 (2).jpg'
import { useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'
import Scroll from '../../Scroll'
import { useState } from 'react'
const Navbar = () => {
  const [nav_active ,setnav_active]=useState(false)

  const changebg=()=>{
    if(window.scrollY>50){
      setnav_active(true)
    }else{
      setnav_active(false)
    }
  }
  window.addEventListener('scroll',changebg)
    useGSAP(()=>{
        let tl=gsap.timeline()
        tl.from('.nav_img_div',{
          duration:0.8,
          opacity:0,
          y:-90,
        })
        tl.from(".nav_logo",{
          duration:0.5,
          opacity:0,
          y:-30,
        })
       tl.from('.nav_links',{
        y:-30,
        duration:0.3,
        opacity:0,
        stagger:0.15,
       })
    })
  return (
    <>
       <nav className='nav_main'>
      <div className={` nav_bar_main d-flex justify-content-between align-items-center ${nav_active? 'nav_active':''} `}>
    <div className='nav_logo_main '>
      <div className='nav_img_div_main d-flex'>
        <div className='nav_img_div mt-2'>
          <img className='nav_logo_img' src={Mylogo} alt='logo' />
        </div>
      </div>
      <div className='nav_logo_div'>
        <p className=' nav_logo mt-3'>NEO</p>
      </div>
    </div>

    
    <div className='nav_div_wrapper'>
      <ul className='text-light nav_links_main'>
        <NavLink to={'/'} className='nav_links'>HOME</NavLink>
        <NavLink to={'/about'} className='nav_links'>ABOUT</NavLink>
        <NavLink to={'/skill'} className='nav_links'>SKILLS</NavLink>
        <NavLink to={'/portfolio'} className='nav_links'>PORTFOLIO</NavLink>
        <NavLink to='/contact' duration={500} className='nav_links'>CONTACT</NavLink>
        <li className='nav_links download_CV btn'>
          <a href='../public/My Resume (4)-1.pdf' download className='download_para'>Download CV</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar
