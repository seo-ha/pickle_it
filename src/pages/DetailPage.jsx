import React, { useState } from 'react'
import {SwiperStyeld, DetailWrap, InfoTop } from '../styles/detailpage'
import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import { Pagination, Thumbs } from 'swiper/modules';


const DetailPage = () => {

  const [thumbSwiper, setThumbSwiper] = useState(null);

  return (
    <DetailWrap>

       <SwiperStyeld>
          {/*메인 swiper*/}
          <Swiper className='mainSwiper'
            modules={[Pagination, Thumbs]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            thumbs={{swiper: thumbSwiper}}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
          </Swiper>

          {/*썸네일 swiper*/}
          <Swiper className='thumbSwiper'
          onSwiper={setThumbSwiper}
            modules={[Thumbs]}
            spaceBetween={10}
            slidesPerView={4.3}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
       </SwiperStyeld>

      <h1>어떤 취미</h1>
      <InfoTop><span>⭐⭐⭐⭐⭐</span> <span>2025.02.12</span></InfoTop>
      <textarea name="text" id="as" readOnly defaultValue={'포항항ꉂꉂ(ᵔᗜᵔ*)ㅋㅋㅋㅋ🛳🌊포항항항🚢🌊포핳핳항🛳🌊🚢🌊⚓️⛴포항항ꉂꉂ(ᵔᗜᵔ*)ㅋㅋㅋㅋ🛳🌊포항항항🚢🌊포항항ꉂꉂ(ᵔᗜᵔ*)⛴🛳🌊⚓️🚢🌊⛴포항항항항⛴🌊 포항항ꉂꉂ(ᵔᗜᵔ*)ㅋㅋㅋㅋ🛳🌊포항항항🚢🌊포핳핳항🛳🌊🚢🌊⚓️⛴포항항ꉂꉂ(ᵔᗜᵔ*)ㅋㅋㅋㅋ🛳🌊포항항항🚢🌊포항항ꉂꉂ(ᵔᗜᵔ*)⛴🛳🌊⚓️🚢🌊⛴포항항항항⛴🌊 포항항ꉂꉂ(ᵔᗜᵔ*)ㅋㅋㅋㅋ🛳🌊포항항항🚢🌊포핳핳항🛳🌊🚢🌊⚓️⛴포항항ꉂꉂ(ᵔᗜᵔ*)ㅋㅋㅋㅋ🛳🌊포항항항🚢🌊포항항ꉂꉂ(ᵔᗜᵔ*)⛴🛳🌊⚓️🚢🌊⛴포항항항항⛴🌊 포항항ꉂꉂ(ᵔᗜᵔ*)ㅋㅋ '}></textarea>
    </DetailWrap>
  )
}

export default DetailPage