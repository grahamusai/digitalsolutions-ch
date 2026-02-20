'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, Clock, MapPin, Plus, X } from 'lucide-react';
import { toast } from 'sonner';

interface Meeting {
  id: number;
  title: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  description: string;
  attendees: string[];
}

export default function CalendarTab() {
  const [meetings, setMeetings] = useState<Meeting[]>([
    {
      id: 1,
      title: 'Project Kickoff',
      date: '2024-03-01',
      time: '10:00',
      duration: '1 hour',
      location: 'Zoom',
      description: 'Initial project discussion and requirements gathering',
      attendees: ['John Doe', 'Jane Smith'],
    },
    {
      id: 2,
      title: 'Design Review',
      date: '2024-03-05',
      time: '14:00',
      duration: '1.5 hours',
      location: 'Conference Room A',
      description: 'Review design mockups and get feedback',
      attendees: ['Design Team', 'You'],
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    duration: '1 hour',
    location: '',
    description: '',
  });

  const handleScheduleMeeting = () => {
    if (!formData.title || !formData.date || !formData.time) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Meeting request sent to team for confirmation');
    setFormData({ title: '', date: '', time: '', duration: '1 hour', location: '', description: '' });
    setIsOpen(false);
  };

  const handleCancelMeeting = (id: number) => {
    setMeetings(meetings.filter((m) => m.id !== id));
    toast.success('Meeting cancelled');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Calendar & Meetings</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Schedule and manage your meetings</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Schedule Meeting
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Schedule a Meeting</DialogTitle>
              <DialogDescription>Request a meeting with our team</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Meeting Title *</label>
                <Input
                  placeholder="e.g., Project Review"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Date *</label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Time *</label>
                  <Input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Duration</label>
                  <select
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  >
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>1.5 hours</option>
                    <option>2 hours</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Location</label>
                  <Input
                    placeholder="Zoom, Office, etc."
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  placeholder="What would you like to discuss?"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <Button onClick={handleScheduleMeeting} className="w-full">
                Request Meeting
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {meetings.map((meeting) => (
          <Card key={meeting.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{meeting.title}</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCancelMeeting(meeting.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>{new Date(meeting.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>{meeting.time} - {meeting.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>{meeting.location}</span>
              </div>
              {meeting.description && (
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400">{meeting.description}</p>
                </div>
              )}
              {meeting.attendees.length > 0 && (
                <div className="pt-2">
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">Attendees</p>
                  <div className="flex flex-wrap gap-2">
                    {meeting.attendees.map((attendee, i) => (
                      <span key={i} className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                        {attendee}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
