import styled from '@emotion/styled'
import { customStyles } from './custom.style';
const { size, weight } = customStyles.font;
const {contWidth, colors, flexOpt, Transition, MediaWidth, FullFixed} = customStyles;

interface PortProps {
    readonly port?: boolean;
}   

export const Section = styled.section<PortProps>`
    max-width:var(--cont-width);
    margin:0 auto;
    padding-bottom:${props => (props.port ? '80px' : '40px')};

    width: 100%;
    padding-top:100px;
    position: relative;
    @media (max-width: ${MediaWidth.pc}) {
        ${contWidth.mobile}
        overflow:hidden;
    }

`
interface ColorProps {
    readonly white?: boolean;
}   
export const SecTittle = styled.h2<ColorProps>`
    ${size.ft38}
    ${weight.bold};
    margin:var(--content-pd) 20px;
    color: ${props => (props.white ? '#fff' : '')};
    text-transform:uppercase;
    @media (max-width: ${MediaWidth.tablet}) {
        ${size.ft26}
        padding:30px 20px;
    }
`

export const HeaderStyle = styled.header`
    ${FullFixed}    
    height:100px;
    transition: box-shadow .4s ease-in-out;
    z-index:90;
    border-bottom:1px solid ${colors.greyE1};
    background:#fff;
    &.none{
        display:none;
    }
    nav a.active{
      color:var(--primary-color);
    }
    .inner{
        ${contWidth.default}
        ${flexOpt.scbAlignCenter}
        .menu{
           display: flex;
        }
        @media (max-width: ${MediaWidth.pc}) {
            ${contWidth.mobile}
        }
        .logo a{
            display: block;
            img{
                width:100%;
            }
            @media (max-width: ${MediaWidth.tablet}) {
               width:120px;
            }
        }
    }
    &.fixed{
        box-shadow:0 6px 10px -5px #d6d6d6;
        border-bottom: none;
        background:#fff;
    }
    @media screen and (max-width: ${MediaWidth.tablet}) {
        height:80px;
        .inner{
            height:100%;
        }
    }
   @media screen and (max-width: ${MediaWidth.tablet}) {
    .inner nav{
      display:none;
    }
  }
`
export const HeaderMenu = styled.ul`
  display: flex;
  gap:20px;
  a{
      ${size.ft18}
      ${weight.bold};
      text-transform:uppercase;
      position:relative;
      &:before{
          content:"";
          position: absolute;
          bottom:0;
          width:0;
          height:2px;
          background:var(--primary-color);
          ${Transition.sec2}
      }
      &:hover:before{
          width:100%;
      }
      @media (max-width: ${MediaWidth.mobile}) {
          ${size.ft16}
      }
  }
 
`
export const HeaderGnb = styled.button`
  display:none;
  :before,:after, .bar{
    content:"";
    display:block;
    width:30px;
    height:2px;
    background:#000;
    margin-bottom:6px;
  }
  @media (max-width: ${MediaWidth.tablet}) {
     display:block;
  }
`
export const MobileMenu = styled.div`
 position:fixed; 
 width:40%;
 height:100%;
 top:0;
 right:0;
 background:#fff;
 padding-top:300px;
 z-index:110;
 transform:translateX(100%);
 transition:all, .3s ease-in-out;
 &.on{
  transform:translateX(0);
 }
 nav ul{
  align-items:center;
  flex-direction:column;
  li{
    margin:16px 0;
  }
  a.active{
    color:var(--primary-color);
  }
 }
`
export const MenuClose = styled.button`
  position:absolute;
  top:80px;
  right:10px;
  :before,:after{
    display:block;
    content:"";
    width:24px;
    height:2px;
    background:#000;
  }
  :before{
    transform:rotate(45deg);
  }
  :after{
    margin-top:-2px;
    transform:rotate(135deg);
  }
`
export const Cover = styled.div`
   position:fixed;
   top:0;
   left:0;
   right:0;
   bottom:0;
   background:rgba(0,0,0,.7);
   z-index:100;
   display:none;
   &.on{
    display:block;
   }
`
export const BtntoTopStyle = styled.button`
    position:fixed;
    bottom:15px;
    width:60px;
    height:60px;
    right:20px;
    border-radius:50%;
    background-color:var(--primary-color);
    z-index:100;
    ${flexOpt.alignCenter}
    align-items:center;
    i{
        display:block;
        width:10px;
        height:10px;
        border-bottom:2px solid #fff;
        border-right:2px solid #fff;
        transform:rotate(-135deg);
        margin-top:10%;
        text-indent:-9999em;
    }
`
export const FooterStyle = styled.footer`
    height:120px;
    padding:var(--content-pd) 0;
    ${size.ft18}
    background-color:var(--primary-color);
    color:#fff;
    text-align:center;
    box-sizing:border-box;
    i{
        display:block;
        margin-top:10px;
        ${size.ft12}
    }
    @media screen and (max-width: ${MediaWidth.tablet}) {
        ${size.ft14}
    }

`