import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainPage from './pages/main-page/MainPage';
import UserInfo from './pages/user-info/UserInfo';

import './styles/main-style/main.css'

function App() {

  return (
    <BrowserRouter>
      <div className='wrapper'>
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
