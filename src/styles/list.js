import styled from "styled-components"

export const ListContainer = styled.section ` width: 100%; height: 100%; `

export const ListWrap = styled.ul `
  width: 100%; min-height: 100%; overflow-y: auto;
`

export const ContentTxt = styled.div `
 width:100%;
  .descript {display:-webkit-box; flex-grow:1; max-height:67px; font-size:.938rem; overflow:hidden; text-overflow:ellipsis; -webkit-line-clamp:4; -webkit-box-orient:vertical; }
`

export const ListContent = styled.div `
  display:flex; align-items:start; gap: 20px; width: 100%;

  .img-box {
    width:120px; min-width:120px; aspect-ratio: auto 1/1; text-align:center; background-color: black;
    img {width:100%; height:100%; object-fit: contain;}
  }

  &.only-text {
    ${ContentTxt} .descript { margin-bottom:15px; -webkit-line-clamp:3;}
  }

  &.has-img {
    ${ContentTxt} { 
      display: flex; flex-direction: column; height: 120px;
      .descript {flex-grow:1;}
    }
  }
`

export const List = styled.li `
  width: 100%; transition: height 0.3s ease; padding: 15px 20px 20px; border-bottom: 1px solid #eaeaea; background-color: #fff; overflow: hidden;

`
export const ListTitle = styled.div `
  display:flex; align-items:center; justify-content:space-between; gap: 0 10px; width: 100%; height:30px; margin-bottom: 15px;

  strong {display:-webkit-box; max-height:40px; font-size:1.125rem; font-weight:600; overflow:hidden; text-overflow:ellipsis; -webkit-box-orient:vertical; -webkit-line-clamp:2; }
  .link-btn {display:flex; align-items:center; justify-content:center; width: 65px; min-width:65px; height:30px; font-size:.875rem; border-radius:20px; border:1px solid #bbb;}
`

export const ContentInfo = styled.div `
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; margin-top:auto; gap: 8px 10px;

  .star {display:flex; align-items:center; flex-grow :1;}
  .dete {display:inline-block; font-size:.813rem; text-align:right; flex-grow :1; }

`
