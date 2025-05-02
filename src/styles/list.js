import styled from "styled-components"

export const ListContainer = styled.section `
  width: 100%; height: 100%; padding: 1.25rem 0 0; overflow-y: auto;

`
export const ListWrap = styled.ul `
  display:flex; flex-direction:column; justify-content:flex-start; width: 100%; min-height: 100%;

`

export const ListContent = styled.div `
  display:flex; align-items:start; height: 100%; gap: 20px; opacity: 0; overflow:hidden; transition:opacity .3s;

  .img-box {
    width:100px;min-width:100px; aspect-ratio: 3/4; border:1px solid;
    img {width:100%; height:100%; object-fit:cover;}
  }
`

export const List = styled.li `
  width: 100%; height: 90px; margin-top:-1.25rem; padding: 20px; border-radius: 1.25rem 1.25rem 0 0; background-color: lightblue; transition: height .3s; box-shadow: 0 0 1rem rgba(0,0,0,0.15); overflow: hidden;

  &:nth-child(1) {margin-top:auto;}

  &.on {height: 250px;}
  &.on ${ListContent} { opacity: 1; padding-bottom:60px;}

`
export const ListTitle = styled.div `
  display:flex; align-items:baseline; justify-content:space-between; gap: 0 10px; width: 100%; margin-bottom: 15px;

  strong {display:-webkit-box; max-height:40px; font-size:1.125rem; font-weight:600; overflow:hidden; text-overflow:ellipsis; -webkit-box-orient:vertical; -webkit-line-clamp:2; }
  .link-btn {display:flex; align-items:center; justify-content:center; width: 65px; min-width:65px; height:30px; font-size:.875rem; border-radius:20px; border:1px solid #fff;}
`

export const ContentTxt = styled.div `
  flex-grow:1; max-height:100%;

  .star {display:flex; margin-bottom:10px;}
  .descript {display:-webkit-box; font-size:.938rem; overflow:hidden; text-overflow:ellipsis; -webkit-line-clamp:5; -webkit-box-orient:vertical; }
  .dete {display:block; margin-top:10px; width: 100%; font-size:.813rem; text-align:right; }
`

