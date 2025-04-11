import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { mockTeams, getComplaintsByTeam } from '@/lib/mockData';
import TeamCard from '@/components/TeamCard';
import ComplaintTable from '@/components/ComplaintTable';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Mail, Users, AlertCircle } from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const complaints = getComplaintsByTeam('main-admin');
  
  // Calculate some stats for the admin dashboard
  const totalComplaints = complaints.length;
  const newComplaints = complaints.filter(c => c.status === 'new').length;
  const whatsappComplaints = complaints.filter(c => c.source === 'whatsapp').length;
  const emailComplaints = complaints.filter(c => c.source === 'email').length;
  
  const percentWhatsapp = totalComplaints ? Math.round((whatsappComplaints / totalComplaints) * 100) : 0;
  const percentEmail = totalComplaints ? Math.round((emailComplaints / totalComplaints) * 100) : 0;

  return (
    <Layout requireAuth requiredRoles={['main-admin']}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Monitor all team activity and complaints</p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="complaints">All Complaints</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Total Complaints</CardDescription>
                  <CardTitle className="text-3xl">{totalComplaints}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-1 h-4 w-4" />
                    <span>Across all teams</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>New Complaints</CardDescription>
                  <CardTitle className="text-3xl">{newComplaints}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <AlertCircle className="mr-1 h-4 w-4 text-red-500" />
                    <span>Waiting for response</span>
                  </div>
                </CardContent>
              </Card>
              
             
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Teams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockTeams.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="complaints" className="mt-6">
            <ComplaintTable complaints={complaints} />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
