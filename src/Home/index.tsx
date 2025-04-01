import { Link } from "react-router-dom";
import { BgImage, HomeStyle, ToMain } from "./Home.Style";
import { useEffect } from "react";  
import docImg from '../images/doctor.png';
import bankBtImg from '../images/bank_bottom.png';
import homeImg from '../images/home1.png';
import travelImg from '../images/travel.png';
import { gsap } from "gsap";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";

export const Home = () => {
    useEffect(() => {
        const HeaderEl = document.querySelector('.home');
        if (HeaderEl) {
            HeaderEl.classList.add('on');
        }

        const timeline = gsap.timeline();
        // timeline.from(".text", {
        //   x: -100, 
        //   duration: 1,        
        //   ease: "power2.out",  
        // });
        timeline.fromTo(".t", 
          {autoAlpha: 0, x: -100, y:0,}, 
          {autoAlpha: 1, x:0, y:0, duration:1.25, overwrite:"auto", ease:"expo"}

        );
        
       
    }, []); 
    
   
    return (
        <HomeStyle className="home">
            <div className="home_text">
                <h1 className="title animated fadeInLeft s1">Web
                    <div className="message_wrap">   
                    <div className="message">
                        <div>Coding</div>
                        <div>Creating</div>
                        <div>UI/UX</div>
                    </div>
                    </div>
                    <div className="mb">Publisher</div>
                </h1>
            </div>
            <ToMain>
                <Link to="/portfolio" data-aos="fade-right">
                    <span className="txt">Go to Main</span>
                    <span className="line1"></span><span className="line2"></span><span className="line3"></span><span className="line4"></span>
                </Link>
                <span className="desc" data-aos="fade-left">Made with React</span>
                <div className="skills" data-aos="fade-up">
                  <span><FaHtml5 /></span>
                  <span><FaCss3Alt /></span>
                  <span><FaReact /></span>
                  <span><IoLogoJavascript /></span>
                  <span><FaGitAlt  /></span>
                  <span><FaFigma  /></span>
                  <span><RiNotionFill  /></span>
                </div>
            </ToMain>
            <BgImage>
                <span className="img type1"> <img src={docImg} alt="" /></span>
                <span className="img type4"><img src={bankBtImg} alt="" /></span>
                <span className="img type2"><img src={homeImg} alt="" /></span>
                <span className="img type3"><img src={travelImg} alt="" /></span>
            </BgImage>
        </HomeStyle>
      );
};