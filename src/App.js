import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainPage from './pages/mainPage/MainPage';
import UserInfo from './pages/userInfo/UserInfo';

import s from './styles/mainStyle/main.module.scss'

function App() {

  return (
    <BrowserRouter>
      <div className={s.wrapper}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/users/:id" element={<UserInfo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
