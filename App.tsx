import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DishGrid from './components/DishGrid';
import FoodMap from './components/FoodMap';
import Stories from './components/Stories';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Simple initialization log
  useEffect(() => {
    console.log("Hà Nội Trên Mâm app initialized");
  }, []);

  return (
    <div className="min-h-screen bg-hanoi-bg font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <DishGrid />
        <FoodMap />
        <Stories />
      </main>
      <Footer />
    </div>
  );
};

export default App;