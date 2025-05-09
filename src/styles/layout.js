import styled, { createGlobalStyle } from "styled-components";

/*Globalstyle*/
export const Globalstyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bg.bgMain};
    color: ${({ theme }) => theme.font.fontMain};
    transition: background 0.3s ease, color 0.3s ease;
    font-family: "ongleaf",sans-serif;
    font-weight: 400;
  }
`

/*header*/
export const HeaderStyle = styled.header `
  position: sticky; top: 0; left: 0; display: flex; align-items: center; justify-content: space-between;  width: 100%; height: 60px; padding: 0 20px; border-bottom: 1px solid ${({theme})=> theme.colors.colorBg }; background-color: ${({theme})=>theme.bg.bgMain}; z-index: 2;

  .header-logo { 
    font-size: 1.7rem;  font-family: 'Hanalei Fill',inherit; font-weight: 600;
    span {color:${({theme})=> theme.colors.colorgreen }; font-family: inherit; font-weight: inherit;}
  }

  .nav_gnb {display: flex; align-items: center;} 
`

/*다크모드 버튼*/
export const DarkToggleButton = styled.button ` background: ${({ theme }) => theme.font.fontMain}; color: ${({ theme }) => theme.bg.bgMain}; border: none; padding: 10px 20px; cursor: pointer; border-radius: 8px;`;

/*container*/
export const Container = styled.main ` height: calc(100dvh - 60px); padding-bottom: 70px;`

/*footer*/
export const FooterStyle = styled.footer `
  position: fixed; bottom: 0; left: 0; display: flex; align-items: center; justify-content: space-evenly; width: 100%; height: 70px; border-top: 1px solid #eee; background-color: ${({theme})=>theme.bg.bgMain};
 
 .nav-btn {
   display: flex; align-items: center; justify-content: center; width: 55px; aspect-ratio: auto 1/1;

   &:nth-child(3) {border-radius: 50%; background-color: #333; color: #fff;}
 }

 .ico_plus {}
 .ico_home {font-size:1.5rem;}
`



















