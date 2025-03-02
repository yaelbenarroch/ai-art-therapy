
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Menu, X, BarChart2, PenTool, Brain, Home } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white transition-transform group-hover:scale-110">
            <Brain className="w-6 h-6" />
          </div>
          <span className="font-serif text-xl font-medium">ArtTherapy<span className="text-primary">AI</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link to="/create" className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors">
            <PenTool className="w-4 h-4" />
            <span>Create Art</span>
          </Link>
          <Link to="/insights" className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors">
            <BarChart2 className="w-4 h-4" />
            <span>Insights</span>
          </Link>
          <Link 
            to="/create" 
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Try Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md p-4 animate-fade-in">
          <div className="flex flex-col space-y-4 container mx-auto">
            <Link 
              to="/" 
              className="flex items-center space-x-2 p-2 hover:bg-muted rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link 
              to="/create" 
              className="flex items-center space-x-2 p-2 hover:bg-muted rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <PenTool className="w-5 h-5" />
              <span>Create Art</span>
            </Link>
            <Link 
              to="/insights" 
              className="flex items-center space-x-2 p-2 hover:bg-muted rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <BarChart2 className="w-5 h-5" />
              <span>Insights</span>
            </Link>
            <Link 
              to="/create" 
              className="bg-primary text-primary-foreground p-2 rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Try Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
