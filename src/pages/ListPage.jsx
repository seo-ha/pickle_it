import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router'
import { ContentInfo, ContentTxt, List, ListContainer, ListContent, ListTitle, ListWrap } from '../styles/list'
import { getCategoryUUID, supabase } from './../lib/supabaseClient';

const ListPage = () => {

  const contentRefs = useRef([]);
  const {categoryId} = useParams();
  const [items,setItems] = useState([]);
  const [tabCur, setTabCur] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const onClick = (i) =>{
    setTabCur(i)
  }

  const starLength = (star) =>{
    const stars = [];
    for (let i = 0; i < star; i++) {
      stars.push('⭐')
    }
    return stars;
  }

  const fetchItem = async() =>{
    setIsLoading(true);

    const categoryUUID = await getCategoryUUID(categoryId);

    if (!categoryUUID) {
      alert('카테고리를 찾을 수 없습니다.');
      setIsLoading(false);
      return;
    }

    const {data, error} = await supabase
    .from('items')
    .select('*')
    .eq('category_id', categoryUUID)
    .order('created_at',{ascending : false})

    if (data !== null && error) {
      console.error('불러오기 실패:', error);
    } else {
      setItems(data);
    }

    setIsLoading(false);
  }

  useEffect(()=>{
    fetchItem()
  },[categoryId])

  return (
    <ListContainer>
       { isLoading ?  (<div >loadging...</div>)
        : items.length === 0 ? (<div >리스트가 없습니다.</div>
        ) : (
        <ListWrap>
          {
            items.map((item,i)=>
            <List ref={(el)=>contentRefs.current[i] = el} key={item.id} 
              style={{ height: tabCur === i ? contentRefs.current[i]?.scrollHeight + 'px' : '60px' }}
              onClick={()=>onClick(i)} 
              className={tabCur === i ? 'on' : ''} 
            >
              <ListTitle>
                <strong className='title'>{item.title} </strong>
                <Link to={`/list/${categoryId}/${item.id}`} className='link-btn'>MORE</Link>
              </ListTitle>
              <ListContent className={item.images.length === 0 ? 'only-text' : 'has-img' } ref={(el) => (contentRefs.current[i] = el)}>
                {
                  item.images.length !== 0 ? (
                    <div className="img-box">
                      <img src={item.images[0]} alt={item.title} />
                    </div>
                  ) : ''
                }
                
                <ContentTxt>
                  <p className='descript'>{item.content}</p>
                  <ContentInfo>
                    {
                      item.star === 0 ? '' :  <div className="star">{starLength(item.star)}</div>
                    }
                    <span className='dete'>{item.created_at.slice(0, 10)}</span>
                  </ContentInfo>
                </ContentTxt>
              </ListContent>
            </List>
            )
          }
        </ListWrap>
        )
      }
    </ListContainer>
  )
}

export default ListPage