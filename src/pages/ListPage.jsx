import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { ContentTxt, List, ListContainer, ListContent, ListTitle, ListWrap } from '../styles/list'
import { supabase } from './../lib/supabaseClient';

const ListPage = () => {

  const {categoryId} = useParams();
  console.log(categoryId);
  
  const [items,setItems] = useState([])
  const [tabCur, setTabCur] = useState(0)

  const onClick = (i) =>{
    setTabCur(i)
  }

  useEffect(()=>{
    const fetchItem = async() =>{
      const {data, error} = await supabase
      .from('items')
      .select('*')
      .eq('category_id', categoryId)
      .order('created_at',{ascending : false})

      if (error) {
        console.error('불러오기 실패:', error);
      } else {
        setItems(data);
      }
    }
    
    fetchItem()
  },[categoryId])

  return (
    <ListContainer>
      <ListWrap>
        {
          items.map((item,i)=>
            <List key={item.id} onClick={()=>onClick(i)} className={tabCur === i ?'on' : ''} style={{zIndex:i}}>
              <ListTitle>
                <strong className='title'>{item.title} </strong>
                <Link to={`/list/${categoryId.category}/${i}`} className='link-btn'>MORE</Link>
              </ListTitle>
              <ListContent>
                <div className="img-box">
                  <img src="/" alt="" />
                </div>
                <ContentTxt>
                  <div className="star">⭐ {item.star}</div>
                  <p className='descript'>{item.content}</p>
                  <span className='dete'>{item.created_at}</span>
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