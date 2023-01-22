import './App.scss';
import React from 'react';
import { Routes } from 'react-router-dom';
import { AuthProvider } from './utility_components/authentication';
import Header from './header';
import Settings from './app_settings/settings';
import MakeRoutes from './utility_components/make_routes';

var routeObject = Settings.getRoutes();
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header className="top_header" />
        <div className="boxContainer">
          <Routes>
            {MakeRoutes(routeObject, 'setComponent')}
          </Routes>
        </div>
      </div>
    </AuthProvider>

  );
}
export default App;
