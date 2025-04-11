import { useState } from 'react';
import { Complaint } from '@/lib/mockData';
import { 
  MessageSquare, 
  Mail, 
  ChevronDown, 
  Search 
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ComplaintTableProps {
  complaints: Complaint[];
  teamView?: boolean;
}

const ComplaintTable: React.FC<ComplaintTableProps> = ({ complaints }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [sourceFilter, setSourceFilter] = useState<string | null>(null);

  const filteredComplaints = complaints.filter(complaint => {
    const matchesSearch = !searchTerm || 
      complaint.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      complaint.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      complaint.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = !statusFilter || complaint.status === statusFilter;
    const matchesSource = !sourceFilter || complaint.source === sourceFilter;

    return matchesSearch && matchesStatus && matchesSource;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search complaints..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>

          <div className="flex space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  {statusFilter ? statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1) : 'Status'}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setStatusFilter(null)}>
                  All Statuses
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter('new')}>
                  New
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter('in-progress')}>
                  In Progress
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter('resolved')}>
                  Resolved
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  {sourceFilter === 'whatsapp' ? 'WhatsApp' : 
                   sourceFilter === 'email' ? 'Email' : 'Source'}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSourceFilter(null)}>
                  All Sources
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSourceFilter('whatsapp')}>
                  WhatsApp
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSourceFilter('email')}>
                  Email
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredComplaints.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                  No complaints found matching your filters.
                </TableCell>
              </TableRow>
            ) : (
              filteredComplaints.map((complaint) => (
                <TableRow key={complaint.id}>
                  <TableCell className="font-mono text-xs">{complaint.id}</TableCell>
                  <TableCell className="font-medium">{complaint.customerName}</TableCell>
                  <TableCell className="max-w-xs truncate">{complaint.message}</TableCell>
                  <TableCell>
                    {complaint.source === 'whatsapp' ? (
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 text-green-600 mr-1" />
                        <span>WhatsApp</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-blue-600 mr-1" />
                        <span>Email</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{formatDate(complaint.timestamp)}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ComplaintTable;
