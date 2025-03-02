
// This is a simplified art generation utility for demo purposes
// In a production app, this would connect to a proper AI art generation API

import { EmotionType } from './sentimentAnalysis';

export interface ArtStyle {
  id: string;
  name: string;
  description: string;
}

export interface ArtworkGenerationResult {
  imageUrl: string;
  emotion: EmotionType;
  style: ArtStyle;
  seed: number;
}

// Predefined art styles
export const artStyles: ArtStyle[] = [
  {
    id: 'abstract',
    name: 'Abstract',
    description: 'Non-representational forms, shapes, and colors that express emotions directly'
  },
  {
    id: 'impressionist',
    name: 'Impressionist',
    description: 'Soft brushstrokes and emphasis on light, capturing the feeling of a moment'
  },
  {
    id: 'expressionist',
    name: 'Expressionist',
    description: 'Bold, intense colors and distorted forms to evoke emotional states'
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Simple, clean designs with minimal elements for clarity and focus'
  },
  {
    id: 'surrealist',
    name: 'Surrealist',
    description: 'Dreamlike, unexpected juxtapositions that explore the subconscious'
  }
];

// Art elements associated with different emotions
const emotionArtElements: Record<EmotionType, any> = {
  joy: {
    colors: ['#FFD700', '#FFA500', '#FF4500', '#FF6347', '#FFFF00', '#FFF8E1'],
    shapes: ['circles', 'spirals', 'waves'],
    patterns: ['radial', 'expanding', 'flowing'],
    intensity: 'high'
  },
  sadness: {
    colors: ['#4682B4', '#6495ED', '#B0C4DE', '#ADD8E6', '#E1F5FE', '#87CEFA'],
    shapes: ['drops', 'curves', 'flowing lines'],
    patterns: ['descending', 'smooth gradients', 'soft transitions'],
    intensity: 'low'
  },
  anger: {
    colors: ['#FF0000', '#8B0000', '#FF4500', '#FF6347', '#FFEBEE', '#FF7043'],
    shapes: ['sharp angles', 'jagged lines', 'triangles'],
    patterns: ['sharp contrasts', 'erratic', 'intense'],
    intensity: 'very high'
  },
  fear: {
    colors: ['#4B0082', '#800080', '#9370DB', '#BA55D3', '#F3E5F5', '#E6E6FA'],
    shapes: ['twisted forms', 'sharp edges', 'fractured patterns'],
    patterns: ['chaotic', 'dense', 'layered'],
    intensity: 'medium-high'
  },
  neutral: {
    colors: ['#808080', '#A9A9A9', '#D3D3D3', '#F5F5F5', '#DCDCDC', '#E0E0E0'],
    shapes: ['balanced forms', 'even spacing', 'symmetry'],
    patterns: ['ordered', 'regular', 'repeated'],
    intensity: 'low'
  },
  calm: {
    colors: ['#66CDAA', '#48D1CC', '#AFEEEE', '#E0FFFF', '#E0F2F1', '#B2DFDB'],
    shapes: ['gentle curves', 'soft edges', 'organic forms'],
    patterns: ['flowing', 'harmonious', 'balanced'],
    intensity: 'very low'
  }
};

// Since we can't actually generate AI art in this demo, we'll use placeholder images
// In a real implementation, this would call an API like DALL-E, Midjourney, or Stable Diffusion
const getArtPlaceholderForEmotion = (emotion: EmotionType): string => {
  // These would be replaced with actual AI-generated images in a production app
  const placeholders: Record<EmotionType, string[]> = {
    joy: [
      'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      'https://images.unsplash.com/photo-1552083375-1447ce886485'
    ],
    sadness: [
      'https://images.unsplash.com/photo-1501854140801-50d01698950b',
      'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6',
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9'
    ],
    anger: [
      'https://images.unsplash.com/photo-1516410529446-2c777cb7366d',
      'https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a',
      'https://images.unsplash.com/photo-1531386450864-1607c9f7c9c4'
    ],
    fear: [
      'https://images.unsplash.com/photo-1476370648495-3533f64427a2',
      'https://images.unsplash.com/photo-1529777117140-33283c2ce9a7',
      'https://images.unsplash.com/photo-1518281439008-56f5cf00e7e0'
    ],
    neutral: [
      'https://images.unsplash.com/photo-1577017040065-650ee4d43339',
      'https://images.unsplash.com/photo-1509909756405-be0199881695',
      'https://images.unsplash.com/photo-1579187160088-d8ce53fba6c7'
    ],
    calm: [
      'https://images.unsplash.com/photo-1439405326854-014607f694d7',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      'https://images.unsplash.com/photo-1473773508845-188df298d2d1'
    ]
  };
  
  const images = placeholders[emotion] || placeholders.neutral;
  return images[Math.floor(Math.random() * images.length)];
};

// Generate artwork based on emotion and style
export const generateArtwork = (
  emotion: EmotionType, 
  style: ArtStyle, 
  seed?: number
): Promise<ArtworkGenerationResult> => {
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      const generatedSeed = seed || Math.floor(Math.random() * 1000000);
      
      resolve({
        imageUrl: getArtPlaceholderForEmotion(emotion),
        emotion,
        style,
        seed: generatedSeed
      });
    }, 1500); // Simulate 1.5 second delay for "generation"
  });
};

// Get previously generated artworks (mock data)
export const getPreviousArtworks = (): ArtworkGenerationResult[] => {
  // This would be fetched from a database in a real app
  return [
    {
      imageUrl: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
      emotion: 'joy',
      style: artStyles[0],
      seed: 123456
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
      emotion: 'sadness',
      style: artStyles[1],
      seed: 789012
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      emotion: 'calm',
      style: artStyles[3],
      seed: 345678
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1529777117140-33283c2ce9a7',
      emotion: 'fear',
      style: artStyles[4],
      seed: 901234
    }
  ];
};

// Generate art creation prompt for AI models (for demonstration)
export const generateArtPrompt = (emotion: EmotionType, style: ArtStyle): string => {
  const elements = emotionArtElements[emotion];
  
  const prompts: Record<EmotionType, string[]> = {
    joy: [
      'Create a vibrant, uplifting artwork with dynamic movement',
      'Generate an artwork with warm, bright colors that evoke happiness',
      'Design a composition with playful, energetic elements and flowing forms'
    ],
    sadness: [
      'Create a reflective, melancholic artwork with subtle blue tones',
      'Design a composition with gentle downward movement and soft edges',
      'Generate an artwork that conveys thoughtful introspection and quiet beauty'
    ],
    anger: [
      'Create a bold, intense artwork with sharp contrasts and dynamic elements',
      'Design a composition with strong, jagged lines and forceful energy',
      'Generate an artwork that channels intensity through powerful visual elements'
    ],
    fear: [
      'Create an artwork with mysterious, uncertain spaces and shadowy elements',
      'Design a composition with fractured patterns and unsettling transitions',
      'Generate an artwork that explores the boundary between known and unknown'
    ],
    neutral: [
      'Create a balanced, harmonious artwork with equal visual weight',
      'Design a composition with clean lines and ordered structure',
      'Generate an artwork with a sense of calm clarity and balanced elements'
    ],
    calm: [
      'Create a serene, peaceful artwork with gentle flowing elements',
      'Design a composition with soft gradients and harmonious transitions',
      'Generate an artwork that evokes tranquility through balanced, organic forms'
    ]
  };
  
  // Select a random prompt template for the emotion
  const promptTemplates = prompts[emotion] || prompts.neutral;
  const basePrompt = promptTemplates[Math.floor(Math.random() * promptTemplates.length)];
  
  // Add style-specific elements to the prompt
  let styleModifier = '';
  switch (style.id) {
    case 'abstract':
      styleModifier = 'using non-representational forms and shapes';
      break;
    case 'impressionist':
      styleModifier = 'with soft brushstrokes and emphasis on light and atmosphere';
      break;
    case 'expressionist':
      styleModifier = 'with bold, intense colors and distorted forms';
      break;
    case 'minimalist':
      styleModifier = 'using simple, essential elements with clean composition';
      break;
    case 'surrealist':
      styleModifier = 'featuring unexpected juxtapositions and dreamlike qualities';
      break;
    default:
      styleModifier = '';
  }
  
  // Combine the elements
  const colorDescription = `incorporating ${elements.colors.slice(0, 3).join(', ')} as primary colors`;
  const finalPrompt = `${basePrompt} ${styleModifier}, ${colorDescription}.`;
  
  return finalPrompt;
};
