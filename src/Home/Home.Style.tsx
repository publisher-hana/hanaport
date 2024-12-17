import styled from '@emotion/styled'
import { customStyles } from 'styles/custom.style';
const { size, weight } = customStyles.font;
const {MediaWidth, FullFixed } = customStyles;

export const HomeStyle = styled.main`
    ${FullFixed}
    z-index:900;
    background-color:#000;
    overflow:hidden;
    .title{
        position:relative;   
        margin-top:180px;
        margin-left:200px;
        line-height:1.4;
        z-index:950;
        font-size:102px;
        ${weight.bold}
        color:#fff;
        opacity:0;
        @media screen and (max-width: 1540px) {
          color:var(--primary-color);
        }
        @media screen and (max-width: ${MediaWidth.tablet}) {
          margin-left:5rem;
          padding-top: 10rem; 
          font-size: 5rem;
          .message_wrap{display: none;}
        }
    }
    .message_wrap{position: relative; overflow: hidden; height: 130px; text-transform: uppercase; white-space: nowrap; color: #333;font-size: 48px; font-weight: 100;line-height: 1.5;}
    .message {display: block; position: absolute; top: 12.5rem; overflow: hidden; color: #fff; font-size: 6.25rem; background-color: var(--primary-color);
  -webkit-animation: openclose 5s ease-in-out infinite; animation: openclose 5s ease-in-out infinite;}
    .message div{padding-left: 14px; font-size: 80px; font-family: var(--body-font);}
   
`

export const ToMain = styled.div`
    position:relative;
    margin-left:200px;
    z-index:950;
    a{
        display: inline-block;
        position: relative;
        margin-top:2rem;
        ${size.ft20}
        color:#fff;
        border:1px solid #fff;
        .txt{
            display: block; 
            padding: 1rem 1.4rem; 
            box-sizing: border-box;
        }
        *[class*="line"]{
            position: absolute; 
            display: block; 
            background-color: var(--primary-color); 
            transition: all .4s ease;
        }
        .line1{top: 0; width: 0; height: 1px; }
        .line2{top: 0; right: 0; width: 1px; height:0; }
        .line3{bottom: 0; right: 0; width: 0; height: 1px; }
        .line4{bottom: 0; left: 0; width: 1px; height:0;}
        &:hover{
            border:0;
            .line1, .line3{
                width:100%;
            }
            .line2, .line4{
                height:100%;
            }
        }
    }
    .desc{
        display: block;
        margin-top:2rem;
        color:#fff;
        ${size.ft16}
        @media screen and (max-width: ${MediaWidth.mobile}) {
            ${size.ft14}
        }
    }
    @media screen and (max-width: ${MediaWidth.tablet}) {
        margin-left:40px;
        .txt{
            ${size.ft16}
        }
    }
`

export const BgImage = styled.div`
    position:relative;
    .img{display: inline-block; position: absolute; right: -100%; bottom: -100%; transform: rotate(-45deg); animation-fill-mode: forwards; transition: ease; opacity: 0;}
    .type1{animation-name: fadeDiagonal1; animation-duration: 1s;}
    .type2{animation-name: fadeDiagonal2; animation-duration: 3s;}
    .type3{animation-name: fadeDiagonal3; animation-duration: 2.4s;}
    .type4{animation-name: fadeDiagonal4; animation-duration: 2s;}
    @media (max-width: 1540px) {
        &:before{
            content:"";
            ${FullFixed}
            z-index:910;
            background:rgba(0,0,0,.7);
        }
    }
    @media screen and (max-width: ${MediaWidth.pc}) {
       .type1,.type4{display: none;}
    }
    @media screen and (max-width: ${MediaWidth.tablet}) {
        .type1{right:-274px; bottom: -882px; display: block; opacity: 1; animation: none;}
    }
    @media screen and (max-width: ${MediaWidth.mobile}) {
        .type3{animation-name: fadeDiagonal3_mb;}
    }
`
export const Article = styled.article`
    display: flex;
    align-items: center;
    gap:20px;
    margin-bottom:20px;
    img{display: block; width:100%;}
    >div{
        flex: 1;
        flex-basis:50%;
        max-width:50%;
    }
    .desc{
        p{
            margin-bottom:20px;
            line-height:1.4;
            word-break: keep-all;
        }
    }
`