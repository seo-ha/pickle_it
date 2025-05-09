import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import { Container, Globalstyle } from './styles/layout';
import { useThemeToggleStore } from './store/themeStore';
import { darkTheme, lightTheme } from './theme';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import { createContext, useEffect, useRef, useState } from 'react';
import EditorPage from './pages/EditorPage';


export const MainContext = createContext();

function App() {

  const {isDark} = useThemeToggleStore();

  const ref = useRef(5);
  const [popup, setPopup] = useState(false)
  const [isCatetoryModify, setIsCatetoryModify] = useState(false)
  const [category, setCategory] = useState([
    { id:1, name :'movie', bg : 'blue'},
    { id:2, name :'ticket', bg:'yellow'},
    { id:3, name :'book', bg:'green'},
    { id:4, name :'memo', bg:'#ebabeb'},
    { id:5, name :'all', bg:'black'},
  ])

  // useEffect(()=>{
  //   console.log(category);
    
  // },[category])

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Globalstyle/>
        <MainContext.Provider value={{
            ref,category,setCategory,popup, setPopup,
            isCatetoryModify,setIsCatetoryModify
          }}>

          <div className="App">
            
            <Header/>

            <Container>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/list/:categoryId/editor' element={<EditorPage/>}/>
                <Route path='/list/:categoryId' element={<ListPage/>}/>
                <Route path='/list/:categoryId/:detail' element={<DetailPage/>}/>
              </Routes>
            </Container>

            <Footer/>

          </div>
        </MainContext.Provider>
    </ThemeProvider>
  );
}

export default App;
