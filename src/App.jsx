import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Movie } from './pages/Movie';
import { Series } from './pages/Series';
import { Serie } from './pages/Serie';
import { LoginPage } from './pages/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState , useEffect } from "react";
import PricingPage from './pages/Pricing';
import { AccountPage } from './pages/Account';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const [showFullHeader , setShowHeader]= useState(true)


  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>

<Router>
      <div className="app">
       {isAuthenticated && <Header show={showFullHeader} />} 
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <PricingPage to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />

          <Route path="/login" element={<LoginPage setShowHeader={setShowHeader} handleAuthenticate={setIsAuthenticated} />} />
          <Route path="/series" element={isAuthenticated ? <Series /> : <Navigate to="/login" />} />
          <Route path="/serie/:id" element={isAuthenticated ? <Serie /> : <Navigate to="/login" />} />
          <Route path="/movie/:id" element={isAuthenticated ? <Movie /> : <Navigate to="/login" />} />
          <Route path='/pricing' element={<PricingPage  />}/>
          <Route path='/my-account'  element={<AccountPage setShowHeader={setShowHeader} />} />
        </Routes>
      </div>
    </Router>
    </GoogleOAuthProvider>

  );
}

export default App;
