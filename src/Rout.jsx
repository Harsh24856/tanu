import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Happy_birthday } from './Happy_birthday.jsx'
import Tofu from './tofu.jsx'
import Gift from './Gift.jsx'

function Rout() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Happy_birthday />} />
        <Route path="/tofu" element={<Tofu />} />
        <Route path="/gift" element={<Gift />} />
      </Routes>
    </Router>
  );
}

export default Rout;