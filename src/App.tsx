import './App.scss';
import * as React from 'react';
import {
  Navigate, Route, Routes, useNavigate
} from 'react-router-dom';
import $ from 'jquery';
import Login from './pages/login/Login';
import Header from './header/Header';
import Home from './pages/home/Home';
import Footer from './footer/Footer';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import GENERAL_CONTEXT from './context/GeneralContext';
import Metals from './pages/home/subpages/Metals';
import Seeds from './pages/home/subpages/Seeds';
import About from './pages/about/About';

function App() {
  const CONTEXT = React.useContext(GENERAL_CONTEXT);

  function Redirect({ to }) {
    const NAVIGATE = useNavigate();
    React.useEffect(()=> {
      NAVIGATE(to, { replace: true });
    });
    return null;
  }

  return (
    <div className="App">
      <Header className="top_header" />
      <main className="page">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          >
            <Route path="/" element={<Navigate to="/products/metals" replace />} />
            <Route path="products/metals" element={<Metals />} />
            <Route path="products/seeds" element={<Seeds />} />
          </Route>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
