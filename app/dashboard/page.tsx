'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogOut, Calendar, Briefcase, FileText, MessageSquare, Settings } from 'lucide-react';
import { toast } from 'sonner';
import Plasma from "@/components/plasma"
import ProjectsTab from './_components/projects-tab';
import CalendarTab from './_components/calendar-tab';
import InvoicesTab from './_components/invoices-tab';
import MessagesTab from './_components/messages-tab';
import SettingsTab from './_components/settings-tab';

export default function DashboardPage() {
  const { isAuthenticated, user, logout, loading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
      router.push('/');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#000000] dark:bg-slate-900">
      <Plasma color="#8b5cf6" speed={0.8} direction="forward" scale={1.5} opacity={0.4} mouseInteractive={true} />
      {/* Header */}
      <header className="bg-black border-b border-slate-600 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">Client Dashboard</h1>
            <p className="text-sm text-slate-300 dark:text-slate-400">Welcome, {user?.email}</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto">
            <TabsTrigger value="overview" className="gap-2">
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="gap-2">
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Projects</span>
            </TabsTrigger>
            <TabsTrigger value="calendar" className="gap-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Calendar</span>
            </TabsTrigger>
            <TabsTrigger value="invoices" className="gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Invoices</span>
            </TabsTrigger>
           
            <TabsTrigger value="settings" className="gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Active Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">3</div>
                  <p className="text-xs text-slate-500 mt-1">In progress</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Upcoming Meetings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">2</div>
                  <p className="text-xs text-slate-500 mt-1">This week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Pending Invoices</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">$5,240</div>
                  <p className="text-xs text-slate-500 mt-1">Due soon</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Unread Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">4</div>
                  <p className="text-xs text-slate-500 mt-1">From team</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              <Card className='bg-[#1d1d1f]'>
                <CardHeader>
                  <CardTitle className='text-white'>Recent Projects</CardTitle>
                  <CardDescription>Your active projects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-[#141316] dark:bg-slate-800 rounded-lg">
                        <div>
                          <p className="font-medium text-sm text-white">Project {i}</p>
                          <p className="text-xs text-slate-500">60% complete</p>
                        </div>
                        <div className="w-16 h-2 bg-[#1d1d1f] dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-lime-500" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className='text-white'>Upcoming Meetings</CardTitle>
                  <CardDescription>Next 7 days</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3"> 
                    {[1, 2].map((i) => (
                      <div key={i} className="p-3 bg-[#141316] dark:bg-slate-800 rounded-lg border-l-4 border-lime-500">
                        <p className="font-medium text-sm text-white">Meeting {i}</p>
                        <p className="text-xs text-slate-500">Tomorrow at 2:00 PM</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="mt-6">
            <ProjectsTab />
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar" className="mt-6">
            <CalendarTab />
          </TabsContent>

          {/* Invoices Tab */}
          <TabsContent value="invoices" className="mt-6">
            <InvoicesTab />
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="mt-6">
            <MessagesTab />
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="mt-6">
            <SettingsTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
