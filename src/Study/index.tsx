import { MyStudy, MyStudyUl } from "Study/mystudy.style"
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import vet from '../images/study_vet.jpg'
import vue from '../images/study_vue.jpg'
import gsapImg from '../images/study_gsap.jpg'
import fasatEat from  '../images/study_fast_eat.jpg'
import ciya from  '../images/ciyatrip.jpg'
import { Section, SecTittle } from "styles/common.style"
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Study = ()  =>{
  
  useEffect(() => {
    const rows = [];
    const allItems = document.querySelectorAll(".study-list li");

    // 3개씩 그룹화
    for (let i = 0; i < allItems.length; i += 3) {
      rows.push(Array.from(allItems).slice(i, i + 3));
    }

    rows.forEach((item, i) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: "section", 
          start: "top 20%",//트리거 요소상단,뷰포트(scroll-start)
          end: "bottom bottom",
          scrub: 1,
          markers:false,
        },
      }).fromTo(
        item, // 현재 item에만 애니메이션 적용
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1,  delay: (i % 3) * 0.2 }
      );
    });
 
}, []); 


  return (
    <>
      <MyStudy>
        <Section>
          <SecTittle white>My Study</SecTittle>
          <MyStudyUl className="study-list">
            <li>
              <a href='https://publisher-hana.github.io/ciyatrip/' target='_blank' rel="noopener noreferrer">
                <span className='img'><img src={ciya} alt='' /></span>
                <dl>
                  <dt>Trip WebSite [Responsive]</dt>
                  <dd>React & Tailwind</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href='https://publisher-hana.github.io/vue-fast-eat/' target='_blank' rel="noopener noreferrer">
                <span className='img'><img src={fasatEat} alt='' /></span>
                <dl>
                  <dt>Fast Eat</dt>
                  <dd>Vue3.js & Sass</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href='https://publisher-hana.github.io/vue-vet-app/' target='_blank' rel="noopener noreferrer">
                <span className='img'><img src={vet} alt='' /></span>
                <dl>
                  <dt>수의사 커뮤니티 베터빌</dt>
                  <dd>Vue3.js</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href='https://lhn1208.github.io/vue_port/#/' target='_blank' rel="noopener noreferrer">
              <span className='img'><img src={vue} alt='' /></span>
                <dl>
                  <dt>Vue포트폴리오</dt>
                  <dd>Vue2.js</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href='https://lhn1208.github.io/myport/demo/study/gsap/gsap01.html' target='_blank' rel="noopener noreferrer">
              <span className='img'><img src={gsapImg} alt='' /></span>
                <dl>
                  <dt>Gsap-애니메이션 라이브러리</dt>
                </dl>
              </a>
            </li>
            
          </MyStudyUl>
        </Section>
      </MyStudy>
    </>
  )
}

export default Study 