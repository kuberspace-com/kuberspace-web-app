import './App.scss';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '@mui/icons-material';
import { AUTH_PROVIDER } from './utilityComponents/authentication';
import Header from './header/Header';
import Home from './pages/home/Home';
import Footer from './footer/Footer';

function App() {
  return (
    <AUTH_PROVIDER>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </AUTH_PROVIDER>
  );
}
export default App;
