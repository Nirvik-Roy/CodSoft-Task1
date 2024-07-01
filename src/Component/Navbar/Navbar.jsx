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
  const [nav_menu,setnav_menu]=useState(false)



  const setmenu = () =>{
   setnav_menu(true)
  }
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
    const Menu_modal=()=>{
      return <>
          <div className='nav_menu_main'></div>
    <div className='nav_menu_wrapper'>
    <div className='nav_menu_div d-flex justify-content-center nav_translate'>
       
       <div className='menu_div_container '>

         <div className='menu_div_logo_container mt-4 d-flex justify-content-between'>
           <div className='menu_div_logo'>
             <img className='menu_logo_img' src={Mylogo} alt='logo' />
           </div>
           <div onClick={(()=>setnav_menu(false))} className='menu_close_div mt-2'>
              <i class="fa-solid fa-times fa-lg cross_icon"></i>
            </div>
         </div>
          

          <div className='menu_about_container mt-4'>
            <p className='menu_about_para'>I am <span className='name'>Nirvik Roy</span>  a Front-End Developer,"Hire Me Now"</p>
          </div>

          <hr className='text-secondary mt-4'></hr>


          <div className='menu_div_links_main'>

            <div className='menu_div_links_wrapper d-flex flex-column'>
            <NavLink to={'/'} className='nav_links2'>HOME</NavLink>
           <NavLink to={'/about'} className='nav_links2'>ABOUT</NavLink>
           <NavLink to={'/skill'} className='nav_links2'>SKILLS</NavLink>
           <NavLink to={'/portfolio'} className='nav_links2'>PORTFOLIO</NavLink>
            <NavLink to='/contact' duration={500} className='nav_links2'>CONTACT</NavLink>
            </div>
          </div>
          <hr className='text-secondary menu_hr_line'></hr>
           
         <div className='menu_find_with_me_main mt-4'>
          <p className='menu_find_With_me_para'>Find With Me</p>
          <div className='menu-find_with_me_links mt-4 d-flex justify-content-between'>
                  <div className='menu_find_with_me_box'>
                  <i class="fa-brands fa-github"></i>
                  </div>
                  <div className='menu_find_with_me_box'>
                  <i class="fa-brands fa-github"></i>
                  </div>
                  <div className='menu_find_with_me_box'>
                  <i class="fa-brands fa-github"></i>
                  </div>
          </div>
         </div>
       </div>
    
      </div>
    </div>
   
      </>
    }
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
        <li onClick={(()=>setmenu())} className=' nav_menu mb-4'><i class="fa-solid fa-bars fa-2xl "></i></li>
      </ul>
    </div>
    </div>

    
  
  {nav_menu && <Menu_modal/>}

    
  </nav>
    </>
  )
}

export default Navbar
