import React, { useState } from 'react'
import { getCategoryUUID, supabase, uploadImagesToSupabase } from './../lib/supabaseClient';
import { EditorWrap, InputBox, Label, StarWrap, SwiperStyle, Thumb, Title } from '../styles/editor';
import { FaRegStar, FaStar } from 'react-icons/fa';
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { IoClose } from 'react-icons/io5';
import { CiImageOn } from 'react-icons/ci';
import { useNavigate, useParams } from 'react-router';

function EditorPage() {
  const {categoryId} = useParams();
  const nav = useNavigate()

  const [input, setInput] = useState({
    images : [null,null,null,null,null],
    title : '',
    starPoint : 0,
    content : ''
  })

  const onChangeValue = (idx,e) => {
    setInput({
      ...input,
      [idx] : e.target.value
    })
  }

  //별점
  const handleStarRenge = () => {
    let result = [];
    for (let i = 0; i < 5; i++) {
      result.push(
        <button key={i+1} name='star' onClick={()=>starClick(i)} className={i + 1 <= input.starPoint ? 'ico_star on' :'ico_star'}>
          {
            i + 1 <= input.starPoint
            ? <FaStar className='star'/>
            : <FaRegStar className='star'/>
          }
        </button>
      )
    }
    return result;
  }

  //별점 클릭했을 때 이벤트
  const starClick = (i) =>{
    setInput({
      ...input,
      starPoint : i+1
    })
  }

  //이미지 추가하기
  const onChangeFile = async(e, idx) => {
    const file = e.target.files[0];
    if(!file) return;

    const fileName = `${Date.now()}_${file.name}`
    const url = await uploadImagesToSupabase(file, fileName);
    if(!url) return;

    const newImages = [...input.images];
    newImages[idx] = url;
    setInput({
      ...input,
      images : newImages
    })
  }

  //이미지 삭제하기
  const removeImage = (idx) => {
    const newImages = [...input.images];
    newImages[idx] = null;
    setInput({
      ...input,
      images : newImages
    })
  }

  //db 저장하기
  const saveToDB = async ()=>{

    const { title, content, starPoint, images } = input;
    const filteredImages = images.filter(Boolean);
  
    const categoryUUID = await getCategoryUUID(categoryId);

    if (!categoryUUID) {
      alert('카테고리를 찾을 수 없습니다.');
      return;
    }
  
    const {error} = await supabase
    .from('items')
    .insert([
      {
        title,
        content : content,
        star : starPoint,
        images : filteredImages,
        category_id:categoryUUID,
        created_at : new Date().toISOString()
      }
    ]);

    if(error) {
      console.log(error);
    } else {
      nav(`/list/${categoryId}`);
    }
  }

  return (
    <EditorWrap>

      <SwiperStyle>
        <Title>이미지 선택</Title>

        <Swiper slidesPerView={2.5} spaceBetween={20}>
          {
            input.images.map((img, idx)=>(
              <SwiperSlide key={idx}>

                <label>
                  <input type="file" name="" id="" accept='image/*' hidden onChange={(e)=>onChangeFile(e, idx)}/>
                  <Thumb style={{background: img ? `url(${img}) center/cover no-repeat` : '#f9f9f9'}}>{ !img ? <CiImageOn /> : ''}</Thumb>
                </label>

                {img && ( <button className='close-btn' onClick={() => removeImage(idx)}><IoClose /></button> )}
                
              </SwiperSlide>
            ))
          }
        </Swiper>
      </SwiperStyle>

      <InputBox>
        <Title>제목<span>*</span></Title>
        <Label>
          <input type="text" name='titleInput' placeholder='제목을 적어주세요.' onChange={(e)=>onChangeValue('title',e)} required/>
        </Label>
      </InputBox>
    
      <InputBox>
        <Title>별점</Title>
        <StarWrap>{handleStarRenge()}</StarWrap>
      </InputBox>

      <InputBox>
        <Title>메모<span>*</span></Title>
        <Label><textarea name="" id="" placeholder='메모를 적어주세요.' onKeyUp={(e)=>onChangeValue('content',e)} required></textarea></Label>
      </InputBox>

      <button type='submit' className='submit' onClick={saveToDB}>저장하기</button>
    </EditorWrap>
  )
}

export default EditorPage