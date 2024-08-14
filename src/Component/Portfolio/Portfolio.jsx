import React, { useRef, useState ,useEffect} from 'react'
import './Portfolio.scss'
import gsap from 'gsap'
import project1 from '../../assets/Screenshot (2).png'
import project2 from '../../assets/Screenshot (3).png'
import { useGSAP } from '@gsap/react' 
import { useHref } from 'react-router-dom'
import Scroll from '../../Scroll'
import LocomotiveScroll from 'locomotive-scroll'
const Portfolio = () => {
 const [elementid,setelementid]=useState();
 const [modal,setmodal]=useState(false);
  

  
  useEffect(()=>{
    
  },[])
 useGSAP(()=>{
  gsap.from('.project_container',{
    y:50,
    opacity:0,
    duration:0.1,
    scrollTrigger:{
      trigger:'.project_container',
      scroller:'body',
    }
  })
})
 

  const Modal=(props)=>{   
    
    const removemodal =()=>{
      document.getElementsByTagName('html')[0].style.overflowY = "scroll";
      setmodal(false);
    }
    


    let data=props.data;
    let id=props.id
    return(<>
    <div className='modal_main'></div>
      <div  className='modal_wrapper'>
      {data.map((element,index)=>{
          if(element.id==id){
            return(<>
              <div  className='modal_container' key={index}>
          <div className='modal_content_left d-flex justify-content-center align-items-center'>
            <div className='modal_img_div'>
              <img className='modal_img' src={element.image} alt='project_img'/>
            </div>
          </div>
          <div className='modal_content_right d-flex justify-content-center align-items-center'>
            <div className='modal_content_right_details'>
              <p className='modal_domain'>{element.domain}</p>
              <h3 className='modal_name'>{element.name}</h3>
              <p className='modal_about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
              <p className='modal_about2'>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
              <div className='modal_like_project_btn_div d-flex'>
                <button className='modal_like_project_btn'>Like This <i class="ms-1 fs-5 fa-solid fa-thumbs-up"></i></button>
                <button className='modal_view_project_btn' onClick={(()=>window.open(element.project_link,'_blank','rel=noopener noreferrer'))}>VIEW PROJECT <i class="ms-2 fa-solid fa-greater-than"></i></button>
              </div>
            </div>
            <div onClick={(()=>removemodal())} className='modal_close_btn d-flex justify-content-center align-items-center'>
            <i class="fa-solid fa-x text-light"></i>
            </div>
  
          </div>
        </div>
            </>)
          }
      })}
        
      </div>
    </>)
  }
 
  const projects =[{
    id:1,
    name:'Neo Gym',
    project_link:'https://neo-gym-chi.vercel.app/',
    domain:'Development',
    image:project1,
    about:'(A gym website)',
    likes:500,
  },{
    id:2,
    name:'Dnk-Store',
    project_link:'https://dnk-shop.vercel.app/',
    domain:'Development',
    image:project2,
    about:'(E-Commerce Site)',
    likes:500,
  },
]


  const modalAnimation=()=>{
      
    setmodal(true)
    document.getElementsByTagName('html')[0].style.overflowY = "hidden";
  }
  return (
    <>
    <Scroll/>
      <section  className='portfolio_section' >
        <h1 className='portfolio_heading text-center'>My Portfolio</h1>
        <div className='portfolio_container d-flex justify-content-center'>
          <div className='portfolio_projects_container '>

          {projects.map((element)=>{
            return(<>
              <div onClick={(()=>{
                modalAnimation()
                setelementid(element.id)
                
              })}  className='project_container d-flex justify-content-center'>
                <div className='project_div_main'>
                  <div className='project_img_div'>
                    <img className='project_img' src={element.image} alt='project_img'></img>
                  </div>
                  <div className='project_domain_div d-flex justify-content-between mt-3'>
                    <div className='project_domain'>{element.domain}</div>
                    <div className='project_likes'><i class="fa-regular fa-heart"></i> {element.likes}</div>
                  </div>
                  <div className='project_heading_div'>
                    <p className='project_heading'>{element.name}</p>
                    <p className='project_about'> {element.about}</p>
                  </div>
                </div>


                
              </div>
            </>)
          })}
             
          </div>
     
        </div>
        <div className='d-flex justify-content-center mt-5'>
       <hr className='hr_line'/>
      </div>
      </section>
     {modal && <Modal id={elementid} data={projects}/> } 
    </>

  )
  
}

export default Portfolio
