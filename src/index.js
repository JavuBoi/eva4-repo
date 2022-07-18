import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/*" element={<App />}></Route>
    </Routes>
  </Router>
);
