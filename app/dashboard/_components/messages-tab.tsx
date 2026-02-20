'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isFromTeam: boolean;
}

export default function MessagesTab() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'John Doe',
      content: 'Hi! We have completed the initial design mockups. Please review them when you get a chance.',
      timestamp: '2024-02-18 10:30',
      isFromTeam: true,
    },
    {
      id: 2,
      sender: 'You',
      content: 'Thanks! I will review them today and send feedback.',
      timestamp: '2024-02-18 11:00',
      isFromTeam: false,
    },
    {
      id: 3,
      sender: 'Jane Smith',
      content: 'The development team is ready to start Phase 2. Do you have any updates?',
      timestamp: '2024-02-18 14:15',
      isFromTeam: true,
    },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: messages.length + 1,
      sender: 'You',
      content: newMessage,
      timestamp: new Date().toLocaleString(),
      isFromTeam: false,
    };

    setMessages([...messages, message]);
    setNewMessage('');
    toast.success('Message sent');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Messages</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">Communicate with your project team</p>
      </div>

      <Card className="h-96 flex flex-col">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Team Chat
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isFromTeam ? 'justify-start' : 'justify-end'}`}>
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.isFromTeam
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100'
                    : 'bg-blue-500 text-white'
                }`}
              >
                {msg.isFromTeam && <p className="text-xs font-medium mb-1">{msg.sender}</p>}
                <p className="text-sm">{msg.content}</p>
                <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
              </div>
            </div>
          ))}
        </CardContent>
        <div className="border-t p-4 space-y-2">
          <Textarea
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="resize-none"
            rows={2}
          />
          <Button onClick={handleSendMessage} className="w-full gap-2">
            <Send className="w-4 h-4" />
            Send Message
          </Button>
        </div>
      </Card>
    </div>
  );
}
