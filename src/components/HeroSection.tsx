
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Sparkles, BarChart } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center pb-20 pt-24">
      {/* Background blobs */}
      <div className="blob blob-primary w-[40rem] h-[40rem] -top-20 -left-20"></div>
      <div className="blob blob-accent w-[35rem] h-[35rem] top-1/3 -right-20"></div>
      <div className="blob blob-secondary w-[30rem] h-[30rem] -bottom-20 left-1/4"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">AI-Powered Art Therapy</span>
          </div>
          
          <h1 className="mb-6 leading-tight">
            Discover <span className="text-primary">Emotional Healing</span> Through AI-Generated Art
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Experience the therapeutic power of art created uniquely for your emotional state, 
            backed by data science and modern machine learning techniques.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/create"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-105"
            >
              Start Creating
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/insights"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-all hover:scale-105"
            >
              Explore Insights
              <BarChart className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in-slow">
          <div className="glass-card p-6 rounded-2xl hover:shadow-md transition-all hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Sentiment Analysis</h3>
            <p className="text-foreground/70">
              Advanced NLP models analyze your emotional state from text input to create personalized art experiences.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl hover:shadow-md transition-all hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-medium mb-2">AI-Generated Art</h3>
            <p className="text-foreground/70">
              State-of-the-art generative models transform your emotions into unique, therapeutic visual art.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl hover:shadow-md transition-all hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center mb-4">
              <BarChart className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">Data Insights</h3>
            <p className="text-foreground/70">
              Explore patterns in emotional expression and art creation through interactive data visualizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
