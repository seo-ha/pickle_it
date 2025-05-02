import React, { useContext } from 'react'
import { MainContext } from '../App'
import { Category, CategoryList } from '../styles/home';
import AddCategoryPopup from '../components/AddCategoryPopup';
import { useThemeToggleStore } from '../store/themeStore';


const Home = () => {
  
  const {category, popup} = useContext(MainContext);
  const {isDark} = useThemeToggleStore();

  return (
    <>
      <CategoryList >
        {
          category.map((cate)=>{

            const backgroundColor = isDark && cate.bg === 'black' ? 'white' : cate.bg

            return <Category key={cate.id} href={`/list/${cate.name}`} color={`${cate.bg}`} style={{ backgroundColor : backgroundColor }}>
              {cate.name.toUpperCase()}
              <span>0</span>
            </Category>
          })
        }
      </CategoryList>

      {
        popup ? <AddCategoryPopup/> : ''
      }
    </>
  )
}

export default Home