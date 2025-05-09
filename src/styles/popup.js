import styled from "styled-components"

export const Popup = styled.div `
  position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); z-index: 3;
`

export const PopupInner = styled.div `
  position: absolute; top: 50%; left: 50%; transform:translate(-50%,-50%);
  width:80%; max-width:500px; 
  padding: 30px 20px; 
  background-color: white;
  border-radius:10px; border: 1px solid ${({theme})=> theme.colors.colorDisabled};

  .title {
    display:block; margin-bottom: 20px;text-align:center; font-size:1.25rem; font-weight:600;
    &.delete {color:#d72020;}  
  }

  .titleInput {display:block; width:100%; height:50px; padding:0 15px; border-radius:5px; background-color:#eee;}
`

export const RadioWrap = styled.div` 
  display: flex; flex-wrap: wrap; align-items: center; gap: 8px 10px; margin: 25px auto;
`

export const Radio = styled.input`
  display:block; width: 35px; height:35px; border: 1px solid #ccc; border-radius :50% ;

  background: ${props=> {
    if(props.color === 'plnk') {
      return '#ebabeb'
    } else {
      return props.color
    }
  }};

  &:checked {
    border-color: #666;
  }
`
export const BtnWrap = styled.div`
  display: flex; align-items: center; justify-content: space-between; gap: 0 15px;

  button {

    width: 100%; height: 48px; border-radius: 8px; font-weight: 600;

    &.submit {background-color: #072389; color:#fff;}
    &.close {border:1px solid #999; color:#666;}
  }
`