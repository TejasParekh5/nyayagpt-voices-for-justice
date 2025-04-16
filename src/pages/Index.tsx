
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  Globe2, 
  MicrosoftTeams,
  VolumeUp,
  BookOpen,
  Shield,
  Award
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';

const HomePage = () => {
  const features = [
    {
      icon: <Scale size={24} />,
      title: "Legal Literacy",
      description: "Access simplified explanations of complex legal concepts and rights in your language."
    },
    {
      icon: <Globe2 size={24} />,
      title: "Multilingual Support",
      description: "Get legal information in multiple Indian languages, breaking down language barriers."
    },
    {
      icon: <VolumeUp size={24} />,
      title: "Voice Interface",
      description: "Ask questions using voice and listen to responses, making it accessible to everyone."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Educational Resources",
      description: "Learn about your rights through interactive content, videos, and quizzes."
    },
    {
      icon: <Shield size={24} />,
      title: "Privacy-Focused",
      description: "Your conversations remain secure and private, with no personal data stored."
    },
    {
      icon: <Award size={24} />,
      title: "Expert Validated",
      description: "Information provided is reviewed by legal professionals for accuracy."
    }
  ];

  const testimonials = [
    {
      quote: "NyayaGPT helped me understand my land rights when facing a property dispute in my village.",
      author: "Rajiv Patel",
      role: "Farmer, Rajasthan",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "As a law student, I use NyayaGPT to quickly reference legal concepts in different languages for my community outreach work.",
      author: "Anjali Sharma",
      role: "Law Student, Delhi",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "Being able to ask legal questions in Tamil has made it possible for me to help my parents understand their pension rights.",
      author: "Karthik Rajan",
      role: "Software Engineer, Chennai",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero />
      
      {/* Problem Statement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Breaking Legal Barriers in India</h2>
              <p className="text-gray-700 mb-4">
                Over 80% of India's 1.4 billion population lacks basic legal literacy, with language being a major barrier to accessing justice.
              </p>
              <p className="text-gray-700 mb-4">
                Legal information is often available only in English or complex legal terminology, making it inaccessible to millions of citizens who speak diverse regional languages.
              </p>
              <p className="text-gray-700">
                NyayaGPT aims to bridge this gap by democratizing access to legal information through AI-powered multilingual assistance.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-neutral p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                    <MicrosoftTeams size={20} />
                  </div>
                  <h3 className="font-semibold text-lg">Our Impact</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="h-8 w-8 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mr-3">
                      <span className="font-semibold">1</span>
                    </div>
                    <span>Serving 10+ Indian languages</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-8 w-8 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mr-3">
                      <span className="font-semibold">2</span>
                    </div>
                    <span>Improving legal literacy for 100,000+ citizens</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-8 w-8 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mr-3">
                      <span className="font-semibold">3</span>
                    </div>
                    <span>Partnering with 50+ legal aid organizations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="section-padding bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How NyayaGPT Helps</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform makes legal information accessible to everyone, regardless of language or literacy level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="py-16 bg-primary/95 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Legal Question?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            Get instant, simplified answers in your preferred language. NyayaGPT is available 24/7 to help you understand your legal rights and options.
          </p>
          <Button size="lg" asChild className="bg-secondary text-black hover:bg-secondary/90">
            <Link to="/ask">Ask NyayaGPT Now</Link>
          </Button>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Voices of Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from people across India who have benefited from NyayaGPT's legal assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
