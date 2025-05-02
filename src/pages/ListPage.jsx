import React, { useState } from 'react'
import { Link } from 'react-router'
import { ContentTxt, List, ListContainer, ListContent, ListTitle, ListWrap } from '../styles/list'

const category= [
  { name :'리스트 1', bg : 'blue'},
  { name :'리스트 2', bg : 'blue'},
  { name :'리스트 3', bg : 'blue'},
  { name :'리스트 4', bg : 'blue'},
  { name :'리스트 5', bg : 'blue'},
  { name :'리스트 6', bg : 'blue'},
]

const ListPage = () => {

  const [tabCur, setTabCur] = useState(0)

  const onClick = (i) =>{
    setTabCur(i)
  }

  return (
    <ListContainer>
      <ListWrap>
        {
          category.map((n,i)=>
            <List key={i} onClick={()=>onClick(i)} className={tabCur === i ?'on' : ''} style={{zIndex:i}}>
              <ListTitle>
                <strong className='title'>{n.name} </strong>
                <Link to={'/'} className='link-btn'>MORE</Link>
              </ListTitle>
              <ListContent>
                <div className="img-box">
                  <img src="/" alt="" />
                </div>
                <ContentTxt>
                  <div className="star">⭐⭐⭐⭐⭐</div>
                  <p className='descript'>니ㅏ 러냐ㅣㄷ 니 ㅣ나ㅓㄹ디ㅏ언 ㅣㅏ니러 ㅣ너ㅏ대ㅔㅓ ㅔㄴ얼 ㅘㄴㄷ기너 ㅣㄴ이ㅏㅓ ㅣ저디 ㅓ니ㅓ ㅁ;ㅣㅁㄴ 대ㅑ ㅓ니 ㅓㅣ더 ㅣㅓ니 ㅓㅣ너 ;ㅣㅁㄴ 대 ㅏㅓ니ㅓ이ㅓ 대ㅑㅓㄹ ㅔㄴ ㅓㅣ너 ㄹ니;더기러니 ㅣㅇ너 ㅣ너ㅣ러 너 ㅣㅇ나러 ㅣㄴ어ㅣㅏㅓㄴㅇㄹ힌 ㅓㅣㅓㄱ ㅣㅓㄴ ㅣㅔㄷ자 ㅣㅇ너리 나ㅓㅣㄱㄹ 디거ㅏ ㅣ어히 너ㅣ어 ㅣ너시ㅢㅏㅓ니ㅏ너디느이낭 ㅣ느기 ㅣㅡㄴ이라ㅡㄴ 다ㅓㅢㄹ느 </p>
                  <span className='dete'>2025.05.02</span>
                </ContentTxt>
              </ListContent>
            </List>
          )
        }
      </ListWrap>
    </ListContainer>
  )
}

export default ListPage