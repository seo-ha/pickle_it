import React from 'react'
import { supabase } from '../lib/supabaseClient';
import Popup from './Popup';
import { useNavigate } from 'react-router';

const DetailDeletePopup = ({style, setDeletePopup, categoryId, DeleteId, onDeleteSuccess}) => {

  const nav = useNavigate()

  const deleteToDB = async()=> {
    //리스트 삭제
    await supabase
    .from('items')
    .delete()
    .eq('category_id',DeleteId);

    const {error} = await supabase
    .from('items')
    .delete()
    .eq('id',DeleteId)

    if(error) {
      console.log('리스트 삭제 오류 발생 : ',error);
    } else {
      setDeletePopup(false);
      onDeleteSuccess();
      nav(`/list/${categoryId}`,{replace:true})
    }
  }

  return (
    <Popup style={style} deleteToDB={deleteToDB} setDeletePopup={setDeletePopup}/>
  )
}

export default DetailDeletePopup