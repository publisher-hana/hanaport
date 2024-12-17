import { css } from '@emotion/react';

export const colors = {
    white: '#fff',
    blue: '#00befc',
    navy: '#4e789d',
    grey6: '#666',
    greyE1:'#e1e1e1',
    geryC:'#ccc',
    greyF2:'#f2f2f2',
    black1f:'#1f1f1f;',
};
export const MediaWidth={
    pc: '1024px',
    tablet:'768px',
    mobile:'480px'
}
export const contWidth={
    default:css`
        width:1200px;
        margin:0 auto;
    `,
    mobile:css`
        width:94vw;
        margin:0 auto;
    `
}
        
    
/* flex */
export const flexOpt={
    default:css`
        display:flex;
    `,
    scb:css`
        display:flex;
        justify-content:space-between;
    `,
    scbAlignCenter:css`
        display:flex;
        justify-content:space-between;
        align-items:center;
    `,
    alignCenter:css`
        display:flex;
        justify-content:center;
    `

}

/* border-radius */
export const LabelStyle ={
    rdSize:{
       default:css`
            border-radius:30px;
       `,
       small:css`
        border-radius:10px;
       `,
       round:css`
       border-radius:50%;
      `
    },
    border:{
        none:css`
            border:none;
        `,
        blueSolid:css`
            border:1px solid ${colors.blue};
            color:${colors.blue};
        `,
        greySolid:css`
            border:1px solid ${colors.geryC};
            color:${colors.geryC};
        `
    },
    labeBg:{
        gradient:css`
            background:linear-gradient(85.66deg, #01AFFE 33.71%, #4BDE97 75.67%);
            color: ${colors.white};
        `,
        boldGreen:css`
            background-color:#23425c;
            color: ${colors.white};
        `,
        orange:css`
            background-color:#fc7900;
            color: ${colors.white};
        `
    },
}
/* 말줄임 */
export const ellipsis = {
    default:css`
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    `,
    line2: css`
        display: -webkit-box;
        overflow:hidden;
        text-overflow:ellipsis;
        word-break:keep-all;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
    `
}
/* 마우스 over */
export const MouseOver = { 
    default:css`
        &:hover{
            text-decoration: underline;
        }
    `,
    color:css`
        &:hover{
            color: ${colors.blue};
        }
    `,
    btnHover:css`
        &:hover{
            opacity:.9;
            box-shadow:1px 1px 10px rgba(0,0,0,.1);
        }
    `
}
/*scroll style */
export const ScrollStyle= css`
        padding:12px 15px;
        overflow-y:auto;
        border:1px solid #e6e6e6;
        box-sizing:border-box;
        &::-webkit-scrollbar{
            width:4px;
            background-color:#eaeaea;
        }
        &::-webkit-scrollbar-thumb{
            background-color:#d6d6d6;
        }
    `
/* transition */
export const Transition = {
    default: css`
        transition: all ease .3s;
    `,
    sec2: css`
        transition: all ease .2s;
    `,
    sec3: css`
        transition: all ease .2s;
    `,
    sec4: css`
        transition: all ease .4s;
    `,
    sec5: css`
        transition: all ease .5s;
    `,
    width: css`
        transition: width ease .5s;
    `
}

export const PosTopCenter = css`
        position:absolute;
        top:50%;
        transform:translateY(-50%);
    `

export const FullFixed =css`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
`