
import React from 'react';
import ChatInterface from '@/components/ChatInterface';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const AskPage = () => {
  return (
    <main className="section-padding bg-neutral">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Ask NyayaGPT</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get legal information in your language. Ask questions via text or voice and receive simplified explanations of complex legal concepts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Alert className="mb-6 bg-primary/5 border-primary/20">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              NyayaGPT provides general legal information, not personalized legal advice. For specific legal help, please consult a qualified professional.
            </AlertDescription>
          </Alert>

          <ChatInterface />

          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">How to Use NyayaGPT</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary mr-3 flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <span className="text-gray-700">
                    <strong>Type or speak</strong> your legal question in your preferred language
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary mr-3 flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <span className="text-gray-700">
                    <strong>Use simple language</strong> - avoid complex legal terminology
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary mr-3 flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <span className="text-gray-700">
                    <strong>Switch languages</strong> using the dropdown menu if needed
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary mr-3 flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <span className="text-gray-700">
                    <strong>Listen to responses</strong> by clicking the speaker icon
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AskPage;
