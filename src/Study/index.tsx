import { MyStudy, MyStudyUl } from "Study/mystudy.style"
import vet from '../images/study_vet.jpg'
import vue from '../images/study_vue.jpg'
import gsapImg from '../images/study_gsap.jpg'
import fasatEat from  '../images/study_fast_eat.jpg'
import ciya from  '../images/ciyatrip.jpg'
import { Section, SecTittle } from "styles/common.style"

const Study = ()  =>{
  return (
    <>
      <MyStudy>
        <Section>
          <SecTittle white data-aos="zoom-out-down">My Study</SecTittle>
          <MyStudyUl className="study-list">
            <li data-aos="flip-left">
              <a href='https://publisher-hana.github.io/ciyatrip/' target='_blank' rel="noopener noreferrer">
                <figure className='img'><img src={ciya} alt='' /></figure>
                <dl>
                  <dt>Trip WebSite [Responsive]</dt>
                  <dd>React & Tailwind</dd>
                </dl>
              </a>
            </li>
            <li data-aos="flip-left">
              <a href='https://publisher-hana.github.io/vue-fast-eat/' target='_blank' rel="noopener noreferrer">
                <figure className='img'><img src={fasatEat} alt='' /></figure>
                <dl>
                  <dt>Fast Eat</dt>
                  <dd>Vue3.js & Sass & API</dd>
                </dl>
              </a>
            </li>
            <li data-aos="flip-left">
              <a href='https://publisher-hana.github.io/vue-vet-app/' target='_blank' rel="noopener noreferrer">
                <figure className='img'><img src={vet} alt='' /></figure>
                <dl>
                  <dt>수의사 커뮤니티 베터빌</dt>
                  <dd>Vue3.js</dd>
                </dl>
              </a>
            </li>
            <li data-aos="flip-left">
              <a href='https://lhn1208.github.io/vue_port/#/' target='_blank' rel="noopener noreferrer">
              <figure className='img'><img src={vue} alt='' /></figure>
                <dl>
                  <dt>Vue포트폴리오</dt>
                  <dd>Vue2.js</dd>
                </dl>
              </a>
            </li>
            <li data-aos="flip-left">
              <a href='https://lhn1208.github.io/myport/demo/study/gsap/gsap01.html' target='_blank' rel="noopener noreferrer">
              <figure className='img'><img src={gsapImg} alt='' /></figure>
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