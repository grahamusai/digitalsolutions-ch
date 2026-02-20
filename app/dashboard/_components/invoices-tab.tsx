'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Eye } from 'lucide-react';
import { toast } from 'sonner';

interface Invoice {
  id: string;
  number: string;
  date: string;
  dueDate: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
  description: string;
}

export default function InvoicesTab() {
  const invoices: Invoice[] = [
    {
      id: '1',
      number: 'INV-2024-001',
      date: '2024-02-01',
      dueDate: '2024-03-01',
      amount: 2500,
      status: 'Paid',
      description: 'Website Design & Development',
    },
    {
      id: '2',
      number: 'INV-2024-002',
      date: '2024-02-15',
      dueDate: '2024-03-15',
      amount: 3240,
      status: 'Pending',
      description: 'Mobile App Development - Phase 1',
    },
    {
      id: '3',
      number: 'INV-2024-003',
      date: '2024-01-15',
      dueDate: '2024-02-15',
      amount: 1500,
      status: 'Overdue',
      description: 'Brand Identity & Logo Design',
    },
  ];

  const statusColors: Record<string, string> = {
    'Paid': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'Overdue': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  const handleDownload = (invoiceNumber: string) => {
    toast.success(`Downloading ${invoiceNumber}...`);
  };

  const handleView = (invoiceNumber: string) => {
    toast.success(`Opening ${invoiceNumber}...`);
  };

  const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const paidAmount = invoices.filter((inv) => inv.status === 'Paid').reduce((sum, inv) => sum + inv.amount, 0);
  const pendingAmount = invoices.filter((inv) => inv.status === 'Pending' || inv.status === 'Overdue').reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Invoices</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">View and manage your invoices</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Total Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalAmount.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Paid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${paidAmount.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Pending/Overdue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">${pendingAmount.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {invoices.map((invoice) => (
          <Card key={invoice.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {invoice.number}
                    <Badge className={statusColors[invoice.status]}>
                      {invoice.status}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{invoice.description}</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">${invoice.amount.toLocaleString()}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="space-y-1 text-sm">
                  <p className="text-slate-600 dark:text-slate-400">
                    Issued: {new Date(invoice.date).toLocaleDateString()}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Due: {new Date(invoice.dueDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleView(invoice.number)}
                    className="gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownload(invoice.number)}
                    className="gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
