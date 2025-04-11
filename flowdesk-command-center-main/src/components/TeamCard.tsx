
import { Link } from 'react-router-dom';
import { TeamInfo } from '@/lib/mockData';
import { ArrowRight, HelpCircle, Heart, CreditCard, Settings } from 'lucide-react';

// Map team IDs to icons
const teamIcons: Record<string, any> = {
  'team-general-queries': HelpCircle,
  'team-psychological': Heart,
  'team-accounts': CreditCard,
  'team-technical': Settings,
};

interface TeamCardProps {
  team: TeamInfo;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  const IconComponent = teamIcons[team.id] || HelpCircle;

  return (
    <Link 
      to={`/dashboard/teams/${team.id}`} 
      className="block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${team.color}`}>
          <IconComponent className="h-6 w-6 text-white" />
        </div>
        <div className="flex items-center text-flowdesk-600 group-hover:translate-x-1 transition-transform">
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mb-1">{team.name}</h3>
      <p className="text-gray-600 text-sm mb-5">{team.description}</p>
      
      <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-4">
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-900">{team.members}</p>
          <p className="text-xs text-gray-500">Members</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-900">{team.activeTickets}</p>
          <p className="text-xs text-gray-500">Active</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold text-flowdesk-600">{team.resolvedToday}</p>
          <p className="text-xs text-gray-500">Resolved</p>
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
