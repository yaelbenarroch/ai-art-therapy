
// This is a simplified sentiment analysis utility for demo purposes
// In a production app, this would connect to a proper NLP model API

export type EmotionType = 'joy' | 'sadness' | 'anger' | 'fear' | 'neutral' | 'calm';

export interface SentimentResult {
  primaryEmotion: EmotionType;
  emotionScores: Record<EmotionType, number>;
  confidence: number;
}

// Simple word-based sentiment dictionary
const emotionDictionary: Record<string, EmotionType> = {
  // Joy words
  happy: 'joy',
  excited: 'joy',
  joyful: 'joy',
  elated: 'joy',
  delighted: 'joy',
  glad: 'joy',
  cheerful: 'joy',
  
  // Sadness words
  sad: 'sadness',
  unhappy: 'sadness',
  depressed: 'sadness',
  gloomy: 'sadness',
  miserable: 'sadness',
  heartbroken: 'sadness',
  
  // Anger words
  angry: 'anger',
  furious: 'anger',
  irritated: 'anger',
  annoyed: 'anger',
  frustrated: 'anger',
  
  // Fear words
  afraid: 'fear',
  scared: 'fear',
  anxious: 'fear',
  worried: 'fear',
  nervous: 'fear',
  terrified: 'fear',
  
  // Calm words
  calm: 'calm',
  peaceful: 'calm',
  relaxed: 'calm',
  tranquil: 'calm',
  serene: 'calm',
  content: 'calm',
};

// Add more words to each emotion category
const extendedDictionary: Record<string, EmotionType> = {
  // Joy
  thrilled: 'joy',
  ecstatic: 'joy',
  pleased: 'joy',
  content: 'joy',
  satisfied: 'joy',
  blissful: 'joy',
  jubilant: 'joy',
  
  // Sadness
  sorrowful: 'sadness',
  downcast: 'sadness',
  blue: 'sadness',
  downhearted: 'sadness',
  melancholy: 'sadness',
  grieving: 'sadness',
  
  // Anger
  enraged: 'anger',
  mad: 'anger',
  irate: 'anger',
  outraged: 'anger',
  hostile: 'anger',
  
  // Fear
  frightened: 'fear',
  alarmed: 'fear',
  apprehensive: 'fear',
  panicked: 'fear',
  uneasy: 'fear',
  
  // Calm
  composed: 'calm',
  collected: 'calm',
  easygoing: 'calm',
  mellow: 'calm',
  mindful: 'calm',

  // Neutral
  okay: 'neutral',
  fine: 'neutral',
  neutral: 'neutral',
  indifferent: 'neutral',
  average: 'neutral',
};

// Combine dictionaries
const fullDictionary = { ...emotionDictionary, ...extendedDictionary };

export const analyzeSentiment = (text: string): SentimentResult => {
  // Initialize scores for each emotion
  const scores: Record<EmotionType, number> = {
    joy: 0,
    sadness: 0,
    anger: 0,
    fear: 0,
    neutral: 0.1, // Small base value for neutral
    calm: 0
  };
  
  // Normalize and tokenize the input text
  const normalizedText = text.toLowerCase();
  const words = normalizedText.match(/\b(\w+)\b/g) || [];
  
  // Count emotion words
  let emotionWordsFound = 0;
  
  words.forEach(word => {
    if (fullDictionary[word]) {
      scores[fullDictionary[word]] += 1;
      emotionWordsFound++;
    }
  });
  
  // If no emotion words found, increase neutral score
  if (emotionWordsFound === 0) {
    scores.neutral = 1;
  }
  
  // Find primary emotion
  let primaryEmotion: EmotionType = 'neutral';
  let maxScore = 0;
  
  Object.keys(scores).forEach(emotion => {
    if (scores[emotion as EmotionType] > maxScore) {
      maxScore = scores[emotion as EmotionType];
      primaryEmotion = emotion as EmotionType;
    }
  });
  
  // Calculate confidence (1.0 if all words match the same emotion, less otherwise)
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const confidence = totalScore > 0 ? maxScore / totalScore : 0;
  
  // Normalize scores to add up to 1
  Object.keys(scores).forEach(emotion => {
    scores[emotion as EmotionType] = totalScore > 0 
      ? scores[emotion as EmotionType] / totalScore 
      : emotion === 'neutral' ? 1 : 0;
  });
  
  return {
    primaryEmotion,
    emotionScores: scores,
    confidence
  };
};

export const getEmotionColor = (emotion: EmotionType): string => {
  const colorMap: Record<EmotionType, string> = {
    joy: '#FFF8E1',
    sadness: '#E1F5FE',
    anger: '#FFEBEE',
    fear: '#F3E5F5',
    neutral: '#F5F5F5',
    calm: '#E0F2F1'
  };
  
  return colorMap[emotion] || colorMap.neutral;
};

export const getEmotionDescription = (emotion: EmotionType): string => {
  const descriptions: Record<EmotionType, string> = {
    joy: 'Your expression reflects happiness and contentment. Art created from joy often features warm colors and flowing patterns.',
    sadness: 'Your words convey a sense of sadness. Art from this emotion often features blue tones and can be reflective and meaningful.',
    anger: 'There\'s a sense of frustration in your expression. Art created from anger can be bold and dynamic with strong lines.',
    fear: 'Your words suggest anxiety or concern. Art created from fear often has contrast and can help process complex feelings.',
    neutral: 'Your expression seems balanced and neutral. This creates art that is harmonious and centered.',
    calm: 'There\'s a peaceful quality to your expression. Calm emotional states create art with soothing patterns and gentle transitions.'
  };
  
  return descriptions[emotion] || descriptions.neutral;
};

// Mock data for emotional trends
export const getEmotionalTrendsData = () => {
  // Mock data representing emotional expression patterns across a dataset
  return [
    { name: 'Joy', value: 30 },
    { name: 'Sadness', value: 20 },
    { name: 'Anger', value: 15 },
    { name: 'Fear', value: 12 },
    { name: 'Neutral', value: 13 },
    { name: 'Calm', value: 10 },
  ];
};

// Mock data for wellness recommendations
export const getWellnessRecommendations = (emotion: EmotionType): string[] => {
  const recommendations: Record<EmotionType, string[]> = {
    joy: [
      'Capture this positive energy through expressive art',
      'Share your creative expressions with others',
      'Journal about what brings you joy to revisit later'
    ],
    sadness: [
      'Express emotions through blue and purple color palettes',
      'Create art in a comforting environment',
      'Consider soft, flowing brushstrokes to process feelings'
    ],
    anger: [
      'Use bold, expressive strokes to release tension',
      'Try physical activities before or after creating art',
      'Explore contrasting colors to represent complex emotions'
    ],
    fear: [
      'Start with small, controlled artistic expressions',
      'Create in a safe, comfortable environment',
      'Use art to visualize moving through the fear'
    ],
    neutral: [
      'Experiment with new artistic techniques',
      'Use art to explore what might bring more emotional depth',
      'Create mindfully, focusing on the process rather than outcome'
    ],
    calm: [
      'Practice mindful art creation to maintain this state',
      'Use flowing, natural patterns and shapes',
      'Consider art journaling to document this balanced state'
    ]
  };
  
  return recommendations[emotion] || recommendations.neutral;
};
