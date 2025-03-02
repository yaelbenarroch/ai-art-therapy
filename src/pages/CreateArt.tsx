
import React from 'react';
import Navbar from '@/components/Navbar';
import SentimentAnalyzer from '@/components/SentimentAnalyzer';
import Footer from '@/components/Footer';

const CreateArt = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-6">Create Your Therapeutic Art</h1>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
            Express your current emotional state and let our AI generate a unique artwork 
            tailored to your feelings. This creative process can help you visualize, 
            process, and understand your emotions.
          </p>
        </div>
      </div>
      <SentimentAnalyzer />
      <Footer />
    </div>
  );
};

export default CreateArt;
