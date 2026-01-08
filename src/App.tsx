import { useState } from 'react';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';

function App() {

  return (
    <main className="min-h-screen font-inter">
      <Header />
      <LandingPage />
    </main>
  )
}

export default App
