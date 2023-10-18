import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Any from './AustinTab';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Any />} />
      </Routes>
    </Router>
  );
}

export default App;