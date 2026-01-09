import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';

function App() {

  return (
    <main className="min-h-screen font-inter">
      <Header />
      <LandingPage />
      <Footer />
    </main>
  )
}

export default App
