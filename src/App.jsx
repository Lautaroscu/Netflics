import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Movie } from './pages/Movie';
import { Series } from './pages/Series';
import { Serie } from './pages/Serie';
import { LoginPage } from './pages/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  localStorage.setItem("isAuthenticated" , false)
  const {isAuthenticated} = localStorage.getItem("isAuthenticated")
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>

    <Router>
      <div className="app">
       <Header isLoggedin={isAuthenticated} /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path='/login' element={<LoginPage />}/>
          <Route path="/series" element={<Series />} />
          <Route path="series/serie/:id" element={<Serie />} />

          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </div>
    </Router>
    </GoogleOAuthProvider>

  );
}

export default App;
