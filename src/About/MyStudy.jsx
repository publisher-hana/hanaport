import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Study, Box } from './mystudy.style';
import 'swiper/css/pagination';
import 'swiper/css';
import vet from '../images/study_vet.jpg'
import vue from '../images/study_vue.jpg'
import gsap from '../images/study_gsap.jpg'

import { EffectCoverflow, Pagination } from 'swiper/modules';
const MyStudy = () => {
  return (
    <Study>
      <Swiper
           effect={'coverflow'}
          slidesPerView={1.4}
          centeredSlides={true}
          pagination={{ 
            clickable: true,
            type: 'progressbar',
          }}
          modules={[EffectCoverflow, Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 2.4,
            },
            768: {
              slidesPerView: 1.4,
            },
           
          }}
        >
        <SwiperSlide>
            <Box href='https://publisher-hana.github.io/vue-vet-app/'>
              <span className='img'><img src={vet} /></span>
              <dl>
                <dt>수의사 커뮤니티 베터빌</dt>
                <dd>Vue3.js</dd>
              </dl>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box href='https://lhn1208.github.io/vue_port/#/'>
            <span className='img'><img src={vue} /></span>
              <dl>
                <dt>Vue포트폴리오</dt>
                <dd>Vue2.js</dd>
              </dl>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box href='https://lhn1208.github.io/myport/demo/study/gsap/gsap01.html'>
            <span className='img'><img src={gsap} /></span>
              <dl>
                <dt>Gsap-애니메이션 라이브러리</dt>
              </dl>
            </Box>
        </SwiperSlide>
       
      </Swiper>
    </Study>
  )
}

export default MyStudy