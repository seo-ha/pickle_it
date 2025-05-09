import styled from "styled-components"

export const CategoryList = styled.div `
  position:relative; display: flex; flex-direction:column; gap: 8px; padding: 20px 15px; height: 100%; overflow-y: auto;
`
export const Category = styled.a `

  display:flex; align-items:center; justify-content:space-between;width: 100%; min-height: 60px; padding: 15px 20px; border-radius: 35px; font-size: 1rem; font-weight: 600; overflow: hidden; 

  &:nth-of-type(1) {margin-top:auto;}

  color: ${({theme, color}) => {
    if (color === 'green' || color === 'blue' || color === '#e74141') return 'white'
    if (color === 'black') return theme.font.fontWhite
    return 'black'
    
  }};

  span {font-size:1.625rem; color:inherit;} 
`