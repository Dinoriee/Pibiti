import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import ObatPage from './pages/ObatPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import AhliDetailPage from './pages/AhliDetailPage';
import ReviewListPage from './pages/ReviewListPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="obat" element={<ObatPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="ahli/:id" element={<AhliDetailPage />} />
        <Route path="reviewlist" element={<ReviewListPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;