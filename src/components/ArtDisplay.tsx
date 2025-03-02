
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EmotionType } from '@/lib/sentimentAnalysis';
import { ArtStyle, generateArtPrompt } from '@/lib/artGeneration';
import { DownloadIcon, Share2Icon, InfoIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

interface ArtDisplayProps {
  imageUrl: string;
  emotion: EmotionType;
  artStyle: ArtStyle;
}

const ArtDisplay = ({ imageUrl, emotion, artStyle }: ArtDisplayProps) => {
  const [showInfo, setShowInfo] = useState(false);
  
  const handleDownload = () => {
    // In a real app, this would download the actual image
    // For this demo, we'll just open the image in a new tab
    window.open(imageUrl, '_blank');
    toast.success('Image opened in new tab');
  };
  
  const handleShare = () => {
    // In a real app, this would share the image
    // For this demo, we'll just copy the URL to clipboard
    navigator.clipboard.writeText(imageUrl);
    toast.success('Image URL copied to clipboard');
  };
  
  // Generate the AI prompt that "would have been used" to create this image
  const aiPrompt = generateArtPrompt(emotion, artStyle);
  
  return (
    <div className="art-display">
      <motion.div 
        className="artwork-container rounded-2xl overflow-hidden shadow-xl mb-4"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src={imageUrl}
          alt={`AI generated artwork reflecting ${emotion} in ${artStyle.name} style`}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </motion.div>
      
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center">
          <div className={`emotion-chip emotion-chip-${emotion} mr-2`}>
            {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
          </div>
          <div className="text-sm text-foreground/70">
            {artStyle.name} Style
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <InfoIcon className="h-4 w-4 mr-1" />
                Details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Artwork Details</DialogTitle>
              </DialogHeader>
              
              <div className="py-4">
                <h4 className="font-medium mb-2">AI Generation Prompt</h4>
                <p className="text-sm p-3 bg-muted rounded-md mb-4">{aiPrompt}</p>
                
                <h4 className="font-medium mb-2">Emotion Analysis</h4>
                <div className="flex items-center mb-4">
                  <div className={`emotion-chip emotion-chip-${emotion}`}>
                    {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
                  </div>
                </div>
                
                <h4 className="font-medium mb-2">Art Style</h4>
                <p className="text-sm mb-1"><strong>{artStyle.name}</strong></p>
                <p className="text-sm text-foreground/70">{artStyle.description}</p>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <DownloadIcon className="h-4 w-4 mr-1" />
            Save
          </Button>
          
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2Icon className="h-4 w-4 mr-1" />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArtDisplay;
