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
import LoginPage from './pages/login/LoginPage';
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabaseClient';
import SignupPage from './pages/login/SignupPage';
import Mypage from './pages/mypage/Mypage';

function App() {

  const {isDark} = useThemeToggleStore();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      // await supabase.auth.signOut();
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  console.log(session);
  

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>

      <Globalstyle/>

      <div className="App">
        
        <Header/>

        <Container>
          {loading ? (
            <div>로딩 중...</div>
          ) : (
          <Routes>
            {session ? (
              <>
                <Route path='/' element={<Home />} />
                <Route path='/list/:categoryId/editor' element={<EditorPage />} />
                <Route path='/list/:categoryId' element={<ListPage />} />
                <Route path='/list/:categoryId/:detail' element={<DetailPage />} />
                <Route path='/mypage' element={<Mypage/>}/>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
              </>
            ) : (
              <>
                <Route path='*' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
              </>
            )}
          </Routes>
          )}
        </Container>

        <Footer/>

      </div>
    </ThemeProvider>
  );
}

export default App;
