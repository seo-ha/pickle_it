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
import EditorPage from './pages/EditorPage';

function App() {

  const {isDark} = useThemeToggleStore();

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>

      <Globalstyle/>

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
    </ThemeProvider>
  );
}

export default App;
