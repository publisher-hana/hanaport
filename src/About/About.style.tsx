import styled from '@emotion/styled'
import { customStyles } from 'styles/custom.style';
const { size } = customStyles.font;
const {MediaWidth } = customStyles;
import ImgFree from '../images/work_free.jpg';
import ImgMedical from '../images/work_medical.jpg';
import ImgTravel from '../images/work_travel.jpg';
import ImgBank from  '../images/work_sc.jpg';
import ImgKids from  '../images/work_kids.jpg';
import ImgKoscom from  '../images/work_koscom.jpg';
import BgCounter from  '../images/some-facts-bg.png';
import { contWidth } from 'styles/variables/variables';

export const AboutWrap = styled.div`
    position:relative;
    margin:0;
    padding:0;
    background:#000;
    padding-bottom:4rem;
    overflow-x:hidden;
    .section_wrap{
        position:relative;
    }
  .section_wrap{
     padding-top:10rem;
  }
  counter-reset: section-counter; 
  section::before{
    counter-increment: section-counter; 
    content:counter(section-counter, decimal-leading-zero);
    position:absolute;
    top:0;
    left:0;
    color:#fff;
    opacity:0.09;
    font-size:35rem;
    font-weight:300;
    letter-spacing:-1.6rem;
  }
 
  .close{
    position:absolute;
    top:20px;
    right:20px;
    border:none;
    &:before{
      content:"";
      display:block;
      width:38px;
      height:38px;
    }
  }
  @media screen and (max-width: ${MediaWidth.pc}) {
   section:before{
    font-size:20rem
   }
  }
 
   
`;
export const AbutSec = styled.section`
  position:relative;  
  max-width:var(--cont-width-wide);
  margin:0 auto;
  color:#fff;
  h2{
    margin-bottom:6rem;
  }
  &.major_skills{
    padding-top:20rem;
     &:before{
       top:20rem;
     }
     .content{
        padding-top:24rem;
      } 
  }
  
  &.right{
    text-align:right;
     &:before{
      left:auto;
      right:0;
     }
  }

  &+section{
    margin-top:6rem;
  }
  .content{
    padding-top:24rem;
  }    
 
  .reveal{
    opacity:0;
  }
 
  @media screen and (max-width: ${MediaWidth.pc}) {
    ${contWidth.mobile}
    overflow:hidden;
    &.major_skills{
      padding-top:8rem;
    }
    .content{
      padding-top:11rem;
    }    
  }
`
export const SkillItemUl  = styled.ul`
  display: flex;
  flex-wrap:wrap;
`
export const SkillItem =styled.li`
  width:25%; 
  height: 21rem; 
  padding-bottom: var(--content-pd); 
  cursor: pointer; 
  position: relative;
  span{
    font-size:1.8rem;
  }
  .front{
    transform: rotateY(0deg); 
  }
  .back{
      position: absolute; 
      top:0; 
      left: 0;  
      color:#111; 
      background-color: #fff; 
      transform: rotateY(-180deg); 
      word-break:keep-all;
      line-height:1.6;
      opacity: 0;
  }
  &:hover{
      .front{transform: rotateY(-180deg); opacity: 0;}
      .back{transform: rotateY(0deg); opacity: 1;}
      .back:after{position: absolute; top: -7px; left: -7px; width: 100%; height: 100%; padding: 7px;border-radius: 50%; box-shadow: 0 0 0 4px #fff; content: '';} 
  }
  &>div{
      display: table; 
      width: 210px; 
      height: 210px; 
      border-radius: 50%; 
      font-size: 1.4rem; 
      text-align: center; 
      color:#fff; 
      background: rgba(255,255,255,0.1); 
      span{
          display: table-cell; 
          vertical-align: middle;
      }
  }
  @media screen and (max-width: ${MediaWidth.pc}) {
      width:50%;
       padding-bottom:0;
      &>div{
        width:160px;
        height:160px;
        margin:0 auto;
        span{
            ${size.ft16}
        }
      }
      .back{
          left:27%;
      }
  }
  @media screen and (max-width: ${MediaWidth.tablet}) {
      width:100%;
      height:auto;
      cursor:auto;
      &>div{
          margin:0 auto 16px;
      }
      &:hover{
          .front{
              transform: rotateY(0deg); 
              opacity:1;
          }
          .back{
              display:none;
          }
      }
  }
`
export const Bgfixed = styled.div`
  position:relative;
  height:60vh;
  z-index: 0;
  &:after{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:url(${BgCounter}) no-repeat ;
    background-size:cover;
    background-attachment:fixed;
    z-index:-1;
  }
  @media screen and (max-width: ${MediaWidth.tablet}) {
    height:40vh;
  }
`
export const CounterStyle = styled.ul`
  max-width:var(--cont-width-wide);
  margin:16rem auto;
  display:grid;
  grid-template-columns:repeat(4, 1fr);
  height:100%;
  align-items:center;
  color:#fff;
  text-align:center;
  li{
    display:flex;
    flex-direction:column;
    gap:4rem;
    .ico{
      font-size:2.8rem;
    }
    strong{
      display:block;
      font-size:6rem;
      color:var(--primary-color);
    }
    .text{
      font-size:1.8rem;
    }
  }
  @media screen and (max-width: ${MediaWidth.tablet}) {
    grid-template-columns:repeat(2, 1fr);
    li{
      gap:2rem;
      strong{
        font-size:4rem;
      }
    }
  }
`
export const MyTexts = styled.div`
  position:relative;
  >div{
    margin-top:2rem;
    font-size:4rem;
  }
  .img{ 
    display:flex;
    justify-content:center;
    align-items:center;
    width:140px;
    height:140px;
    border-radius:50%;
    border:2px solid var(--primary-color);
  }
  .img img{
    width:120px;
    height:120px;
    border-radius:50%;
    object-fit:cover
  }
  @media screen and (max-width: ${MediaWidth.pc}) {
     >div{
      font-size:2rem;
    }
  }
`
export const CareerList = styled.ul`
`
export const CareerLi = styled.li`
 position:relative;
 &.left{
   text-align:left;
   figure .img{
    left:6rem;
    right:auto;
   }
 }
 &+li{
    margin-top:24rem;
 }
 
 figcaption{
  position:relative;
  z-index:10;
  margin-top:-5vh;
  font-size:4rem;
  color:#fff;
  span{
    display:block;
    font-size:2.8rem;
  }
}
@media screen and (max-width: ${MediaWidth.pc}) {
&+li{
    margin-top:18rem;
 }
 
}
`
export const Figure = styled.figure`
 position: relative;
  padding-bottom:400px;
  width:100%;
  overflow:hidden;
  box-sizing:border-box;
  .img{
     width:1000px;
    height:400px;
    position:absolute;
    top:0;
    right:6rem;
    background-repeat:no-repeat;
    background-size:cover;
    z-index:1;
    filter:saturate(0);
    transition:all 1s;
  }
 
  .img:hover{
     filter: saturate(100%);
     transform: scale(1.025);
  }

 &.free{
    .img{
      background-image:url(${ImgFree});
    }
  }
 &.medical{
  .img{
    background-image:url(${ImgMedical});
  }
 }
 &.travel{
   .img{
    background-image:url(${ImgTravel});
  }
 }
 &.bank{
   .img{
    background-image:url(${ImgBank});
  }
 }
 &.kids{
   .img{
    background-image:url(${ImgKids});
  }
 }
 &.koscom{
   .img{
    background-image:url(${ImgKoscom});
  }
 }
 @media screen and (max-width: ${MediaWidth.pc}) {
  padding-bottom:326px;
  .img{
    width:100%;
    height:330px;
  }
}
@media screen and (max-width: ${MediaWidth.tablet}) {
   padding-bottom:28rem;
  .img{
    height:200px;
  }
}
  
`

export const SnsLinks = styled.div`

    margin-top:20rem;
    display:flex;
    justify-content:center;
    gap:14px;
    a{
        position:relative;
        &:hover{
            .tooltip{
                display:block;
            }
        }
    }
    .tstory{
        display:inline-block;
        width:52px;
        height:52px;
    }
    .myvue{
        margin-top:7px;
    }
    .myreact{
        margin-left:-16px;
        img{
            height:100%;
        }
    }
    .tooltip{
        display:none;
        position:absolute;
        top:-42px; 
        left:0;
        width:114px;
        height:14px;
        line-height:1px;
        font-size:13px;
        padding:14px 10px;
        border-radius:6px;
        background-color:#fff;
        &:before{
            content:"";
            position:absolute;
            bottom:-5px;
            left:15%;
            transform: rotate(180deg); 
            border-bottom: 10px solid #fff; 
            z-index:10;
            border-left: 8px solid transparent; border-right: 8px solid transparent;
        }
    }
    @media screen and (max-width: ${MediaWidth.tablet}) {
      a{
        width:40px !important;
        &.myreact{
          width:56px !important;
        }
        img{
          max-width:100%;
        }
      }
    }
`
