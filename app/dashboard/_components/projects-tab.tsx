'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const statusColors: Record<string, string> = {
  'In Progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'Completed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'On Hold': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  'Planning': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
};

export default function ProjectsTab() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Website Redesign',
      status: 'In Progress',
      progress: 65,
      dueDate: '2024-03-15',
      description: 'Complete redesign of company website',
    },
    {
      id: 2,
      name: 'Mobile App Development',
      status: 'In Progress',
      progress: 40,
      dueDate: '2024-04-30',
      description: 'iOS and Android app development',
    },
    {
      id: 3,
      name: 'Brand Identity',
      status: 'Completed',
      progress: 100,
      dueDate: '2024-02-28',
      description: 'Logo and brand guidelines',
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', description: '' });

  const handleAddProject = () => {
    if (!formData.name.trim()) {
      toast.error('Project name is required');
      return;
    }
    toast.success('Project request submitted to team');
    setFormData({ name: '', description: '' });
    setIsOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Projects</h2>
          <p className="text-sm text-slate-200 dark:text-slate-400">Track your active projects and deliverables</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Request Project
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Request New Project</DialogTitle>
              <DialogDescription>Submit a new project request to our team</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Project Name</label>
                <Input
                  placeholder="e.g., Website Redesign"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  placeholder="Describe your project..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <Button onClick={handleAddProject} className="w-full">
                Submit Request
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 ">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow bg-[#7a7a84]">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white flex items-center gap-2">
                    {project.name}
                    <Badge className={`${statusColors[project.status]}`}>
                      {project.status}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-200 dark:text-slate-400">Progress</span>
                  <span className="font-medium text-lime-400">{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-lime-500 to-lime-600 transition-all"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-200 dark:text-slate-400">Due Date</span>
                <span className="font-medium text-white">{new Date(project.dueDate).toLocaleDateString()}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
