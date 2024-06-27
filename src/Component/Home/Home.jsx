import React, { useEffect, useRef } from 'react'
import './Home.scss'
import Mylogo from '../../assets/_DSC9933 (2).jpg'
import { useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from '../About/About'
import Skills from '../Skills/Skills'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
 

  const mousemove = (e) =>{
   
    gsap.to('.cursor',{
      x:e.pageX,
      y:e.pageY,
      ease:'back.out',
      display:'block'
    })
  }
useGSAP(()=>{
    let tl=gsap.timeline()
    tl.from('.nav_img_div',{
      duration:0.3,
      opacity:0,
      y:-30,
    })
    tl.from(".nav_logo",{
      duration:0.3,
      opacity:0,
      y:-30,
    })
   tl.from('.nav_links',{
    y:-30,
    duration:0.3,
    opacity:0,
    stagger:0.15,
   })
   tl.from('.intro_para',{
    x:-300,
    duration:0.3,
    opacity:0,
   })
   tl.from(".intro_heading",{
    x:-300,
    duration:0.3,
    opacity:0,
   })
  
   tl.from('.my_name',{
     scale:15,
     opacity:0,
    duration:0.5,
    stagger:0.15,
   })
   tl.from(".introduction_para",{
    x:-300,
    duration:0.3,
    opacity:0,
   })
   tl.from(".intro_btn",{
    opacity:0,
   })
   tl.from('.hero_section_right_img_div',{
    duration:0.3,
    scale:6,
    opacity:0,
   },'-=1')
   tl.from(".social_para",{
    duration:0.2,
    opacity:0,
    y:30,
    stagger:0.15,
   })
   tl.from('.social_btn',{
    duration:0.3,
    opacity:0,
    y:30,
    stagger:0.15,
   })
   tl.from('.intro_heading2',{
    opacity:0,
    duration:0.3
   })
})
  return (
    <>
      <div onMouseMove={((e)=>mousemove(e))} className='container_main' >
        <div className='cursor'></div>
       <nav className='nav_main'>
      <div className='nav_bar_main d-flex justify-content-between align-items-center'>
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
        <li className='nav_links'>HOME</li>
        <li className='nav_links'>ABOUT</li>
        <li className='nav_links'>SKILLS</li>
        <li className='nav_links'>PORTFOLIO</li>
        <li className='nav_links'>CONTACT</li>
        <li className='nav_links download_CV btn'>
          <a href='../public/My Resume (4)-1.pdf' download className='download_para'>Download CV</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
 
  <div className='hero_section_main d-flex justify-content-center'>
  <div className='hero_section d-flex justify-content-space-around'>
    <div className='hero_section_left'>
      <div className='hero_section_left_text'>
      <p className='intro_para'>Welcome To My World</p>
        <h1 className='text-light intro_heading'>Hi, I'm  
        <div className='my_name d-inline-block ms-3'>  N</div>
        <div className='my_name d-inline-block'>i</div>
        <div className='my_name d-inline-block'>r</div>
        <div className='my_name d-inline-block'>v</div>
        <div className='my_name d-inline-block'>i</div>
        <div className='my_name d-inline-block'>k</div>
        <div className='my_name d-inline-block ms-3'> R</div>
        <div className='my_name d-inline-block'>o</div>
        <div className='my_name d-inline-block'>y</div></h1>
        <p className='d-inline text-light intro_heading'>a </p> <p className='intro_heading2 text-light d-inline'>Front-End Developer</p>
        
       
         
        
       
        <div className='introduction_div'>
          <p className='introduction_para'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways tha</p>
        </div>
      </div>
      <div className='social_skills_main'>

      <div className='social_skills_wrapper'>
        <p className='social_para'>Find With Me</p>
        <div className='d-flex justify-content-between'>
          <div className='social_media_buttons'>
            <a className='social_btn'><i class="fa-brands fa-facebook-f text-light"></i></a>
            <a className='social_btn '><i class="fa-brands fa-instagram"></i></a>
            <a className='social_btn'><i class="fa-brands fa-linkedin"></i></a>
          </div>

        </div>
</div>
       <div className='social_skills_wrapper'>
        <p className='social_para'>BEST SKILLS ON</p>
        <div className='d-flex justify-content-between'>
          <div className='social_media_buttons'>
            <button className='social_btn btn'><i class="fa-brands fa-html5 "></i></button>
            <button className='social_btn btn'><i class="fa-brands fa-react text-primary"></i></button>
            <button className='social_btn btn'><i class="fa-brands fa-js text-warning"></i></button>
          </div>

        </div>
</div>
      </div>
    </div>

    <div className='hero_section_right'>
      <div className='hero_section_right_img_div_main'>
        <div className='hero_section_right_img_div'>
          <img className='hero_section_right_img' src={Mylogo}></img>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div className='d-flex justify-content-center mt-5'>
    <hr className='hr_line'/>
  </div>
      </div>

      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default Home
