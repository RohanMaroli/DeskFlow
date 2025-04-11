
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Mail, Bot, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center py-24 lg:py-32">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-gradient absolute inset-0"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-flowdesk-50 border border-flowdesk-200 mb-6 animate-fade-in">
              <span className="text-xs font-medium text-flowdesk-800">Intelligent Message Monitoring</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Streamline Your <span className="gradient-text">Customer Communications</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              FlowDesk automatically detects and routes WhatsApp messages and emails to the right team, 
              helping you provide faster response times and better customer service.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link to="/login">
                <Button className="bg-flowdesk-600 hover:bg-flowdesk-700 text-white font-medium px-6 py-3 rounded-lg w-full sm:w-auto shadow-md hover:shadow-lg transition-all">
                  Admin Login
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" className="border-flowdesk-200 text-flowdesk-800 font-medium px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-flowdesk-50 transition-all">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-flowdesk-100 flex items-center justify-center mr-3">
                  <MessageSquare className="h-5 w-5 text-flowdesk-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">WhatsApp</p>
                  <p className="text-xs text-gray-500">Monitoring</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-flowdesk-100 flex items-center justify-center mr-3">
                  <Mail className="h-5 w-5 text-flowdesk-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-xs text-gray-500">Integration</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-flowdesk-100 flex items-center justify-center mr-3">
                  <Bot className="h-5 w-5 text-flowdesk-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Auto-Route</p>
                  <p className="text-xs text-gray-500">Smart AI</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-flowdesk-100 flex items-center justify-center mr-3">
                  <BarChart className="h-5 w-5 text-flowdesk-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Analytics</p>
                  <p className="text-xs text-gray-500">Dashboard</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-flowdesk-300 to-flowdesk-500 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <MessageSquare className="h-6 w-6 text-flowdesk-600 mr-2" />
                      <span className="font-semibold text-flowdesk-900">FlowDesk Monitor</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-flowdesk-50 rounded-lg p-4">
                      <div className="flex items-start mb-2">
                        <div className="w-8 h-8 rounded-full bg-flowdesk-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <MessageSquare className="h-4 w-4 text-flowdesk-600" />
                        </div>
                        <div>
                          <p className="text-xs text-flowdesk-800 font-medium">WhatsApp Message</p>
                          <p className="text-sm mt-1">I haven't received my order yet, can you help?</p>
                          <div className="flex items-center mt-2">
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Auto-assigned to Logistics</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-flowdesk-50 rounded-lg p-4">
                      <div className="flex items-start mb-2">
                        <div className="w-8 h-8 rounded-full bg-flowdesk-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <Mail className="h-4 w-4 text-flowdesk-600" />
                        </div>
                        <div>
                          <p className="text-xs text-flowdesk-800 font-medium">Email Received</p>
                          <p className="text-sm mt-1">I'm having trouble with my account login...</p>
                          <div className="flex items-center mt-2">
                            <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">Auto-assigned to Technical</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="animate-float">
                        <Bot className="h-8 w-8 text-flowdesk-400" />
                      </div>
                    </div>
                    
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium">Processing metrics</span>
                        <span className="text-xs text-green-600">95% accuracy</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                        <div className="bg-flowdesk-500 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
