
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SentimentAnalyzer from '@/components/SentimentAnalyzer';
import DataInsights from '@/components/DataInsights';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <SentimentAnalyzer />
        <DataInsights />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
