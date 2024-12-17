import { css } from '@emotion/react';

export const FontFamily = {
    default:css`
        font-family: 'Noto Sans KR', sans-serif;
    `
};
export const FONTSTYLE = {
    size:{
        ft11:css`
            font-size:11px;
        `,
        ft12:css`
            font-size:12px;
        `,
        ft13:css`
            font-size:13px;
        `,
        ft14:css`
            font-size:14px;
        `,
        ft16:css`
            font-size:16px;
        `,
        ft17:css`
            font-size:17px;
        `,
        ft18:css`
            font-size:18px;
        `,
        ft20:css`
            font-size:20px;
        `,
        ft22:css`
            font-size:22px;
        `,
        ft24:css`
            font-size:24px;
        `,
        ft26:css`
            font-size:26px;
        `,
        ft28:css`
            font-size:28px;
        `,
        ft30:css`
            font-size:30px;
        `,
        ft38:css`
            font-size:38px;
        `
    },
    weight:{
       /** font-weight: 300; */
        light: css`
            font-weight: 300;
        `,
        /** font-weight: 400; */
        normal: css`
            font-weight: 400;
        `,
        /** font-weight: 500; */
        medium: css`
            font-weight: 500;
        `,
        /** font-weight: 600; */
        semiBold: css`
            font-weight: 600;
        `,
        /** font-weight: 700; */
        bold: css`
            font-weight: 700;
        `,
    }
}
;
