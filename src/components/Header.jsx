import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { HeaderStyle } from '../styles/layout';
import { MainContext } from '../App';



function Header() {

  const {isCatetoryModify, setIsCatetoryModify} = useContext(MainContext);
  const nav = useNavigate();

  const params = useLocation().pathname;
  const pathParams = params.split('/');
  const isHome = params === '/';
  const isCategoryPage = pathParams[1] === 'list' && pathParams.length === 3;
  const isCreateEditorPage = pathParams[1] === 'list' && pathParams.length === 4 && pathParams[3] === 'editor';
  const isDetailPage = pathParams[1] === 'list' && pathParams.length === 4 && pathParams[3] !== 'editor';
  const isModifyPage = pathParams[1] === 'list' && pathParams.length === 5 && pathParams[4] === 'modify';


  const HeaderActionButton = () => {
    if (isCategoryPage) return <Link to={`${params}/editor`}>추가하기</Link>;
    if (isModifyPage) return <button onClick={(e)=> e.preventDefault()}>수정하기</button>;
    return null;
  };

  return (
    <HeaderStyle>

      {isDetailPage || isCreateEditorPage ? <button onClick={()=> nav(-1)}>&#60;</button> : ''}

      <Link to={'/'} className='header-logo'>피클<span>잇</span></Link>

      {  
        isHome 
        ? !isCatetoryModify ? <button onClick={()=>setIsCatetoryModify(true)}>편집</button>  : <button onClick={()=>setIsCatetoryModify(false)}>돌아가기</button>
        : HeaderActionButton() 
      }


      {/* <DarkToggleButton onClick={toggleTheme}>{isDark ? "🌝" : "🌚"}</DarkToggleButton> */}
    </HeaderStyle>
  )
}

export default Header