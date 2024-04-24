import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar_component from './components/navbar.jsx';
import Home from './pages/home.jsx';
import Chisiamo from './pages/chisiamo.jsx';
import ErrorPage from './pages/errorpage.jsx';
import Contact_us from './pages/contact_us.jsx';
import Login from './pages/login.jsx';
import Footer from './components/footer.jsx';
import RegisterPage from './pages/registerpage.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar_component />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path="/chisiamo" element={<Chisiamo />} />
          <Route path="/contact_us" element={<Contact_us />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registerpage" element={<RegisterPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
