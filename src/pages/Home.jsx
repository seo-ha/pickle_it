import React, { useContext } from 'react'
import { MainContext } from '../App'
import { Category, CategoryList } from '../styles/home';
import AddCategoryPopup from '../components/AddCategoryPopup';


const Home = () => {
  
  const {category, popup} = useContext(MainContext);

  return (
    <>
      <CategoryList >
        {
          category.map((cate)=>
            <Category key={cate.id} to={`/list/`} color={`${cate.bg}`} style={{backgroundColor : cate.bg}}>
              {cate.name.toUpperCase()}
              <span>0</span>
            </Category>)
        }
      </CategoryList>

      {
        popup ? <AddCategoryPopup/> : ''
      }
    </>
  )
}

export default Home