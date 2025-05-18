import React, { useEffect, useState } from 'react'
import {SwiperStyeld, DetailWrap, InfoTop } from '../styles/detailpage'
import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import { Pagination, Thumbs } from 'swiper/modules';
import { useParams } from 'react-router';
import { supabase } from '../lib/supabaseClient';
import { formatDate, starLength } from '../utils/helpers';
import DetailDeletePopup from '../components/DetailDeletePopup';


const DetailPage = () => {

  const {categoryId, detail} = useParams();
  const [thumbSwiper, setThumbSwiper] = useState(null);
  const [items,setItems] = useState([]);
  const [DeletePopup,setDeletePopup] = useState(false);
  
  const fetchItem = async() =>{

    const {data, error} = await supabase
    .from('items')
    .select('*')
    .eq('id', detail)
    .single()

    if (data !== null && error) {
      console.error('불러오기 실패:', error);
    } else {
      setItems(data);
    }
  }

  useEffect(()=>{
    fetchItem()
  },[detail])


  return (
    <DetailWrap>

       <SwiperStyeld style={{ display: items?.images?.length >= 1 ? 'block' : 'none' }}>
          {/*메인 swiper*/}
          <Swiper className='mainSwiper'
            modules={[Pagination, Thumbs]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            thumbs={{swiper: items?.images?.length > 1 && thumbSwiper}}
          >
            {
              items?.images?.map((item,i)=> <SwiperSlide key={i}><img src={item} alt="" /></SwiperSlide>)
            }
          </Swiper>

          {/*썸네일 swiper*/}
          <Swiper className='thumbSwiper'
            onSwiper={setThumbSwiper}
            modules={[Thumbs]}
            spaceBetween={10}
            slidesPerView={4.3}
            style={{ display: items?.images?.length > 1 ? 'block' : 'none' }}
          >
            {
              items?.images?.map((item,i)=> <SwiperSlide key={i}><img src={item} alt="" /></SwiperSlide>)
            }
          </Swiper>
       </SwiperStyeld>

      <h1>{items?.title}</h1>
      <InfoTop><span>{starLength(items.star)}</span> <span>{formatDate(items.created_at)}</span></InfoTop>
      <textarea name="text" id="as" readOnly defaultValue={items.content}></textarea>

      <button onClick={()=> setDeletePopup(true)}>삭제</button>

       { DeletePopup && (<DetailDeletePopup setDeletePopup={setDeletePopup} categoryId={categoryId} DeleteId={detail} onDeleteSuccess={fetchItem}/> ) 
       }
    </DetailWrap>
  )
}

export default DetailPage