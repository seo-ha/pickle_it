import React, { useState } from 'react'
import { BtnWrap, PopupInner, PopupWrap, Radio, RadioWrap } from '../styles/popup';
import { supabase } from '../lib/supabaseClient';
import { toogleBooleanStore } from '../store/toogleBooleanStore';

const AddCategory_popup = ({style, onSubmitSuccess}) => {

  const {setPopup} = toogleBooleanStore();

  const [input, setInput] = useState({
    title : '',
    radio : ''
  })

  const handleInputChange = (input, e) => {
    setInput((prev)=> ({
      ...prev,
      [input] : e.target.value
    }))
  }

  const saveToDB = async()=> {

    const {title, radio} = input;
    const {error} = await supabase
    .from('categories')
    .insert([
      {
        name : title,
        color :radio,
        created_at : new Date().toISOString()
      }
    ]);

    if(error) {
      console.log('카테고리 추가 오류 발생 : ',error);
    } else {
      onSubmitSuccess();
      setPopup(false);
      setInput({
        title : '',
        radio : ''
      });
    }
    

  }

  return (
    <PopupWrap opacity={style}>
      <PopupInner>

        <h1 className='title'>카테고리 만들기</h1>
     
        <input type="text" placeholder='Title' className='titleInput' required value={input.title} onChange={(e)=>handleInputChange('title',e)}/>

        <RadioWrap>
          <Radio type="radio" name="bgColor" color={'blue'}  value="blue" onChange={(e)=>handleInputChange('radio',e)}required/>
          <Radio type="radio" name="bgColor" color={'green'} value="green" onChange={(e)=>handleInputChange('radio',e)}required/>
          <Radio type="radio" name="bgColor" color={'yellow'} value="yellow" onChange={(e)=>handleInputChange('radio',e)}required/>
          <Radio type="radio" name="bgColor" color={'black'} value='black' onChange={(e)=>handleInputChange('radio',e)}required/>
          <Radio type="radio" name="bgColor" color={'red'} value="#e74141" onChange={(e)=>handleInputChange('radio',e)}required/>
          <Radio type="radio" name="bgColor" color={'plnk'} value="#ebabeb" onChange={(e)=>handleInputChange('radio',e)}required/>
        </RadioWrap>

        <BtnWrap>
          <button className='submit' type='submit' onClick={saveToDB}>만들기</button>
          <button className='close' type='button' onClick={()=>setPopup(false)}>닫기</button>
        </BtnWrap>

      </PopupInner>
    </PopupWrap>
  )
}

export default AddCategory_popup