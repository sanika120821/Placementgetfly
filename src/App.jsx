import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import FAQ from './Components/FAQ/FAQ';
import NotificationPage from './Components/Notification/NotificationPage';
import Home from './Components/Home/Home'; 


const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/notifications" element={<NotificationPage />} />
          </Routes>
        </div>   
           </div>
    </Router>
  );
};

export default App;
