
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Award,
  Scale,
  Languages,
  Users,
  Lightbulb
} from 'lucide-react';

const AboutPage = () => {
  const partners = [
    { name: 'Bhashini', logo: 'https://bhashini.gov.in/images/logo.png' },
    { name: 'Azure OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
    { name: 'NALSA', logo: 'https://nalsa.gov.in/sites/default/files/logo.png' },
  ];

  return (
    <main>
      {/* About Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About NyayaGPT</h1>
            <p className="text-xl max-w-2xl text-white/90 mb-8">
              Empowering every Indian with accessible legal knowledge through artificial intelligence and multilingual support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-neutral p-8 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                  <Lightbulb size={24} />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-700">
                A legally literate India where every citizen, regardless of language, education, or economic status, can understand their rights and navigate the legal system with confidence.
              </p>
            </div>
            <div className="bg-neutral p-8 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                  <Scale size={24} />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-700">
                To democratize access to legal information by leveraging AI and language technologies to provide accurate, simplified legal knowledge in all major Indian languages, making justice accessible to the 1.4 billion citizens of India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and shape our approach to legal literacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Scale size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Justice</h3>
              <p className="text-gray-600">
                We believe access to legal information is a fundamental right and work to ensure no one is left behind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Equality</h3>
              <p className="text-gray-600">
                We're committed to removing language, literacy, and technological barriers to legal knowledge.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Trust</h3>
              <p className="text-gray-600">
                We provide accurate information reviewed by legal experts, ensuring reliability in all guidance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Languages size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-600">
                We design our services to be accessible to everyone, regardless of their background or abilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The minds behind NyayaGPT, committed to making legal literacy accessible to all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Tejas Parekh"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Tejas Parekh</h3>
              <p className="text-gray-500 mb-3">Co-founder & Legal Tech Lead</p>
              <p className="text-gray-600">
                Former lawyer with expertise in legal technology and a passion for making legal knowledge accessible to underserved communities.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Dhrumi Shah"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Dhrumi Shah</h3>
              <p className="text-gray-500 mb-3">Co-founder & AI Research Lead</p>
              <p className="text-gray-600">
                AI researcher specializing in natural language processing and multilingual models with a focus on building technology for social impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Collaborating with organizations that share our vision for accessible legal education.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="mt-3 text-gray-600">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Help us bridge the legal literacy gap in India. Whether you're a legal professional, language expert, or tech enthusiast, your skills can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-secondary text-black hover:bg-secondary/90">
              <Link to="/contact">Get Involved</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link to="/ask">Try NyayaGPT</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
