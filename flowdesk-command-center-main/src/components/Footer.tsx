
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <MessageSquare className="h-7 w-7 text-flowdesk-600 mr-2" />
              <span className="text-xl font-bold gradient-text">FlowDesk</span>
            </Link>
            <p className="mt-3 text-gray-600 text-sm">
              Automated message monitoring solution for customer service teams. 
              Streamline your workflow with our intelligent bot system.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-900 text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-flowdesk-600 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-flowdesk-600 text-sm transition-colors">
                  Admin Portal
                </Link>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-flowdesk-600 text-sm transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-flowdesk-600 text-sm transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-900 text-base mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2 text-flowdesk-600" />
                <span>flowdeskproject.com</span>
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2 text-flowdesk-600" />
                <span>+91 9143756630</span>
              </li>
              <li className="flex items-start text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-flowdesk-600" />
                <span>Tilak vijay nagar<br />Bangalore, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} FlowDesk. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-flowdesk-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-flowdesk-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
