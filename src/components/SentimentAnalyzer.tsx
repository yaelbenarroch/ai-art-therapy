
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { analyzeSentiment, EmotionType, getEmotionDescription, getWellnessRecommendations } from '@/lib/sentimentAnalysis';
import { ArtStyle, artStyles, generateArtwork } from '@/lib/artGeneration';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, RefreshCw } from 'lucide-react';
import ArtDisplay from './ArtDisplay';
import { toast } from 'sonner';

const SentimentAnalyzer = () => {
  const [text, setText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [sentimentResult, setSentimentResult] = useState<ReturnType<typeof analyzeSentiment> | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<ArtStyle>(artStyles[0]);
  const [generatedArt, setGeneratedArt] = useState<string | null>(null);
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  
  const handleAnalyze = () => {
    if (text.trim().length < 10) {
      toast.error('Please enter a longer description of your feelings');
      return;
    }
    
    setAnalyzing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const result = analyzeSentiment(text);
      setSentimentResult(result);
      setAnalyzing(false);
      toast.success(`Analysis complete: ${result.primaryEmotion} detected`);
    }, 1000);
  };
  
  const handleGenerateArt = async () => {
    if (!sentimentResult) return;
    
    setGenerating(true);
    
    try {
      const result = await generateArtwork(sentimentResult.primaryEmotion, selectedStyle);
      setGeneratedArt(result.imageUrl);
      toast.success('Artwork generated successfully');
    } catch (error) {
      toast.error('Failed to generate artwork');
      console.error(error);
    } finally {
      setGenerating(false);
    }
  };
  
  const resetAll = () => {
    setText('');
    setSentimentResult(null);
    setGeneratedArt(null);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif mb-6 text-center">Express Yourself</h2>
        
        <div className="mb-8">
          <Textarea
            placeholder="How are you feeling today? Describe your emotions, thoughts, or experiences in a few sentences..."
            value={text}
            onChange={handleTextChange}
            className="w-full h-32 p-4 text-lg focus:ring-primary"
            disabled={analyzing || !!sentimentResult}
          />
          
          {!sentimentResult ? (
            <Button 
              onClick={handleAnalyze}
              className="mt-4 bg-primary hover:bg-primary/90"
              disabled={text.trim().length < 10 || analyzing}
            >
              {analyzing ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  Analyze Sentiment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          ) : (
            <Button 
              onClick={resetAll}
              variant="outline"
              className="mt-4"
            >
              Start Over
            </Button>
          )}
        </div>
        
        {sentimentResult && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="glass-card p-6 rounded-2xl mb-6">
              <h3 className="text-xl font-medium mb-4">Sentiment Analysis Results</h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <div className={`emotion-chip emotion-chip-${sentimentResult.primaryEmotion}`}>
                  {sentimentResult.primaryEmotion.charAt(0).toUpperCase() + sentimentResult.primaryEmotion.slice(1)}
                </div>
                
                {Object.entries(sentimentResult.emotionScores)
                  .filter(([emotion, score]) => emotion !== sentimentResult.primaryEmotion && score > 0.1)
                  .map(([emotion, score]) => (
                    <div 
                      key={emotion} 
                      className={`emotion-chip emotion-chip-${emotion}`}
                    >
                      {emotion.charAt(0).toUpperCase() + emotion.slice(1)} ({Math.round(score * 100)}%)
                    </div>
                  ))}
              </div>
              
              <p className="text-foreground/80 mb-6">
                {getEmotionDescription(sentimentResult.primaryEmotion)}
              </p>
              
              <div className="mb-6">
                <h4 className="font-medium mb-2">Wellness Recommendations</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {getWellnessRecommendations(sentimentResult.primaryEmotion).map((rec, index) => (
                    <li key={index} className="text-foreground/80">{rec}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Select Art Style</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {artStyles.map((style) => (
                    <div
                      key={style.id}
                      onClick={() => setSelectedStyle(style)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                        selectedStyle.id === style.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-muted bg-card hover:border-primary/50'
                      }`}
                    >
                      <h5 className="font-medium">{style.name}</h5>
                      <p className="text-sm text-foreground/70">{style.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                onClick={handleGenerateArt}
                className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground"
                disabled={generating}
              >
                {generating ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Generating Art...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Artwork
                  </>
                )}
              </Button>
            </div>
            
            {generatedArt && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ArtDisplay 
                  imageUrl={generatedArt} 
                  emotion={sentimentResult.primaryEmotion} 
                  artStyle={selectedStyle}
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SentimentAnalyzer;
