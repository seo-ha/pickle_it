import React from 'react'
import { BtnWrap, PopupInner, PopupWrap } from '../styles/popup'

function Popup({style, setDeletePopup, deleteToDB}) {
  return (
    <PopupWrap opacity={style}>
      <PopupInner>

        <h1 className='title delete'>삭제하시겠습니까?</h1>
    
        <BtnWrap>
          <button className='submit' type='submit' onClick={deleteToDB} >삭제</button>
          <button className='close' type='button' onClick={()=>setDeletePopup(false)}>취소</button>
        </BtnWrap>

      </PopupInner>
    </PopupWrap>
  )
}

export default Popup