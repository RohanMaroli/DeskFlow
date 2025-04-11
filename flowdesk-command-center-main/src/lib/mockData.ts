export type UserRole = 'main-admin' | 'general-queries' | 'psychological' | 'accounts' | 'technical';

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
}

export type TeamInfo = {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  members: number;
  activeTickets: number;
  resolvedToday: number;
}

export type Complaint = {
  id: string;
  customerName: string;
  source: 'whatsapp' | 'email';
  message: string;
  timestamp: string;
  status: 'new' | 'in-progress' | 'resolved';
  assignedTo?: string;
  team: UserRole;
  priority: 'low' | 'medium' | 'high';
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@flowdesk.com',
    role: 'main-admin',
    avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=0D47A1&color=fff',
  },
  {
    id: '2',
    name: 'General Queries Rep',
    email: 'general@flowdesk.com',
    role: 'general-queries',
    avatar: 'https://ui-avatars.com/api/?name=General+Queries&background=00897B&color=fff',
  },
  {
    id: '3',
    name: 'Psychological Support',
    email: 'psychology@flowdesk.com',
    role: 'psychological',
    avatar: 'https://ui-avatars.com/api/?name=Psychological+Support&background=E64A19&color=fff',
  },
  {
    id: '4',
    name: 'Accounts Manager',
    email: 'accounts@flowdesk.com',
    role: 'accounts',
    avatar: 'https://ui-avatars.com/api/?name=Accounts+Manager&background=7B1FA2&color=fff',
  },
  {
    id: '5',
    name: 'Technical Coordinator',
    email: 'technical@flowdesk.com',
    role: 'technical',
    avatar: 'https://ui-avatars.com/api/?name=Technical+Coordinator&background=689F38&color=fff',
  },
];

export const mockTeams: TeamInfo[] = [
  {
    id: 'team-general-queries',
    name: 'General Queries',
    description: 'Handles general inquiries and customer support',
    icon: 'help-circle',
    color: 'bg-teal-500',
    members: 8,
    activeTickets: 24,
    resolvedToday: 13,
  },
  {
    id: 'team-psychological',
    name: 'Psychological',
    description: 'Provides mental health support and counseling',
    icon: 'heart',
    color: 'bg-orange-500',
    members: 6,
    activeTickets: 18,
    resolvedToday: 9,
  },
  {
    id: 'team-accounts',
    name: 'Accounts',
    description: 'Manages payment issues and subscription inquiries',
    icon: 'credit-card',
    color: 'bg-purple-500',
    members: 4,
    activeTickets: 12,
    resolvedToday: 7,
  },
  {
    id: 'team-technical',
    name: 'Technical',
    description: 'Resolves technical issues and product support',
    icon: 'settings',
    color: 'bg-green-500',
    members: 5,
    activeTickets: 15,
    resolvedToday: 8,
  },
];

export const mockComplaints: Complaint[] = [
  // General Queries complaints
  {
    id: 'gq-1',
    customerName: 'John Smith',
    source: 'whatsapp',
    message: 'I need help with my recent order. Can someone assist me?',
    timestamp: '2025-04-10T09:30:00',
    status: 'new',
    team: 'general-queries',
    priority: 'medium',
  },
  {
    id: 'gq-2',
    customerName: 'Mary Johnson',
    source: 'email',
    message: 'I have a question about your return policy.',
    timestamp: '2025-04-10T08:45:00',
    status: 'in-progress',
    assignedTo: 'Sarah',
    team: 'general-queries',
    priority: 'low',
  },
  {
    id: 'gq-3',
    customerName: 'David Wilson',
    source: 'whatsapp',
    message: 'Your customer service is terrible! I want to speak to a manager!',
    timestamp: '2025-04-10T10:15:00',
    status: 'new',
    team: 'general-queries',
    priority: 'high',
  },
  
  // Psychological Support complaints
  {
    id: 'psy-1',
    customerName: 'Alice Brown',
    source: 'email',
    message: 'I\'ve been feeling anxious about using your platform. Can someone help me?',
    timestamp: '2025-04-10T09:00:00',
    status: 'in-progress',
    assignedTo: 'Michael',
    team: 'psychological',
    priority: 'medium',
  },
  {
    id: 'psy-2',
    customerName: 'Robert Lee',
    source: 'whatsapp',
    message: 'I need to talk to someone about stress management with your services.',
    timestamp: '2025-04-10T11:20:00',
    status: 'new',
    team: 'psychological',
    priority: 'high',
  },
  
  // Accounts complaints
  {
    id: 'acc-1',
    customerName: 'Emma Garcia',
    source: 'email',
    message: 'I was charged twice for my subscription this month.',
    timestamp: '2025-04-10T08:30:00',
    status: 'in-progress',
    assignedTo: 'Jennifer',
    team: 'accounts',
    priority: 'high',
  },
  {
    id: 'acc-2',
    customerName: 'James Martinez',
    source: 'whatsapp',
    message: 'I would like to upgrade my subscription plan.',
    timestamp: '2025-04-10T13:45:00',
    status: 'new',
    team: 'accounts',
    priority: 'low',
  },
  
  // Technical complaints
  {
    id: 'tech-1',
    customerName: 'Sophia Rodriguez',
    source: 'email',
    message: 'My app keeps crashing whenever I try to upload photos.',
    timestamp: '2025-04-10T10:10:00',
    status: 'in-progress',
    assignedTo: 'Daniel',
    team: 'technical',
    priority: 'medium',
  },
  {
    id: 'tech-2',
    customerName: 'William Anderson',
    source: 'whatsapp',
    message: 'I cannot log into my account despite resetting my password.',
    timestamp: '2025-04-10T14:30:00',
    status: 'new',
    team: 'technical',
    priority: 'high',
  },
];

export const getComplaintsByTeam = (team: UserRole): Complaint[] => {
  if (team === 'main-admin') {
    return mockComplaints;
  }
  return mockComplaints.filter(complaint => complaint.team === team);
};

export const getTeamById = (id: string): TeamInfo | undefined => {
  return mockTeams.find(team => team.id === id);
};

export const login = (email: string, password: string): User | null => {
  const user = mockUsers.find(u => u.email === email);
  return user || null;
};
