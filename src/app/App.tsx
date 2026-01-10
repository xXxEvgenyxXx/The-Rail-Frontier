import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './providers/Router';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route 
            key={route.url} 
            path={route.url} 
            element={<route.component />} 
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;