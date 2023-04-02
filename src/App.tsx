import './App.scss';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import $ from 'jquery';
import Login from './pages/login/Login';
import Header from './header/Header';
import Home from './pages/home/Home';
import Footer from './footer/Footer';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import GENERAL_CONTEXT from './context/GeneralContext';

function App() {
  const CONTEXT = React.useContext(GENERAL_CONTEXT);

  return (
    <div className="App">
      <Header className="top_header" />
      <main className="page">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
