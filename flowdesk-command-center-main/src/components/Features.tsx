
import { Bot, MessageSquare, Mail, BarChart4, Clock, Users, Layers, Lock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-flowdesk-600" />,
      title: 'WhatsApp Monitoring',
      description: 'Automatically detect and route WhatsApp messages from customers to the appropriate team for fast resolution.'
    },
    {
      icon: <Mail className="h-8 w-8 text-flowdesk-600" />,
      title: 'Email Integration',
      description: 'Scan incoming emails for keywords and intent to determine the correct department for handling the request.'
    },
    {
      icon: <Bot className="h-8 w-8 text-flowdesk-600" />,
      title: 'AI-Powered Routing',
      description: 'Our intelligent system categorizes messages based on content and urgency for optimal team assignment.'
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-flowdesk-600" />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive reporting tools to track response times, team performance, and customer satisfaction metrics.'
    },
    {
      icon: <Clock className="h-8 w-8 text-flowdesk-600" />,
      title: 'Real-time Updates',
      description: 'Instant notifications for new messages and status changes to keep your teams informed and responsive.'
    },
    {
      icon: <Users className="h-8 w-8 text-flowdesk-600" />,
      title: 'Team Management',
      description: 'Assign roles, manage access permissions, and organize your support staff for maximum efficiency.'
    },
    {
      icon: <Layers className="h-8 w-8 text-flowdesk-600" />,
      title: 'Multi-Department Support',
      description: 'Customizable workflows for different teams including customer care, technical support, billing, and logistics.'
    },
    {
      icon: <Lock className="h-8 w-8 text-flowdesk-600" />,
      title: 'Secure Admin Portal',
      description: 'Role-based access control ensures team members only see information relevant to their responsibilities.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for <span className="gradient-text">Efficient Teams</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            FlowDesk combines intelligent message processing with team management tools to streamline your customer service workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="bg-flowdesk-50 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
