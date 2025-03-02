
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { getEmotionalTrendsData } from '@/lib/sentimentAnalysis';

const DataInsights = () => {
  const emotionData = getEmotionalTrendsData();
  
  // Colors for the emotion categories
  const EMOTION_COLORS = {
    Joy: '#FFC107',
    Sadness: '#2196F3',
    Anger: '#F44336',
    Fear: '#9C27B0',
    Neutral: '#9E9E9E',
    Calm: '#4CAF50'
  };
  
  // Correlation data (mocked)
  const correlationData = [
    { name: 'Art Creation', correlationWithWellbeing: 0.78 },
    { name: 'Emotional Expression', correlationWithWellbeing: 0.65 },
    { name: 'Consistent Practice', correlationWithWellbeing: 0.72 },
    { name: 'Social Sharing', correlationWithWellbeing: 0.45 },
    { name: 'Reflection', correlationWithWellbeing: 0.62 }
  ];
  
  // Weekly emotion data (mocked)
  const weeklyEmotionData = [
    { day: 'Monday', joy: 25, sadness: 40, anger: 15, fear: 10, calm: 5, neutral: 5 },
    { day: 'Tuesday', joy: 30, sadness: 30, anger: 20, fear: 5, calm: 10, neutral: 5 },
    { day: 'Wednesday', joy: 40, sadness: 20, anger: 10, fear: 5, calm: 15, neutral: 10 },
    { day: 'Thursday', joy: 35, sadness: 25, anger: 15, fear: 10, calm: 5, neutral: 10 },
    { day: 'Friday', joy: 45, sadness: 15, anger: 5, fear: 5, calm: 20, neutral: 10 },
    { day: 'Saturday', joy: 55, sadness: 10, anger: 5, fear: 5, calm: 20, neutral: 5 },
    { day: 'Sunday', joy: 50, sadness: 15, anger: 10, fear: 5, calm: 15, neutral: 5 }
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif mb-8 text-center">Data Insights</h2>
        
        <div className="glass-card p-6 rounded-2xl mb-10">
          <h3 className="text-xl font-medium mb-6">Emotion Distribution in Dataset</h3>
          <p className="mb-6 text-foreground/70">
            This visualization represents the distribution of primary emotions detected in our 
            anonymized dataset, showing which emotional states are most commonly expressed.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={emotionData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    dataKey="value" 
                    name="Frequency" 
                    radius={[4, 4, 0, 0]}
                  >
                    {emotionData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={EMOTION_COLORS[entry.name as keyof typeof EMOTION_COLORS]} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={emotionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {emotionData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={EMOTION_COLORS[entry.name as keyof typeof EMOTION_COLORS]} 
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-6 rounded-2xl mb-10">
          <h3 className="text-xl font-medium mb-6">Art Therapy Correlation Analysis</h3>
          <p className="mb-6 text-foreground/70">
            This chart shows the correlation between different aspects of art therapy 
            participation and reported well-being improvement, based on our research.
          </p>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={correlationData}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 1]} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
                <YAxis dataKey="name" type="category" />
                <Tooltip formatter={(value) => `${(Number(value) * 100).toFixed(0)}%`} />
                <Bar 
                  dataKey="correlationWithWellbeing" 
                  fill="#8884d8" 
                  name="Correlation with Well-being"
                  radius={[0, 4, 4, 0]}
                >
                  {correlationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`hsl(${240 + index * 30}, 70%, 60%)`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="glass-card p-6 rounded-2xl">
          <h3 className="text-xl font-medium mb-6">Weekly Emotion Patterns</h3>
          <p className="mb-6 text-foreground/70">
            This visualization tracks how emotional expression changes throughout the week,
            showing patterns in when certain emotions are most commonly experienced.
          </p>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weeklyEmotionData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="joy" name="Joy" fill={EMOTION_COLORS.Joy} stackId="a" />
                <Bar dataKey="sadness" name="Sadness" fill={EMOTION_COLORS.Sadness} stackId="a" />
                <Bar dataKey="anger" name="Anger" fill={EMOTION_COLORS.Anger} stackId="a" />
                <Bar dataKey="fear" name="Fear" fill={EMOTION_COLORS.Fear} stackId="a" />
                <Bar dataKey="calm" name="Calm" fill={EMOTION_COLORS.Calm} stackId="a" />
                <Bar dataKey="neutral" name="Neutral" fill={EMOTION_COLORS.Neutral} stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataInsights;
