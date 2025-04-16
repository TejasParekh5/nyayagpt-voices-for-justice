
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  RotateCcw,
  Loader2
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock messages for demonstration
const initialMessages = [
  {
    role: 'system',
    content: 'Hello! I\'m NyayaGPT, your AI legal assistant. How can I help you today?'
  }
];

const languages = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'हिंदी (Hindi)' },
  { value: 'bn', label: 'বাংলা (Bengali)' },
  { value: 'ta', label: 'தமிழ் (Tamil)' },
  { value: 'te', label: 'తెలుగు (Telugu)' },
  { value: 'mr', label: 'मराठी (Marathi)' },
];

const ChatInterface = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    setMessages([...messages, { role: 'user', content: inputMessage }]);
    setInputMessage('');
    
    // Simulate AI response
    setIsLoading(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          role: 'system', 
          content: "Based on the information provided, I can explain your rights in this situation. Under the Consumer Protection Act of 1986 (updated in 2019), you have the right to seek compensation for defective products. You should first approach the seller with a written complaint. If unsatisfied with their response, you can file a complaint with the Consumer Forum. Keep all receipts and documentation of the defect as evidence. The complaint must be filed within 2 years of purchasing the product." 
        }
      ]);
      setIsLoading(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real app, this would start/stop voice recording
  };

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
    // In a real app, this would start/stop text-to-speech
  };

  const handleLanguageChange = (value: string) => {
    setCurrentLanguage(value);
    // In a real app, this would change the language of the interface and AI responses
  };

  const clearChat = () => {
    setMessages(initialMessages);
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Chat Header */}
      <div className="bg-primary text-white px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Ask NyayaGPT</h2>
        <div className="flex items-center gap-2">
          <Select value={currentLanguage} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[180px] bg-white/10 border-0 focus:ring-white/20">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 bg-neutral">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 max-w-3xl ${
              msg.role === 'user' ? 'ml-auto' : 'mr-auto'
            }`}
          >
            <div
              className={`p-4 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-primary text-white rounded-br-none'
                  : 'bg-white text-gray-800 rounded-bl-none shadow'
              }`}
            >
              {msg.content}
            </div>
            {msg.role === 'system' && (
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={toggleSpeaking}
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  {isSpeaking ? <Volume2 size={16} /> : <VolumeX size={16} />}
                  <span className="sr-only">
                    {isSpeaking ? "Stop speaking" : "Read aloud"}
                  </span>
                </button>
                <p className="text-xs text-gray-500">
                  Disclaimer: AI-generated, not official legal advice.
                </p>
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-2 text-gray-500 mb-4">
            <Loader2 size={16} className="animate-spin" />
            <span>Generating response...</span>
          </div>
        )}
      </div>
      
      {/* Chat Input */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-2">
          <button
            onClick={clearChat}
            className="p-2 text-gray-500 hover:text-primary transition-colors"
            aria-label="Clear chat"
          >
            <RotateCcw size={18} />
          </button>
          <div className="flex-1 relative">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your legal question..."
              className="w-full p-3 pr-20 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
              rows={2}
            />
            <div className="absolute right-2 bottom-2 flex items-center gap-1">
              <button
                onClick={toggleRecording}
                className={`p-2 rounded-full ${
                  isRecording
                    ? 'bg-destructive/10 text-destructive'
                    : 'bg-gray-100 text-gray-500'
                }`}
                aria-label={isRecording ? "Stop recording" : "Start voice input"}
              >
                {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
              </button>
              <Button
                size="sm"
                className="rounded-full px-3 h-9 w-9"
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() && !isRecording}
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
