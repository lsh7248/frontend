import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import { RouterProvider, useLocation } from 'react-router-dom';
import router from '@src/routes/router';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';

interface User {
  id: number;
  name: string;
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});
const sections = [
  { title: 'Dashboard 연습 페이지', url: 'dashboard' },
  { title: 'Chatbot 연습 페이지', url: 'chatbot' },
  { title: 'Blog 게시판 페이지', url: 'blog' },
  { title: '부동산 알리미 페이지', url: 'apt' },
  { title: '관리자 페이지', url: 'admin' },
];

function App() {
  const [count, setCount] = useState<number | null>(0);
  const [users, setUsers] = useState<User[] | null>(null);
  // const location = useLocation();
  useEffect(() => {
    console.log('useEffect 사용...');
    console.log('url : ', window.location.href);
    console.log('Users: ', users);

    return () => console.log('unmointing...');
  }, []);
  return (
    <Container maxWidth="lg">
      <QueryClientProvider client={queryClient}>
        {window.location.href.includes('login') ||
          window.location.href.includes('register') || (
            <Header title="성현's 잡동사니" sections={sections} />
          )}
        <main>
          <RouterProvider router={router} />
        </main>
        {window.location.href.includes('login') ||
          window.location.href.includes('register') || (
            <Footer
              title="Footer"
              description="Something here to give the footer a purpose!"
            />
          )}
      </QueryClientProvider>
    </Container>
  );
}

export default App;
