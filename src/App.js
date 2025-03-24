import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginButton from './components/loginButton';
import FinnaHome from './components/finnaHome';
import AboutMe from './components/AboutMe';

export default function MyApp() {
  console.log('MyApp is rendering');
  return (
      <Routes>
        <Route path="/" element={
          <div>
            <h1>Welcome to my app</h1>
            <LoginButton />
          </div>
        } />
        <Route path="/finnaHome" element={<FinnaHome />} />
        <Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
  );
}




