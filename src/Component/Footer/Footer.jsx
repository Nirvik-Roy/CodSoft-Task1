import React from 'react'
import './Footer.scss'
import logo from '../../assets/_DSC9933 (2).jpg'
import gsap from 'gsap'
import { useEffect } from 'react'

const Footer = () => {

  const mousemove = (e) =>{
    console.log((e))
    gsap.to('.cursor',{
      x:e.pageX,
      y:e.pageY,
      ease:'back.out'
    })
  }
  return (
    <>
      <section  className='footer_section' onMouseMove={((e)=>mousemove(e))}>
        <div className='footer_container'>
        <div className='footer_wrapper d-flex justify-content-center align-items-center'>
            <div className='footer_logo_div'>
                <img src={logo} className='footer_img'></img>
                <p className='footer_img_text'>NEO</p>
            </div>
            </div>
            <div className='footer_para_div'>
                <p className='footer_para_text text-center'>© 2024. All rights reserved by lorem-ipsum. </p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer
