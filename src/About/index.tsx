import {AboutWrap, CareerLi, CareerList, Figure, MyTexts, SkillItemUl, SnsLinks} from "./About.style"
import { SkillItemList } from "./SkillItemsList"
import { gsap } from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import instaIco from '../images/ico_insta.png';
import vueIco from '../images/ico_vue.png';
import reactIco from '../images/logo.svg';
import profile from '../images/profile.jpg';
import AboutSection from "./AboutSection";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    useEffect(() => {
      const animate = (item: HTMLElement) => {
        let x = 0;
        let y= 0;
        const delay = item.dataset.delay;

        if(item.classList.contains("reveal_LTR")){
          x=-100,
          y=0
        } else if(item.classList.contains("reveal_RTR")){
          x=100,
          y=0
        }
        else if(item.classList.contains("reveal_TTB")){
          x=0,
          y=-100
        } else{
          x=0,
          y=100
        
        }
        gsap.fromTo(item, 
          {autoAlpha: 0, x: x, y:y}, 
          {autoAlpha: 1, x:0, y:0, delay:delay, duration:1.25, overwrite:"auto", ease:"expo"}
        );
        
      };
      gsap.utils.toArray<HTMLElement>(".reveal").forEach(item=>{
        ScrollTrigger.create({
          trigger: item,
          start: "14% bottom",
          end: "bottom top",
          onEnter: () => {animate(item)},
          markers:false,
        });
      });


      //주요스킬
      const ani1 = gsap.timeline();
      ani1.fromTo(
        ".major_skills li",  
        { 
          y: -100,           
          autoAlpha: 0       
        },
        { 
          y: 0,          
          ease: "back.out(4)",
          stagger: 0.1,     
          autoAlpha: 1     
        }
      );
      ScrollTrigger.create({
        animation: ani1,
        trigger:".major_skills",
        start: "top top",
        end: "+=1000",
        toggleActions: "play none reverse none",
        scrub:true,
        anticipatePin: 1,
        markers:false,
     })
     

     //커리어
     gsap.utils.toArray<HTMLElement>(".section2 figcaption").forEach(item => {
        gsap.to(item, {
            yPercent: -40,
            ease: "none",
            duration: 0.5,
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              markers: false,
              scrub: 0.5
            }
        });
    });

    //강점
    gsap.fromTo(
      ".section3 .text",
      {
        yPercent: 40,
        autoAlpha: 0,
      },
      {
        yPercent: 0,
        autoAlpha: 1,
        ease: "none",
        duration: 0.5,
        stagger: 0.4, // 라인 간 시간차
        scrollTrigger: {
          trigger: ".section3",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.3,
          markers: false,
        },
      }
    );

    //info
    const targets = gsap.utils.toArray<HTMLElement>(".split");
    targets.forEach((target, index ) => {
          const SplitClient = new SplitType(target, { types: "chars" });
          const chars = SplitClient.chars;

          gsap.fromTo(
            chars,
            {
              yPercent: 100,
              autoAlpha: 0,  
            },
            {
              yPercent: 0,   
              autoAlpha: 1,   
              duration: 1,
              ease: "circ.out",
              stagger: {
                amount: 1,
                from: "random", 
              },
              scrollTrigger: {
                trigger: target,
                start: "top bottom",
                end: "+=400",
                markers: false,
              },
              delay: index * 1,
            }
          );
      });
   
    }, []); 
    
    return (
        <AboutWrap>
          <div className="section_wrap">
            <AboutSection className="major_skills" secTitle="주요 기술">
              <SkillItemUl>  
                <SkillItemList skill={"HTML5/CSS3/SASS"} desc={"W3C에 준수하는 웹표준"}></SkillItemList>	
                <SkillItemList skill={"Jquery/Javascript"} desc={"스크립트 동작 구현"}></SkillItemList>	
                <SkillItemList skill={"반응형웹"} desc={"전 기기 반응하는 반응형"}></SkillItemList>	
                <SkillItemList skill={"웹접근성"} desc={"모두 접근 가능한 접근성"}></SkillItemList>	
              </SkillItemUl>
            </AboutSection>
            <AboutSection className="right section2" secTitle="Career">
                <CareerList>
                  <CareerLi className="free">
                    <Figure className="free">
                        <div className="img"></div>
                    </Figure>
                    <figcaption>FREELANCER</figcaption>
                  </CareerLi>
                  <CareerLi className="left">
                    <Figure className="medical">
                      <div className="img"></div>                        </Figure>
                    <figcaption>헬스케어 서비스<span>대웅제약 그룹사/IDS&TRUST</span></figcaption>
                  </CareerLi>
                  <CareerLi>
                    <Figure className="travel">
                      <div className="img"></div>                        </Figure>
                    <figcaption>모두투어<span>TRAVEL AGENCY</span></figcaption>
                  </CareerLi>
                  <CareerLi className="left">
                    <Figure className="bank">
                      <div className="img"></div>                        </Figure>
                    <figcaption>SC은행<span>애드캡슐소프트/WEB AGENCY</span></figcaption>
                  </CareerLi>
                  <CareerLi>
                    <Figure className="kids">
                      <div className="img"></div>                        </Figure>
                    <figcaption>보육교직원 시스템<span>한국보육진흥원/온앤온정보시스템</span></figcaption>
                  </CareerLi>
                  <CareerLi className="left">
                    <Figure className="koscom">
                      <div className="img"></div>                        </Figure>
                    <figcaption>퇴직연금 시스템<span>KOSCOM/아이티에이앤에스</span></figcaption>
                  </CareerLi>
                </CareerList>
            </AboutSection>
            <AboutSection className="section3">
                <MyTexts >
                  <div className="text">유연한 사고로 문제를 해결하려는 작업자</div>
                  <div className="text">맡은 일을 끝까지 완수하는 열정있는 작업자</div>
                  <div className="text">소통과 협업을 중시하는 작업자</div>
                </MyTexts>
            </AboutSection>
            <AboutSection className="section4" secTitle="MY INFO">
                <MyTexts>
                  <div className="img">
                    <img src={profile} alt="my profile" data-aos="zoom-out-right" />
                  </div>
                  <div className="split">NAME: 이하나</div>
                  <div className="split">Email: lhn1208@naver.com</div>
                </MyTexts>
            </AboutSection>
            <SnsLinks className="reveal reveal_LTR" data-aos="fade-left"> 
                <a href="//www.instagram.com/hanayastagram/?hl=ko" target="_blank" rel="noreferrer"><img src={instaIco} /></a>
                <a href="//hanaya01.tistory.com/" target="_blank" className="tstory" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                        <title>티스토리 로고</title>
                        <g>
                        <path fill="#eb531f" d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"/>
                        <circle cx="229.5" cy="250" r="38" fill="#ffffff" />
                        <circle cx="229.5" cy="350" r="38" fill="#ffffff" />
                        <circle cx="229.5" cy="150" r="38" fill="#ffffff" />
                        <circle cx="330" cy="150.00" r="38" fill="#ffffff" /> 
                        <circle cx="130" cy="150" r="38" fill="#ffffff" />
                        </g>
                    </svg>
                </a>
                <a href="//lhn1208.github.io/vue_port/#/" target="_blank" rel="noreferrer" className="myvue"><div className='tooltip'>Vue 포트폴리오</div> <img src={vueIco} /></a>
                <a href="#" target="_blank" className="myreact" rel="noreferrer"> <img src={reactIco} /></a>
            </SnsLinks>
            
          </div>
        
        </AboutWrap>
    )
}