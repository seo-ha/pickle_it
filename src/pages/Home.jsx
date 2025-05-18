import React, { useEffect, useState } from 'react'
import { Category, CategoryList } from '../styles/home';
import AddCategoryPopup from '../components/AddCategoryPopup';
import { useThemeToggleStore } from '../store/themeStore';
import { supabase } from '../lib/supabaseClient';
import CategoryDeletePopup from '../components/CategoryDeletePopup';
import { toogleBooleanStore } from '../store/toogleBooleanStore';


const Home = () => {
  
  const {popup, isCatetoryModify} = toogleBooleanStore();
  const {isDark} = useThemeToggleStore();
  const [items,setItems] = useState([]);
  const [DeletePopup,setDeletePopup] = useState(false);
  const [categoryDeleteName,setCategoryDeleteName] = useState('');


  //데이터 가져오기
  const fetchItem = async ()=>{
    const {data : categories,error} = await supabase
    .from('categories')
    .select('*')
    .order('created_at',{ascending:false})

    if (error) {
      console.error('카테고리 불러오기 실패:', error);
      return;
    } 

    //카테고리 별 카운트 세기
    const withCounts = await Promise.all(
      categories.map( async(cate)=>{
        const {count} = await supabase
        .from('items')
        .select('*',{count:'exact',head:true})
        .eq('category_id', cate.id);

        return {
          ...cate,
          count : count || 0,
        }
      })
    )

    setItems(withCounts)
  }

  useEffect(()=>{
    fetchItem();
  },[])

  const categoryRemove = (e, name) =>{
    e.stopPropagation();
    e.preventDefault(); 
    setDeletePopup(true);
    setCategoryDeleteName(name)
  }


  return (
    <>
      <CategoryList>
        {
          items.map((item)=>{

            const backgroundColor = isDark && item.color === 'black' ? 'white' : item.color

            return <Category key={item.id} href={`/list/${item.name}`} color={`${item.color}`} style={{ backgroundColor : backgroundColor }}>
              {item.name.toUpperCase()}
              <div>
                {
                  !isCatetoryModify 
                  ? <span>{item.count}</span>
                  : <button onClick={(e)=>{categoryRemove(e, item.name)}}>삭제</button>
                }
              </div>
            </Category>
          })
        }
      </CategoryList>

      { popup ? <AddCategoryPopup onSubmitSuccess={fetchItem}/> : ''}

      { DeletePopup 
        ? <CategoryDeletePopup setDeletePopup={setDeletePopup} categoryDeleteName={categoryDeleteName} onDeleteSuccess={fetchItem}/> 
        : ''}
    </>
  )
}

export default Home