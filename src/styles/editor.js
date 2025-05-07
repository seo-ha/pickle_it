import styled from "styled-components";

export const EditorWrap = styled.section`
  padding: 30px 20px;

  .submit {width:100%; height:50px; font-size:1.125rem; font-weight:600; background-color: #072389; color:#fff; border-radius: 5px }
`

/*input wrap*/
export const InputBox = styled.div`
  margin-bottom: 25px;
`

/*타이틀*/
export const Title = styled.strong`
  display:block; margin-bottom:10px; font-size: 1rem; font-weight: 600;

  span { color:#df6038; }
  
`

/*input label*/
export const Label = styled.label`
  display:block; width: 100%; border: 1px solid #eaeaea; font-size:.938rem; 

  input {width:100%; height:40px; padding:0 15px; }
  textarea {width:100%; height:150px; padding:15px; resize:none;}
`

/*별점*/
export const StarWrap = styled.div`
  display: flex; align-items: center; gap: 3px;

  .ico_star {
    font-size:1.25rem;

    &.on {color:#eb930a; }
  }
`

/*swiper*/
export const SwiperStyle = styled.div`
  margin-bottom: 25px;

  .swiper-slide {
    position:relative; width: 100%; aspect-ratio:auto 1/1; border: 1px solid #eaeaea;

    label { width:100%; height:100%; }
  }

  .close-btn { 
    position:absolute; top:5px; right:5px; width:30px; height:30px; display:flex; align-items:center; justify-content:center; border-radius:50%; background-color:rgba(0,0,0,.5);

    svg { font-size:1.25rem; fill:white;}
 }
`

export const Thumb = styled.div`
  display:flex; align-items:center; justify-content:center; width: 100%; height: 100%;

  svg { font-size:2.188rem; fill: #888;}
`
