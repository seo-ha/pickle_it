import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { MainContext } from '../App'

const Popup = styled.div `
  position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); z-index: 3;
`

const PopupInner = styled.form `
  position: absolute; top: 50%; left: 50%; transform:translate(-50%,-50%);
  width:80%; max-width:500px; 
  padding: 30px 20px; 
  background-color: white;
  border-radius:10px; border: 1px solid ${({theme})=> theme.colors.colorDisabled};

  .title {display:block; width:100%; height:50px; padding:0 15px; border-radius:5px; background-color:#eee;}
`

const RadioWrap = styled.div` 
  display: flex; flex-wrap: wrap; align-items: center; gap: 8px 10px; margin: 25px auto;
`

const Radio = styled.input`
  display:block; width: 35px; height:35px; border: 1px solid #ccc; border-radius :50% ;

  background: ${props=> {
    if(props.color === 'plnk') {
      return '#ebabeb'
    } else {
      return props.color
    }
  }};

  &:checked {
    border-color: #666;
  }
`
const BtnWrap = styled.div`
  display: flex; align-items: center; justify-content: space-between; gap: 0 15px;

  button {

    width: 100%; height: 48px; border-radius: 8px; font-weight: 600;

    &.submit {background-color: #072389; color:#fff;}
    &.close {border:1px solid #999; }
  }
`

const AddCategory_popup = (style) => {

  const {ref, setPopup, setCategory} = useContext(MainContext);

  const [categoryInput, setCategoryInput] = useState({
    title : '',
    radio : ''
  })

  const handleInputChange = (input, e) => {
    setCategoryInput((prev)=> ({
      ...prev,
      [input] : e.target.value
    }))
  }

  const onCreateCategory = (e)=> {
    e.preventDefault()
    
    setCategory((prev)=>([{id: ref.current = ref.current + 1, name :categoryInput.title, bg:categoryInput.radio},...prev]))
    
    setPopup(false);

    setCategoryInput({
      title : '',
      radio : ''
    })
  }

  return (
    <Popup opacity={style}>
      <PopupInner onSubmit={onCreateCategory}>
     
        <input type="text" placeholder='Title' className='title' required value={categoryInput.title} onChange={(e)=>handleInputChange('title',e)}/>

        <RadioWrap>
          <Radio type="radio" name="bgColor" color={'blue'}  value="blue" onChange={(e)=>handleInputChange('radio',e)}required/>
          <Radio type="radio" name="bgColor" color={'green'} value="green" onChange={(e)=>handleInputChange('radio',e)}required/>
          <Radio type="radio" name="bgColor" color={'yellow'} value="yellow" onChange={(e)=>handleInputChange('radio',e)}required/>
          <Radio type="radio" name="bgColor" color={'black'} value='black' onChange={(e)=>handleInputChange('radio',e)}required/>
          <Radio type="radio" name="bgColor" color={'red'} value="#e74141" onChange={(e)=>handleInputChange('radio',e)}required/>
          <Radio type="radio" name="bgColor" color={'plnk'} value="#ebabeb" onChange={(e)=>handleInputChange('radio',e)}required/>
        </RadioWrap>

        <BtnWrap>
          <button className='submit' type='submit'>만들기</button>
          <button className='close' type='button' onClick={()=>setPopup(false)}>닫기</button>
        </BtnWrap>

      </PopupInner>
    </Popup>
  )
}

export default AddCategory_popup