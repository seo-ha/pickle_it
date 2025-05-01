import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useThemeToggleStore } from './store/themeStore';
import { darkTheme, lightTheme } from './theme';
import { Container } from './styles/layout';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import { createContext, useEffect, useRef, useState } from 'react';

const Globalstyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bg.bgMain};
    color: ${({ theme }) => theme.font.fontMain};
    transition: background 0.3s ease, color 0.3s ease;
    font-family: "ongleaf",sans-serif;
	  font-weight: 400;
  }
`

export const MainContext = createContext();

function App() {

  const ref = useRef(5);
  const [popup, setPopup] = useState(false)
  const {isDark} = useThemeToggleStore();
  const [category, setCategory] = useState([
    { id:1, name :'movie', bg : 'blue'},
    { id:2, name :'ticket', bg:'yellow'},
    { id:3, name :'book', bg:'green'},
    { id:4, name :'memo', bg:'#ebabeb'},
    { id:5, name :'all', bg:'black'},
  ])

  useEffect(()=>{
    console.log(category);
    
  },[category])

  // const onCreateCategory = (props) =>{
  //   setCategory([...category,{props}]);
  // }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Globalstyle/>
        <MainContext.Provider value={{
            ref,category,setCategory,popup, setPopup
          }}>

          <div className="App">
            
            <Header/>

            <Container>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/list/:category' element={<ListPage/>}/>
                <Route path='/list/:category/:detail' element={<DetailPage/>}/>
              </Routes>
            </Container>

            <Footer/>

          </div>
        </MainContext.Provider>
    </ThemeProvider>
  );
}

export default App;
