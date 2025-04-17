import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.svg';

interface HeroProps {
  language?: string;
}

const Hero = ({
  language = 'en'
}: HeroProps) => {
  const content = {
    en: {
      tagline: "Justice for All, Powered by AI",
      description: "Breaking down legal barriers in India through AI-powered legal literacy in your language.",
      ctaPrimary: "Ask NyayaGPT",
      ctaSecondary: "Learn More"
    },
    hi: {
      tagline: "न्याय सभी के लिए, एआई द्वारा संचालित",
      description: "आपकी भाषा में AI-संचालित कानूनी साक्षरता के माध्यम से भारत में कानूनी बाधाओं को तोड़ना।",
      ctaPrimary: "न्यायाGPT से पूछें",
      ctaSecondary: "और जानें"
    }
  };

  const {
    tagline,
    description,
    ctaPrimary,
    ctaSecondary
  } = content[language as keyof typeof content] || content.en;

  return (
    <section className="hero-gradient text-white">
      <div className="container-custom min-h-[80vh] flex flex-col md:flex-row items-center justify-between py-16">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            {tagline}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg opacity-90 animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{
            animationDelay: '0.3s'
          }}>
            <Button size="lg" asChild className="bg-secondary text-black hover:bg-secondary/90">
              <Link to="/ask">
                {ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border-white text-white hover:bg-white/20 hover:border-white/80 transition-all duration-300 group"
            >
              <Link 
                to="/about" 
                className="flex items-center group-hover:tracking-wider transition-all duration-300 group-hover:text-secondary"
              >
                {ctaSecondary}
                <ArrowRight 
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5 group-hover:text-secondary" 
                />
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fade-in" style={{
          animationDelay: '0.5s'
        }}>
          <img src={heroImage} alt="Justice and technology illustration" className="change the image " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
