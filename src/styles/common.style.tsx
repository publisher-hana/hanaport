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
    padding:var(--content-pd) 20px;
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