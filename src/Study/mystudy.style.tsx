import styled from '@emotion/styled'
import { MediaWidth } from 'styles/variables/variables'

export const MyStudyStyle =styled.div`
  .swiper-slide{
    overflow:hidden;
  }
`

export const MyStudy = styled.div`
  background:#000;
  padding-top:200px;
  padding-bottom:400px;
  h2{
    margin-bottom:100px;
  }
  @media (max-width: ${MediaWidth.pc}) {
    padding-top:100px;
  }
`
export const MyStudyUl = styled.ul`
  display:grid;
  grid-template-columns:repeat(3,33.3%);
  gap:20px;
  li{
    margin-top:80px;
    width:100%;
    img{
      width:100%;
      height:270px;
    }
    dl{
      margin-top:10px;
      line-height:1.2;
      font-size:18px;
      color:#fff;
    }
  }
  @media (max-width: ${MediaWidth.pc}) {
      grid-template-columns:repeat(2,1fr);
  }
  
`
export const StudyLay = styled.div`
  .swiper{
    padding-bottom:58px;
  }
  .swiper-pagination{
    width:40%;
    top:auto;
    bottom:0px;
    left:50%;
    margin-left:-20%;
    background:#eee;
  }
`

export const Box = styled.a`
  display:block;
  .img{
    width:800px;
    height:600px;
    margin:0 auto;
    img{
      width:100%;
      height:100%;
      object-fit:cover;
    }
  }
  dl{
    margin-top:10px;
    color:#fff;
    font-size:1.2rem;
    line-height:1.2;
  }
  
`