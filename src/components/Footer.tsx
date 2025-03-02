
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 border-t border-border mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                <span className="font-semibold">A</span>
              </div>
              <span className="font-serif text-lg font-medium">ArtTherapy<span className="text-primary">AI</span></span>
            </Link>
            
            <p className="text-foreground/70 mb-6 max-w-md">
              Combining the power of machine learning and emotional intelligence to create 
              personalized art therapy experiences that promote mental wellbeing.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/create" className="text-foreground/70 hover:text-primary transition-colors">
                  Create Art
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-foreground/70 hover:text-primary transition-colors">
                  Data Insights
                </Link>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary flex items-center group">
                  <span>Research Papers</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary flex items-center group">
                  <span>API Documentation</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary flex items-center group">
                  <span>Mental Health Resources</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary flex items-center group">
                  <span>Privacy Policy</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border text-center text-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} ArtTherapyAI. All rights reserved. This is a concept demo for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
