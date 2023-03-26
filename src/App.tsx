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

  React.useEffect(()=> {
    setTimeout(()=> {
      $('.App').css({ 'background-image': $('.App').css('background-image').replace('-small', '-large') });
    }, 3000);
  }, []);

  return (
    <div
      className="App"
      style={CONTEXT.state.page === '/' ? {
        backgroundImage: 'url(/images/homePageBackground-small.webp)',
        backgroundAttachment: 'fixed',
        position: 'absolute',
        height: '200%',
        width: '100vw',
        backgroundSize: 'cover',
        zIndex: '-1'
      } : {}}
    >
      {/* <div
        className="App"
        style={CONTEXT.state.page === '/' ? {
          backgroundImage: 'url(/images/homePageBackground-small.webp)',
          backgroundAttachment: 'fixed',
          position: 'absolute',
          height: '200%',
          width: '100vw',
          backgroundSize: 'cover',
          zIndex: '-1'
        } : {}}
      /> */}
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
