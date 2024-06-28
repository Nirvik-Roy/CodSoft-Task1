
import React from 'react'
import './Skills.scss'
import { useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from 'gsap/gsap-core';
import Scroll from '../../Scroll'
gsap.registerPlugin(ScrollTrigger);
const Skills = () => {

    useGSAP(()=>{
       
        gsap.to('.percentage',{
            width:"100%",
            duration:0.6,
            scrollTrigger:{
                trigger:'.percentage',
                scroller:"body",
                start:'top 100%',
            }
        })
        gsap.to('.percentage1',{
            width:"80%",
            duration:0.6,
            scrollTrigger:{
                trigger:'.percentage',
                scroller:"body",
                start:'top 100%',
            }
        })
        gsap.to('.percentage2',{
            width:"75%",
            duration:0.6,
            scrollTrigger:{
                trigger:'.percentage',
                scroller:"body",
                start:'top 100%',
            }
        })
        gsap.to('.percentage3',{
            width:"70%",
            duration:0.6,
            scrollTrigger:{
                trigger:'.percentage',
                scroller:"body",
                start:'top 100%',
            }
        })
        gsap.to('.percentage4',{
            width:"90%",
            duration:0.6,
            scrollTrigger:{
                trigger:'.percentage',
                scroller:"body",
                start:'top 100%',
            }
        })
        gsap.to('.percentage5',{
            width:"60%",
            duration:0.6,
            scrollTrigger:{
                trigger:'.percentage',
                scroller:"body",
                start:'top 100%',
            }
        })
        gsap.to('.percentage6',{
            width:"80%",
            duration:0.6,
            scrollTrigger:{
                trigger:'.percentage',
                scroller:"body",
                start:'top 100%',
            }
        })
        gsap.to('.percentage7',{
            width:"65%",
            duration:0.6,
            scrollTrigger:{
                trigger:'.percentage',
                scroller:"body",
                start:'top 100%',
            }
        })
        gsap.to('.percentage8',{
            width:"70%",
            duration:0.6,
            scrollTrigger:{
                trigger:'.percentage',
                scroller:"body",
                start:'top 100%',
            }
        })

        gsap.to('.percentage9',{
            width:"90%",
            duration:0.6,
            scrollTrigger:{
                trigger:'.percentage',
                scroller:"body",
                start:'top 100%',
            }
        })
        gsap.to('.percentage10',{
            width:"60%",
            duration:0.6,
            scrollTrigger:{
                trigger:'.percentage',
                scroller:"body",
                start:'top 100%',
            }
        })
        gsap.to('.percentage11',{
            width:"50%",
            duration:0.6,
            scrollTrigger:{
                trigger:'.percentage',
                scroller:"body",
                start:'top 100%',
            }
        })
    })
  return (
    <>
    <Scroll/>
      <section className='skills_section'>
      <div className='cursor'></div>
      <h1 className='skills_heading text-center'>My Skills</h1>
        <div className='skills_container_main d-flex justify-content-center'>
            <div className='skills_main_div d-flex'>
                 <div className='left_skills_div'>
                 <div className='left_skills_main'>
                    <div>
                    <div className='d-flex justify-content-between skill_head_div'>
                        <p className='skill_1'>HTML</p>
                        <p className='skill_percentage'>100%</p>
                        </div>
                        <div className='percentage_div'>
                            <div className='percentage'></div>
                        </div>
                    </div>

                    <div>
                    <div className='d-flex justify-content-between skill_head_div'>
                        <p className='skill_1'>CSS</p>
                        <p className='skill_percentage'>80%</p>
                        </div>
                        <div className='percentage_div'>
                            <div className='percentage1'></div>
                        </div>
                    </div>

                    <div>
                    <div className='d-flex justify-content-between skill_head_div'>
                        <p className='skill_1'>JavaScript</p>
                        <p className='skill_percentage'>75%</p>
                        </div>
                        <div className='percentage_div'>
                            <div className='percentage2'></div>
                        </div>
                    </div>

                    <div>
                    <div className='d-flex justify-content-between skill_head_div'>
                        <p className='skill_1'>React JS</p>
                        <p className='skill_percentage'>70%</p>
                        </div>
                        <div className='percentage_div'>
                            <div className='percentage3'></div>
                        </div>
                    </div>

                    <div>
                    <div className='d-flex justify-content-between skill_head_div'>
                        <p className='skill_1'>BootStrap</p>
                        <p className='skill_percentage'>90%</p>
                        </div>
                        <div className='percentage_div'>
                            <div className='percentage4'></div>
                        </div>
                    </div>

                    <div>
                    <div className='d-flex justify-content-between skill_head_div'>
                        <p className='skill_1'>Angular Js</p>
                        <p className='skill_percentage'>60%</p>
                        </div>
                        <div className='percentage_div'>
                            <div className='percentage10'></div>
                        </div>
                    </div>

                    </div>
                 </div>




                 
                 <div className='right_skills_div'>
                 <div className='right_skills_main'>
                    <div>
                    <div className='d-flex justify-content-between skill_head_div'>
                        <p className='skill_1'>Material UI</p>
                        <p className='skill_percentage'>60%</p>
                        </div>
                        <div className='percentage_div'>
                            <div className='percentage5'></div>
                        </div>
                    </div>

                    <div>
                    <div className='d-flex justify-content-between skill_head_div'>
                        <p className='skill_1'>SCSS</p>
                        <p className='skill_percentage'>80%</p>
                        </div>
                        <div className='percentage_div'>
                            <div className='percentage6'></div>
                        </div>
                    </div>

                    <div>
                    <div className='d-flex justify-content-between skill_head_div'>
                        <p className='skill_1'>GSAP</p>
                        <p className='skill_percentage'>65%</p>
                        </div>
                        <div className='percentage_div'>
                            <div className='percentage7'></div>
                        </div>
                    </div>

                    <div>
                    <div className='d-flex justify-content-between skill_head_div'>
                        <p className='skill_1'>Redux Toolkit</p>
                        <p className='skill_percentage'>70%</p>
                        </div>
                        <div className='percentage_div'>
                            <div className='percentage8'></div>
                        </div>
                    </div>

                    <div>
                    <div className='d-flex justify-content-between skill_head_div'>
                        <p className='skill_1'>Git/GitHub</p>
                        <p className='skill_percentage'>90%</p>
                        </div>
                        <div className='percentage_div'>
                            <div className='percentage9'></div>
                        </div>
                    </div>

                    <div>
                    <div className='d-flex justify-content-between skill_head_div'>
                        <p className='skill_1'>TypeScript</p>
                        <p className='skill_percentage'>50%</p>
                        </div>
                        <div className='percentage_div'>
                            <div className='percentage11'></div>
                        </div>
                    </div>

                    </div>
                 </div>
            </div>
        </div>
        <div className='d-flex justify-content-center mt-4'>
    <hr className='hr_line'/>
  </div>
      </section>
    </>
  )
}

export default Skills
