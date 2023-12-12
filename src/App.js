// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Slider from './Slider';
import MenuSection from './MenuSection';
import CategoryPage from './CategoryPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Slider />
        <Routes>
          <Route path="/" element={<MenuSection />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
