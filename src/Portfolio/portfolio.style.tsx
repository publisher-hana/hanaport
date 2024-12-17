import styled from '@emotion/styled'
import { customStyles } from '../styles/custom.style';
const { size, weight } = customStyles.font;
const {flexOpt, Transition, MediaWidth } = customStyles;


export const TabListStyle = styled.ul`
    ${flexOpt.alignCenter}
    margin-bottom:var(--content-pd);
    opacity: 0;
    li{
        margin:0 6px;
        &.on button:after{
            content:"";
            position:absolute;
            bottom:2px;
            left:0;
            width:100%;
            height:8px;
            background-color:rgba(238,163,3,.6);
            z-index:-1;
        }
    }
    button{
        position:relative;
        z-index:2;
        ${size.ft16}
        text-transform:uppercase;        
    }@media (max-width: ${MediaWidth.mobile}) {
        li{
            margin:0;
        }
        button{
            ${size.ft14}
        }
    }

`
export const PortItemsStyle = styled.ul`
    display:grid;
    grid-template-columns:repeat(3,33.3%);
    justify-content:center;
    row-gap:80px;
    opacity: 0;
    @media (max-width: ${MediaWidth.pc}) {
        grid-template-columns:repeat(2,1fr);
    }
    @media (max-width: ${MediaWidth.tablet}) {
        grid-template-columns:repeat(1,1fr);
        row-gap:26px;
    }
    li{
        position:relative;
        ${Transition.width}
    }
    a{
        display:block;
        width:100%;
        text-align:center;
        img{
            width:100%;
            height:100%;
        }
        &:hover{
            h3:after{
                width:100%;
            }
            figure{
                transform:translateY(-20px);
            }
        }
    }

`
export const PortFigure = styled.figure`
    position:relative;
    height:270px;
    ${Transition.sec4}
    @media (max-width: ${MediaWidth.pc}) {
        width:84%;
        height:auto;
        margin:0 auto;
    }
    .mb_img{
        position:absolute;
        right:0;
        bottom:0;
        width:30%;
        height:80%;
        overflow:hidden;
    }
    &.only_mb_img{
        img{
            width:auto;
            height:270px;
        }
    }
`
export const PortInfo = styled.figcaption`
    margin-top:3rem;
    text-align:center;
    h3{
       position:relative;
       display:inline-block;
       margin-bottom:1rem;
       ${size.ft20} 
       ${weight.bold}
       span{
            position:relative;
            z-index:2;
            text-transform:uppercase;
       }
       &:after{
         content:"";
         position:absolute;
         top:0;
         left:0;
         width:0;
         height:100%;
         background-color:var(--primary-color);
         ${Transition.width}
         z-index:0;
       }
    }
    .info{
        li{
            text-transform:uppercase;
            line-height:2;
        }
    }
`
export const Progress = styled.div`
    position:fixed;
    top:0;
    width:100%;
    height:6px;
    background:rgba(0,0,0,.4);
    z-index:100;
    .progress-bar{
        width:0;
        height:6px;
        background:var(--primary-color);
        ${Transition.sec3}
    }
`
;
