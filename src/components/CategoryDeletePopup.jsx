import React from 'react'
import {supabase } from '../lib/supabaseClient';
import Popup from './Popup';

const CategoryDeletePopup = ({style, setDeletePopup, categoryDeleteName, onDeleteSuccess}) => {

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
      setDeletePopup(false);
      onDeleteSuccess();
    }
    

  }

  return (
    <Popup style={style} deleteToDB={deleteToDB} setDeletePopup={setDeletePopup}/>
  )
}

export default CategoryDeletePopup