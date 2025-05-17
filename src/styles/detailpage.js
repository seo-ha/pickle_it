import styled from "styled-components";

export const DetailWrap = styled.section`
  padding: 25px 20px 100px;


  h1 {display:block; margin-bottom:20px; font-size:1.5rem; font-weight:600; }

  textarea {width:100%; height: 150px; padding:15px; line-height:1.35; border-radius:10px; border:1px solid #eaeaea; resize:none; }
`

export const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 15px; color: #888;
`

export const SwiperStyeld = styled.div `

  padding-bottom: 30px; margin-bottom: 30px; border-bottom: 1px solid #ddd;

  .swiper.mainSwiper { width:100%; aspect-ratio: auto 1/1; border-radius: 10px; overflow: hidden;  }
  
  .swiper-slide {
    text-align:center; background-color: black; border-radius: 10px; overflow: hidden;

    img {width:100%; height:100%; object-fit:contain; }
  }

  .swiper.thumbSwiper {
    width:100%; margin-top: 12px;
  
    .swiper-slide { aspect-ratio:auto 1/1; border-radius: 5px;}
  }

  .swiper-pagination { bottom: 12px;}
  .swiper-pagination-bullet { width:10px; height:10px; margin:0 6px;background-color:rgba(255,255,255,0.5); opacity: 1; }
  .swiper-pagination-bullet-active {background-color:rgba(255,255,255,1);}
`