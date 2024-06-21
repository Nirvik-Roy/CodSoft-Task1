
import { useRef } from 'react'
import './App.scss'
import Button from './Button'
import Mylogo from '././assets/_DSC9933 (2).jpg'
import { useGSAP} from '@gsap/react'
import gsap from 'gsap'
import pdf from './assets/My Resume (4)-1.pdf'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {

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
 gsap.from('.svg_div',{
  x:-200,
  duration:0.80,
  opacity:0,
  scrollTrigger:{
    trigger:'.svg_div',
    scroller:'body',
    start:'top 90%',
    
  }
 })
 gsap.from(".hi_there_text",{
  y:-30,
  opacity:0,
  duration:0.5,
  scrollTrigger:{
    trigger:'.hi_there_text',
    scroller:'body',
    start:'top 90%',
  }
 })
 gsap.from(".about_me_text_div",{
  x:300,
  opacity:0,
  duration:0.5,
  scrollTrigger:{
    trigger:'.hi_there_text',
    scroller:'body',
    start:'top 90%',
  }
 })
 gsap.from(".about_me_name_div",{
  x:300,
  opacity:0,
  duration:0.6,
  scrollTrigger:{
    trigger:'.hi_there_text',
    scroller:'body',
    start:'top 90%',
  }
 })
 gsap.from(".contact_btn",{
  y:100,
  opacity:0,
  scrollTrigger:{
    trigger:'.hi_there_text',
    scroller:'body',
    start:'top 100%',
    scrub:2
  }
 })
 gsap.from(".download_CV_btn",{
  y:100,
 
  opacity:0,
  scrollTrigger:{
    trigger:'.hi_there_text',
    scroller:'body',
    start:'top 100%',
    scrub:2
  }
 })
})
  return (
    <>
      <div className='container_main'>
  
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
                <p className='download_para'>Download CV</p>
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
              <h1 className='text-light intro_heading'>Hi, I'm <span className='my_name'>Nirvik Roy</span></h1>
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
                  <button className='social_btn btn btn1'><i class="fa-brands fa-facebook-f text-light"></i></button>
                  <button className='social_btn btn'><i class="fa-brands fa-instagram"></i></button>
                  <button className='social_btn btn'><i class="fa-brands fa-linkedin"></i></button>
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
      

      {/* About Section */}
     <section className='about_section'>
      <h1 className='text-light about_heading text-center'>ABOUT ME</h1>
      <div className='about_us_container'>
        <div className='about_us_main'>
          <div className='left_about_us'>
          <div className='svg_div'>
     <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="489.32677" height="424.8366" viewBox="0 0 979.32677 424.8366" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M993.71816,412.83936H419.142a9.19888,9.19888,0,0,0,0,18.39776H435.417V651.3026a9.19888,9.19888,0,0,0,18.39776,0l.1398-220.06548h461.1557l42.52,220.06548a9.19887,9.19887,0,1,0,18.39775,0l2.67633-220.06548h15.01383a9.19888,9.19888,0,0,0,0-18.39776Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/><path d="M518.73716,371.85047v38.9547H421.141a19.48915,19.48915,0,1,1-1.35523-38.95474q.67739-.02358,1.35523,0Z" transform="translate(-110.33661 -237.5817)" fill="#f2f2f2"/><path d="M521.13449,410.50552a1.49881,1.49881,0,0,1-1.49822,1.49822H419.40273a20.52615,20.52615,0,0,1,0-41.05229H519.63627a1.49827,1.49827,0,1,1,0,2.99653H419.40273a17.52964,17.52964,0,0,0,0,35.05924H519.63627A1.49883,1.49883,0,0,1,521.13449,410.50552Z" transform="translate(-110.33661 -237.5817)" fill="#ff014f"/><path d="M518.73716,380.84H413.85905a.29966.29966,0,0,1-.00552-.59929H518.73716a.29966.29966,0,0,1,0,.59929Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/><path d="M518.73716,388.03169H413.85905a.29966.29966,0,0,1-.00552-.59929H518.73716a.29966.29966,0,0,1,0,.59929Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/><path d="M518.73716,395.22332H413.85905a.29966.29966,0,0,1-.00552-.59929H518.73716a.29966.29966,0,0,1,0,.59929Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/><path d="M518.73716,402.41487H413.85905a.29966.29966,0,0,1-.00552-.59929H518.73716a.29966.29966,0,0,1,0,.59929Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/><path d="M500.33941,330.80932v38.95474H402.74324a19.48915,19.48915,0,0,1-1.35522-38.95474q.67737-.02358,1.35522,0Z" transform="translate(-110.33661 -237.5817)" fill="#f2f2f2"/><path d="M502.73673,369.46442a1.49885,1.49885,0,0,1-1.49822,1.49826H401.005a20.52614,20.52614,0,0,1,0-41.05229H501.23851a1.49826,1.49826,0,1,1,0,2.99652H401.005a17.52964,17.52964,0,0,0,0,35.05928H501.23851A1.49884,1.49884,0,0,1,502.73673,369.46442Z" transform="translate(-110.33661 -237.5817)" fill="#3f3d56"/><path d="M500.33941,339.79886H395.4613a.29966.29966,0,0,1-.00553-.59929H500.33941a.29966.29966,0,0,1,0,.59929Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/><path d="M500.33941,346.99054H395.4613a.29966.29966,0,0,1-.00553-.59929H500.33941a.29966.29966,0,0,1,0,.59929Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/><path d="M500.33941,354.18217H395.4613a.29966.29966,0,0,1-.00553-.59929H500.33941a.29966.29966,0,0,1,0,.59929Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/><path d="M500.33941,361.37376H395.4613a.29966.29966,0,0,1-.00553-.59929H500.33941a.29966.29966,0,0,1,0,.59929Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/><path d="M613.87355,550.68347V516.71838a5.661,5.661,0,0,0-5.66085-5.66085H479.4284a5.661,5.661,0,0,0-5.66084,5.66085v33.96509Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/><rect x="363.43092" y="325.83868" width="140.10602" height="43.87158" fill="#ccc"/><path d="M473.76756,620.02887V653.994a5.661,5.661,0,0,0,5.66084,5.66084H608.2127a5.661,5.661,0,0,0,5.66085-5.66084V620.02887Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/><circle cx="432.77633" cy="294.70402" r="4.24564" fill="#fff"/><circle cx="432.77633" cy="351.3125" r="4.24564" fill="#fff"/><circle cx="433.00385" cy="406.72228" r="4.24564" fill="#fff"/><path d="M597.989,472.33053v38.9547H500.39287a19.48916,19.48916,0,0,1-1.35647-38.9547q.678-.02358,1.35647,0Z" transform="translate(-110.33661 -237.5817)" fill="#f2f2f2"/><path d="M600.38637,510.98558a1.49881,1.49881,0,0,1-1.49822,1.49822H498.65461a20.52615,20.52615,0,0,1-.0247-41.05229H598.88815a1.49827,1.49827,0,1,1,0,2.99653H498.65461a17.52963,17.52963,0,0,0,0,35.05923H598.88815A1.49885,1.49885,0,0,1,600.38637,510.98558Z" transform="translate(-110.33661 -237.5817)" fill="#3f3d56"/><path d="M597.989,481.32H493.111a.29966.29966,0,0,1-.00553-.59929H597.98913a.29966.29966,0,0,1,0,.59929Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/><path d="M597.989,488.51175H493.111a.29966.29966,0,0,1-.00553-.59929H597.98913a.29966.29966,0,0,1,0,.59929Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/><path d="M597.989,495.70338H493.111a.29966.29966,0,0,1-.00553-.59929H597.98913a.29966.29966,0,0,1,0,.59929Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/><path d="M597.989,502.89493H493.111a.29966.29966,0,0,1-.00553-.59929H597.98913a.29966.29966,0,0,1,0,.59929Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/><path d="M483.36747,317.81415H438.90162a2.74745,2.74745,0,0,0-1.21689.28306l-11.22288,5.61835a2.0452,2.0452,0,0,0,0,3.76443l11.22288,5.61835a2.74718,2.74718,0,0,0,1.21689.28306h44.46585a2.33381,2.33381,0,0,0,2.4628-2.16532v-11.2367A2.3338,2.3338,0,0,0,483.36747,317.81415Z" transform="translate(-110.33661 -237.5817)" fill="#3f3d56"/><path d="M485.83027,319.97947v11.2367a2.33383,2.33383,0,0,1-2.4628,2.16532h-8.8589V317.81415h8.8589A2.33383,2.33383,0,0,1,485.83027,319.97947Z" transform="translate(-110.33661 -237.5817)" fill="#ff014f"/><path className='leaf' d="M216.78083,537.99332a35.33951,35.33951,0,0,0,34.12552-6.01134c11.95262-10.03214,15.70013-26.56,18.74934-41.864q4.50949-22.63308,9.019-45.26617l-18.88217,13.00153c-13.57891,9.34993-27.46375,18.99939-36.86572,32.54233S209.42082,522.42587,216.975,537.08" transform="translate(-110.33661 -237.5817)" fill="#e6e6e6"/><path className='branch_2' d="M218.39489,592.79741c-1.91113-13.92071-3.87625-28.0202-2.53572-42.09016,1.19057-12.4956,5.00277-24.70032,12.764-34.70734a57.73582,57.73582,0,0,1,14.81307-13.42309c1.48131-.935,2.84468,1.41257,1.36983,2.34348a54.88844,54.88844,0,0,0-21.71125,26.19626c-4.72684,12.02273-5.48591,25.12848-4.67135,37.90006.4926,7.72345,1.53656,15.39627,2.58859,23.05926a1.40615,1.40615,0,0,1-.94781,1.66928,1.3653,1.3653,0,0,1-1.6693-.94781Z" transform="translate(-110.33661 -237.5817)" fill="#f2f2f2"/><path className='leaf_2' d="M236.80246,568.16434a26.01425,26.01425,0,0,0,22.6665,11.69871c11.47417-.54466,21.04-8.55293,29.651-16.15584l25.46969-22.48783-16.85671-.80672c-12.12234-.58011-24.55745-1.12124-36.10356,2.617s-22.19457,12.73508-24.30583,24.68624" transform="translate(-110.33661 -237.5817)" fill="#e6e6e6"/><path className='branch' d="M212.99392,600.79976c9.19853-16.27621,19.86805-34.36538,38.93262-40.14695A43.445,43.445,0,0,1,268.3022,558.962c1.73863.14991,1.30448,2.82994-.431,2.6803a40.36111,40.36111,0,0,0-26.133,6.91386c-7.36852,5.01554-13.10573,11.98848-17.96161,19.383-2.97439,4.52936-5.63867,9.25082-8.30346,13.966-.85161,1.50687-3.34078.41915-2.47922-1.10534Z" transform="translate(-110.33661 -237.5817)" fill="#f2f2f2"/><path d="M198.25523,617.93168a19.69836,19.69836,0,0,1,12.0709-16.49847v-9.40956h15.782v9.70608a19.68812,19.68812,0,0,1,11.41362,16.202l3.711,43.13835H194.54417Z" transform="translate(-110.33661 -237.5817)" fill="#f2f2f2"/><path d="M734.973,411.955l-4.69488-1.97685-3.22067-23.53551h-42.889l-3.491,23.43936-4.20031,2.10013a.99744.99744,0,0,0,.44611,1.88955h57.66283A.99739.99739,0,0,0,734.973,411.955Z" transform="translate(-110.33661 -237.5817)" fill="#e6e6e6"/><path d="M811.1898,389.574H600.50692a4.174,4.174,0,0,1-4.16467-4.174V355.69092H815.35446V385.4A4.17408,4.17408,0,0,1,811.1898,389.574Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/><path d="M815.57469,369.73213H596.15V242.61337a5.0375,5.0375,0,0,1,5.03186-5.03167h209.361a5.03755,5.03755,0,0,1,5.03191,5.03167Z" transform="translate(-110.33661 -237.5817)" fill="#3f3d56"/><path className='screen' d="M802.46932,360.50584h-193.214a3.88344,3.88344,0,0,1-3.87919-3.87908V250.68707a3.88365,3.88365,0,0,1,3.87919-3.87932h193.214a3.88366,3.88366,0,0,1,3.8792,3.87932V356.62676A3.88345,3.88345,0,0,1,802.46932,360.50584Z" transform="translate(-110.33661 -237.5817)" fill="#fff"/><path d="M751.57964,397.88662a11.6159,11.6159,0,0,1,17.666,2.27241l26.13446-4.64642,6.69716,15.19317-36.99908,6.04328a11.67883,11.67883,0,0,1-13.49855-18.86244Z" transform="translate(-110.33661 -237.5817)" fill="#ffb6b6"/><path d="M775.77611,417.286l27.24571-.33963,3.44882-.04668,55.43253-.69843s15.05312-14.3609,28.16068-29.1465l-1.83719-13.28833A54.29159,54.29159,0,0,0,870.023,340.1519C851.24988,352.696,840.363,377.52559,840.363,377.52559l-34.37018,8.22071-3.43848.82227-21.35608,5.10326Z" transform="translate(-110.33661 -237.5817)" fill="#ff014f"/><path d="M915.25011,498.96167H864.39249c0,2.17915-55.59414,3.94772-55.59414,3.94772a20.30858,20.30858,0,0,0-3.33166,3.15818,19.59694,19.59694,0,0,0-4.58,12.63271v3.15818a19.74588,19.74588,0,0,0,19.73861,19.73861h94.62478a19.75579,19.75579,0,0,0,19.73862-19.73861v-3.15818A19.76607,19.76607,0,0,0,915.25011,498.96167Z" transform="translate(-110.33661 -237.5817)" fill="#e4e4e4"/><rect x="747.4019" y="303.23122" width="20.52816" height="118.48951" fill="#e4e4e4"/><path d="M799.31222,658.58132c0,2.218,31.10721.858,69.47992.858s69.47991,1.36012,69.47991-.858-31.1072-19.807-69.47991-19.807S799.31222,656.36323,799.31222,658.58132Z" transform="translate(-110.33661 -237.5817)" fill="#e4e4e4"/><polygon points="675.186 407.461 659.908 407.46 652.64 348.531 675.188 348.532 675.186 407.461" fill="#ffb6b6"/><path d="M789.41863,659.852l-49.2623-.00183v-.62309a19.17528,19.17528,0,0,1,19.17426-19.17395h.00122l30.08773.00122Z" transform="translate(-110.33661 -237.5817)" fill="#2f2e41"/><polygon points="630.031 407.461 614.753 407.46 607.485 348.531 630.033 348.532 630.031 407.461" fill="#ffb6b6"/><path d="M744.2636,659.852l-49.2623-.00183v-.62309a19.1753,19.1753,0,0,1,19.17426-19.17395h.00122l30.08773.00122Z" transform="translate(-110.33661 -237.5817)" fill="#2f2e41"/><circle cx="766.88656" cy="41.63615" r="26.56401" fill="#ffb6b6"/><path d="M920.21655,461.22417s8.91308,47.1307-24.99958,53.13247-82.86639,10.21993-82.86639,10.21993L790.36706,627.14324l-29.53443-2.63675s3.928-123.46737,13.5876-133.127,70.71212-38.58282,70.71212-38.58282Z" transform="translate(-110.33661 -237.5817)" fill="#2f2e41"/><path d="M853.98286,441.47135,839.151,456.35062s-107.0941,17.25-111.22553,41.9852c-6.23747,37.34427-13.60493,118.552-13.60493,118.552l32.1988-2.41491,12.62647-92.31123,51.5182-11.71874L869.27729,478.5Z" transform="translate(-110.33661 -237.5817)" fill="#2f2e41"/><path d="M902.78526,263.36115c-2.6223-4.94751-5.95413-14.80785-11.24679-16.63657a42.07731,42.07731,0,0,0-9.05841-1.92972l-8.99618,3.46009,4.89616-3.808q-1.42988-.08519-2.85817-.13928l-6.0699,2.33453,3.10542-2.41532c-5.65883-.05808-11.5.53031-15.88468,3.9752-3.73817,2.93677-7.44169,14.06185-8.04057,18.77753a35.9171,35.9171,0,0,0,.6603,13.53055l1.53716,1.46166a18.85936,18.85936,0,0,0,1.206-3.83883,18.18056,18.18056,0,0,1,8.70263-11.80641l.08368-.0472c2.5782-1.451,5.7065-1.3841,8.66308-1.27769l14.04158.50527c3.37829.12158,7.01608.33533,9.64978,2.45443a15.888,15.888,0,0,1,3.85826,5.58929c1.30868,2.6414,3.8661,12.60418,3.8661,12.60418s1.44689-1.88062,2.1404-.48092a48.39766,48.39766,0,0,0,2.01437-11.23347A22.00877,22.00877,0,0,0,902.78526,263.36115Z" transform="translate(-110.33661 -237.5817)" fill="#2f2e41"/><path d="M995.69426,290.88349A11.61582,11.61582,0,0,0,985.181,305.26136l-21.3614,15.75722,6.40951,15.31674,29.8539-22.67594a11.67883,11.67883,0,0,0-4.38876-22.77589Z" transform="translate(-110.33661 -237.5817)" fill="#ffb6b6"/><path className='forearm' d="M992.25627,323.052l-53.551,59.4744s-25.60913-8.19816-45.41466-17.08624l-8.8977-27.32787a54.34329,54.34329,0,0,1-2.60112-19.66442c27.45606-7.306,59.391,19.87863,59.391,19.87863l40.08517-31.39877Z" transform="translate(-110.33661 -237.5817)" fill="#ff014f"/><path d="M867.301,465.6169c-9.554-3.30029-19.43312-6.71277-30.08912-7.99385l-.45773-.05533.12632-.443c11.03073-38.7308,8.27761-63.50657,2.87195-100.72306a37.59072,37.59072,0,0,1,21.5483-39.50121l.06542-.02958,30.43436-1.93391.06935-.00423,22.13437,6.50989a15.18313,15.18313,0,0,1,10.86724,14.83111c-.23987,12.23937.26868,25.9043.80711,40.37114,1.20787,32.45569,2.45686,66.01647-4.63045,87.79166l-.03718.11412-.09462.07416a36.09883,36.09883,0,0,1-23.08086,8.10758C887.90057,472.73235,877.76186,469.23034,867.301,465.6169Z" transform="translate(-110.33661 -237.5817)" fill="#ff014f"/><path d="M1088.24817,662.4183H111.75183a1.41521,1.41521,0,1,1,0-2.83042h976.49634a1.41521,1.41521,0,1,1,0,2.83042Z" transform="translate(-110.33661 -237.5817)" fill="#ccc"/></svg>
          </div>
          </div>
          <div className='right_about_us'>
           <div className='hi_there_main'>
               <div className='hi_there_div'>
                <p className='pt-3 hi_there_text'>Hi There</p>
               </div>
               <div className='about_me_text_div'>
                <p>In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo. Nulla in feugiat elit.</p>
               </div>
               <div className='d-flex justify-content-between'>
               <div className='about_me_name_div'>
                      <p className='about_me_name'>Name:</p>
                      <p className='about_me_name2'>Nirvik</p>
               </div>
               <div className='about_me_name_div'>
                      <p className='about_me_name'>Email:</p>
                      <p className='about_me_name2'>nirvikroy802@gmail.com</p>
               </div>
               </div>
               <div className='d-flex justify-content-between'>
               <div className='about_me_name_div'>
                      <p className='about_me_name'>Phone:</p>
                      <p className='about_me_name2'>+91 8016353086</p>
               </div>
               <div className='about_me_name_div about_me_div2'>
                      <p className='about_me_name'>Github</p>
                      <p className='about_me_name2'>Nirvik-Roy</p>
               </div>
            
               </div>
               <hr className='text-light'></hr>
                  <div className='d-flex justify-content-between w-75 mt-4 buttons_div'>
                      <button className=' contact_btn'>Contact Me <i class="fa-solid fa-arrow-right"></i> </button>
                      <button className='download_CV_btn'>Download CV <i class="fa-solid fa-arrow-right"></i> </button>
                  </div>
           </div>
          </div>
        </div>
      </div>
    
     </section>

    </>
  )
}

export default App
