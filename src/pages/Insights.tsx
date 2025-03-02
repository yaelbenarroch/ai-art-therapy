
import React from 'react';
import Navbar from '@/components/Navbar';
import DataInsights from '@/components/DataInsights';
import Footer from '@/components/Footer';
import { BarChart2, BookOpen, Users } from 'lucide-react';

const Insights = () => {
  // Sample research insights
  const researchInsights = [
    {
      title: "Emotional Expression Through Art",
      description: "Our analysis of 2,500+ art therapy sessions shows a 47% improvement in emotional awareness when participants use visual expression alongside verbal communication.",
      icon: BookOpen
    },
    {
      title: "Sentiment Pattern Recognition",
      description: "Machine learning analysis identified recurring emotional patterns, with 68% of users showing improved emotional regulation after 4+ weeks of consistent art therapy.",
      icon: BarChart2
    },
    {
      title: "Cross-Cultural Emotional Expression",
      description: "Sentiment analysis across 15 countries revealed universal emotional markers in visual expression despite cultural differences in verbal emotional language.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-6">Data Science Insights</h1>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
            Explore the underlying data science behind our art therapy platform. These insights 
            represent patterns discovered across our anonymized dataset, illuminating the 
            connections between emotional expression and mental wellbeing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {researchInsights.map((insight, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <insight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">{insight.title}</h3>
                <p className="text-foreground/70">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DataInsights />
      <Footer />
    </div>
  );
};

export default Insights;
