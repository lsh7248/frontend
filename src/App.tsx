import { useState } from 'react';
import './App.css';
import Container from '@mui/material/Container';
import { RouterProvider } from 'react-router-dom';
import router from '@src/routes/router';
import Header from './components/main/Header';
import Footer from './components/main/Footer';

const sections = [
  { title: 'React+Typescript 공부노트', url: '#' },
  { title: 'Python+Fastapi 공부노트', url: '#' },
  { title: '서버+DB 공부노트', url: '#' },
  { title: 'Bigdata + AI 공부노트', url: '#' },
];

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Container maxWidth="lg">
        {true && <Header title="성현's 잡동사니" sections={sections} />}
        <main>
          <RouterProvider router={router} />
        </main>
        {true && (
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
