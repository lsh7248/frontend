import { useEffect, useState } from 'react';
import './App.css';
import Container from '@mui/material/Container';
import { RouterProvider, useLocation } from 'react-router-dom';
import router from '@src/routes/router';
import Header from './components/main/Header';
import Footer from './components/main/Footer';

const sections = [
  { title: 'Dashboard 연습 페이지', url: 'dashboard' },
  { title: 'Chatbot 연습 페이지', url: 'chatbot' },
  { title: 'Blog 게시판 페이지', url: 'blog' },
  { title: '부동산 알리미 페이지', url: 'apt' },
  { title: '관리자 페이지', url: 'admin' },
];

function App() {
  const [count, setCount] = useState(0);
  // const location = useLocation();
  useEffect(() => {
    console.log('useEffect 사용...');
    console.log('url : ', window.location.href);
  });
  return (
    <>
      <Container maxWidth="lg">
        {window.location.href.includes('login') || (
          <Header title="성현's 잡동사니" sections={sections} />
        )}
        <main>
          <RouterProvider router={router} />
        </main>
        {window.location.href.includes('login') || (
          <Footer
            title="Footer"
            description="Something here to give the footer a purpose!"
          />
        )}
      </Container>
    </>
  );
}

export default App;
