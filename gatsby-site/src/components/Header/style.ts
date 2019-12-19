import styled, { createGlobalStyle } from 'styled-components';
import { 
  Button,
  Layout
 } from "antd";
import { 
  blackColor, 
  mainColor,
  whiteColor,
  maxLength,
  fontFamilyRegular,
  boxShadown,
  fontWeightNormal,
  grayColor,
  buttonHoverColor
} from '../style/design-specification';

import { 
  Ul,
  Li
 } from '../style/normailze';

export const DropdownDiv = styled.div`
  display: none;
  position: absolute;
  background-color: ${whiteColor};
  ${boxShadown};
  padding: 32px 36px 40px;
`;


export const DropdownLink = styled.a`
  text-align: center;
  font-size: 16px;
  display: inline-block;
  width: 104px;
  height: 100%;
  color: ${blackColor};
  ${fontFamilyRegular};
  &:hover{
    color: ${mainColor}!important;
    ${DropdownDiv} {
      display: block;
    }
    &:after{
      transform: rotate(135deg);
      margin-bottom: -1px;
    }
  }
  &:after{
    content: ' ';
    display: inline-block;
    width: 7px;
    height: 7px;
    border: 2px solid;
    border-color: transparent transparent #000 #000;
    border-radius: 10%;
    transform: rotate(-45deg);
    margin-left: 7px;
    margin-bottom: 3px;
  }
`;

export const DropdownItem = styled.div`
  display: inline-block;
  vertical-align: top;
  margin: 0 28px;
`
export const DropdownTitle = styled.h1`
  height: 32px;
  color: ${blackColor};	
  ${fontFamilyRegular};
  ${fontWeightNormal};
  font-size: 16px;	
  letter-spacing: 1px;
  line-height: 16px;
  border-bottom: 2px solid #E7E7E8;
`;

export const DropdownContent = styled.a`
  display:block;
  text-align:left;
  font-size: 16px;
  line-height: 1;
  color: ${grayColor};
  margin: 16px 0;
  &:hover{
    color: ${mainColor}!important;
  }
`;



export const Center = styled.div`
  ${maxLength}
  height: 100%;
  margin: 0 auto;
`;

export const LayoutHeader = styled(Layout.Header)`
  height: 74px; 
  line-height: 74px;
  background: #FFFFFF;
  width: 100%;
`;

export const Logo = styled.div`
  background: url("data:image/svg+xml,%3Csvg id='图层_1' data-name='图层 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 34.63'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23191140%7D.cls-2%7Bfill:%23fc5f3a%7D%3C/style%3E%3C/defs%3E%3Cg id='图层_1-2' data-name='图层 1'%3E%3Cpath class='cls-1' d='M270.33 66.37a14.16 14.16 0 0 1-.46 3.6 12.73 12.73 0 0 1-12.14 9.74c-7 0-12.61-6-12.61-13.34S250.77 53 257.73 53a12.35 12.35 0 0 1 9.7 4.81 7.23 7.23 0 0 1-4.16 2.21 7.82 7.82 0 0 0-5.52-2.31c-4.49 0-8.12 3.91-8.12 8.7a8.42 8.42 0 0 0 8.12 8.69 8.1 8.1 0 0 0 7.41-5.1h-7.33a8.33 8.33 0 0 1 1.33-4.45h11.14c.01.26.03.55.03.82z' transform='translate(-245.11 -53.04)'/%3E%3Cpath id='_复合路径_' data-name='复合路径' class='cls-1' d='M298.29 67.25a8.84 8.84 0 0 0-1.81-2.86 8.31 8.31 0 0 0-2.69-1.91 7.87 7.87 0 0 0-6.58 0 8.57 8.57 0 0 0-2.71 1.91 9 9 0 0 0-1.81 2.86 9.47 9.47 0 0 0 0 7 8.9 8.9 0 0 0 1.81 2.86 8.61 8.61 0 0 0 2.71 1.89 8 8 0 0 0 6.58 0 8.34 8.34 0 0 0 2.69-1.92 8.74 8.74 0 0 0 1.81-2.85 9.35 9.35 0 0 0 0-7zm-4.11 5.22a4.57 4.57 0 0 1-.86 1.42 3.75 3.75 0 0 1-1.27.94 3.48 3.48 0 0 1-1.55.35 3.55 3.55 0 0 1-1.56-.35 4 4 0 0 1-1.27-.94 5 5 0 0 1-.86-1.42 5 5 0 0 1-.31-1.72 5 5 0 0 1 .31-1.72 4.85 4.85 0 0 1 .86-1.42 4.11 4.11 0 0 1 1.27-.94 3.56 3.56 0 0 1 1.56-.36 3.49 3.49 0 0 1 1.55.36 3.89 3.89 0 0 1 1.27.94 4.46 4.46 0 0 1 .86 1.42 4.77 4.77 0 0 1 .32 1.72 4.83 4.83 0 0 1-.32 1.71z' transform='translate(-245.11 -53.04)'/%3E%3Cpath id='_复合路径_2' data-name='复合路径 2' class='cls-2' d='M392.51 53.09c-7 0-12.61 6-12.61 13.33s5.66 13.33 12.61 13.33 12.6-6 12.6-13.33-5.64-13.33-12.6-13.33zm0 22.11a8.72 8.72 0 0 1 0-17.4c4.5 0 8.12 3.91 8.12 8.71a8.42 8.42 0 0 1-8.12 8.69z' transform='translate(-245.11 -53.04)'/%3E%3Cpath id='_路径_' data-name='路径' class='cls-2' d='M377.54 53.18v26.57h-4.47V54.48a7.36 7.36 0 0 1 4.47-1.3z' transform='translate(-245.11 -53.04)'/%3E%3Cpath class='cls-1' d='M365.79 78.88a4.68 4.68 0 0 1-.3 1.53 5 5 0 0 1-.87 1.43 4 4 0 0 1-1.27.94 3.54 3.54 0 0 1-1.54.34 3.69 3.69 0 0 1-1.56-.34 2.83 2.83 0 0 1-.64-.39h-.05a7.41 7.41 0 0 0-4.32 2 6.6 6.6 0 0 0 .58.7 9 9 0 0 0 2.7 1.91 8 8 0 0 0 6.58 0c.25-.12.49-.23.72-.36a8.61 8.61 0 0 0 2-1.57 8.74 8.74 0 0 0 1.8-2.86 9.2 9.2 0 0 0 .68-3.49V62.57a7.34 7.34 0 0 0-4.46-1.26v1.51a7.22 7.22 0 0 0-.71-.35 7.78 7.78 0 0 0-6.59 0 8.57 8.57 0 0 0-2.69 1.9 9 9 0 0 0-1.85 2.87 9.23 9.23 0 0 0-.67 3.5 9.35 9.35 0 0 0 .67 3.5 4.05 4.05 0 0 0 .16.37 8.91 8.91 0 0 0 1.65 2.49 8.71 8.71 0 0 0 2 1.56 5.55 5.55 0 0 0 .69.35 7.87 7.87 0 0 0 6.59 0 6.13 6.13 0 0 0 .7-.35zm-.31-6.42a4.47 4.47 0 0 1-.86 1.42 3.94 3.94 0 0 1-.86.74c-.13.07-.27.15-.41.21a3.55 3.55 0 0 1-3.11 0c-.14-.06-.27-.14-.4-.21a3.64 3.64 0 0 1-.87-.74 4.57 4.57 0 0 1-.86-1.42 5 5 0 0 1-.31-1.72 1.08 1.08 0 0 1 0-.18 4.7 4.7 0 0 1 .3-1.55 4.63 4.63 0 0 1 .86-1.42 4 4 0 0 1 1.27-.94 3.6 3.6 0 0 1 3.11 0 4 4 0 0 1 1.27.94 4.52 4.52 0 0 1 .86 1.42 4.84 4.84 0 0 1 .31 1.55 1.08 1.08 0 0 1 0 .18 4.92 4.92 0 0 1-.3 1.71zM351.47 68.66v11.07H347v-9a1.08 1.08 0 0 0 0-.18 5 5 0 0 0-.31-1.54 4.34 4.34 0 0 0-.86-1.42 3.89 3.89 0 0 0-1.27-.94 3.48 3.48 0 0 0-3 0h-.07a4.07 4.07 0 0 0-1.27.94 4.6 4.6 0 0 0-.86 1.42 4.69 4.69 0 0 0-.3 1.54 1.09 1.09 0 0 0 0 .18v9h-4.49V62.55A7.36 7.36 0 0 1 339 61.3v2.09a7.83 7.83 0 0 1 4.09-1.61h.7a7.84 7.84 0 0 1 3.2.68 7.42 7.42 0 0 1 4.48 6.2zM282.12 62a7.34 7.34 0 0 1-.23 1.56 6.84 6.84 0 0 1-1.11 2.78 3.18 3.18 0 0 0-1.23.34 3.94 3.94 0 0 0-1.26.91 4.81 4.81 0 0 0-.87 1.43 4.94 4.94 0 0 0-.3 1.72v9h-4.47V62.55a8 8 0 0 1 3.74-1.25h.74v1.54a8.3 8.3 0 0 1 5-1 .54.54 0 0 1-.01.16z' transform='translate(-245.11 -53.04)'/%3E%3Cpath id='_路径_2' data-name='路径 2' class='cls-1' d='M325.69 61.73l-6.4 17.8a11.54 11.54 0 0 1-2.38.25 9.74 9.74 0 0 1-2.2-.25l-2.82-9.77-2.82 9.7a11.45 11.45 0 0 1-2.35.25 12.42 12.42 0 0 1-2.2-.2l-6.4-17.76h4.75l3.89 10.89 2.9-10.54h4.48L317 72.63l3.92-10.87h4.78z' transform='translate(-245.11 -53.04)'/%3E%3Cpath class='cls-1' d='M331.69 54.67v4a8.43 8.43 0 0 0-4.48 1.33v-4a8.43 8.43 0 0 1 4.48-1.33zM327.22 79.73h4.47V61.3a8.42 8.42 0 0 0-4.48 1.33z' transform='translate(-245.11 -53.04)'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  width: 165px;
  height: 36px;
  margin: 20px 0;
  display: inline-block;
`;

export const NavMenu = styled(Ul)`
  line-height: 74px;
  display: inline-block;
  width: 700px;
  vertical-align: top;
  border-bottom: none!important;
  margin: 0 40px;
`;

export const HeaderRight = styled.div`
  float: right;

`;

export const LoginButton = styled(Button)`
  padding: 0 30px;
  color: ${blackColor};
  ${fontFamilyRegular};
  font-size: 16px;	
  line-height: 24px;
  &:hover{
    color: ${blackColor};
  }
`;

export const SigninButton = styled(Button)`
  border-radius: 4px;	
  background-color: ${mainColor};
  color: ${whiteColor};	
  ${fontFamilyRegular};
  font-size: 16px;	
  line-height: 24px;
  width: 120px;
  height: 40px;
  ${fontWeightNormal};
  border: none;
  &:hover{
    border-radius: 4px;	
    background-color: ${buttonHoverColor};
    color: ${whiteColor};	
    ${fontFamilyRegular};
    font-size: 16px;	
    line-height: 24px;
    width: 120px;
    height: 40px;
    ${fontWeightNormal};
    border: none;
  }
`;