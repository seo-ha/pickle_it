import React from 'react'
import { BtnWrap, Popup, PopupInner} from '../styles/popup';
import {supabase } from '../lib/supabaseClient';

const CategoryDeletePopup = ({style, setCategoryDeletePopup, categoryDeleteName, onDeleteSuccess}) => {

  const deleteToDB = async()=> {
    //name으로 uuid가져오기
    const {data, error:fetchError} = await supabase
    .from('categories')
    .select('*')
    .eq('name', categoryDeleteName)
    .single();

    if(fetchError || !data) {
      alert('카테고리를 찾을 수 없습니다.');
      return;
    }

    const categoryId = data.id;

    //카테고리 안에 item 삭제
    await supabase
    .from('items')
    .delete()
    .eq('category_id',categoryId);

    //카테고리 삭제
    const {error} = await supabase
    .from('categories')
    .delete()
    .eq('id',categoryId)

    if(error) {
      console.log('카테고리 추가 오류 발생 : ',error);
    } else {
      alert('식제되었습니다!')
      setCategoryDeletePopup(false);
      onDeleteSuccess();
    }
    

  }

  return (
    <Popup opacity={style}>
      <PopupInner>

        <h1 className='title delete'>삭제하시겠습니까?</h1>
    
        <BtnWrap>
          <button className='submit' type='submit' onClick={deleteToDB} >삭제</button>
          <button className='close' type='button' onClick={()=>setCategoryDeletePopup(false)}>취소</button>
        </BtnWrap>

      </PopupInner>
    </Popup>
  )
}

export default CategoryDeletePopup