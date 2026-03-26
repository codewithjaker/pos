// app/warehouse-report/page.tsx
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// Types
interface WarehouseData {
  date: string;
  reference: string;
  customer: string;
  quantity: number;
  status: "received" | "ordered" | "pending";
  grandTotal: number;
  paid: number;
  due: number;
  paymentStatus: "paid" | "due" | "partial" | "received";
}

interface TabData {
  [key: string]: WarehouseData[];
}

// Mock data
const warehouseData: TabData = {
  sale: [
    {
      date: "26/09/2023",
      reference: "5389607",
      customer: "Jane Ronan",
      quantity: 1,
      status: "received",
      grandTotal: 120.00,
      paid: 120.00,
      due: 0.00,
      paymentStatus: "paid"
    },
    {
      date: "25/09/2023",
      reference: "5389607",
      customer: "Victor James",
      quantity: 14,
      status: "ordered",
      grandTotal: 2100.00,
      paid: 0.00,
      due: 2100.00,
      paymentStatus: "due"
    },
    {
      date: "24/09/2023",
      reference: "5389607",
      customer: "Anda Smith",
      quantity: 10,
      status: "received",
      grandTotal: 1210.00,
      paid: 1210.00,
      due: 0.00,
      paymentStatus: "paid"
    },
    {
      date: "23/09/2023",
      reference: "5389607",
      customer: "Jennifer Lora",
      quantity: 22,
      status: "received",
      grandTotal: 1500.00,
      paid: 1500.00,
      due: 0.00,
      paymentStatus: "paid"
    },
    {
      date: "21/09/2023",
      reference: "5389607",
      customer: "Angela Carter",
      quantity: 23,
      status: "pending",
      grandTotal: 1100.00,
      paid: 1000.00,
      due: 100.00,
      paymentStatus: "partial"
    },
    {
      date: "19/09/2023",
      reference: "5389607",
      customer: "Jonathon Ronan",
      quantity: 15,
      status: "received",
      grandTotal: 15300.00,
      paid: 15300.00,
      due: 0.00,
      paymentStatus: "received"
    }
  ],
  purchase: [
    // Similar structure as sale data
    {
      date: "26/09/2023",
      reference: "5389607",
      customer: "Jane Ronan",
      quantity: 1,
      status: "received",
      grandTotal: 120.00,
      paid: 120.00,
      due: 0.00,
      paymentStatus: "paid"
    }
  ],
  quotation: [
    // Similar structure as sale data
    {
      date: "26/09/2023",
      reference: "5389607",
      customer: "Jane Ronan",
      quantity: 1,
      status: "received",
      grandTotal: 120.00,
      paid: 120.00,
      due: 0.00,
      paymentStatus: "paid"
    }
  ],
  return: [
    // Similar structure as sale data
    {
      date: "26/09/2023",
      reference: "5389607",
      customer: "Jane Ronan",
      quantity: 1,
      status: "received",
      grandTotal: 120.00,
      paid: 120.00,
      due: 0.00,
      paymentStatus: "paid"
    }
  ],
  expenses: [
    // Similar structure as sale data
    {
      date: "26/09/2023",
      reference: "5389607",
      customer: "Jane Ronan",
      quantity: 1,
      status: "received",
      grandTotal: 120.00,
      paid: 120.00,
      due: 0.00,
      paymentStatus: "paid"
    }
  ]
};

const warehouseOptions = [
  { value: "1", label: "Warehouse 01" },
  { value: "2", label: "Warehouse 02" },
  { value: "3", label: "Warehouse 03" }
];

const pageSizeOptions = [
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" }
];

export default function WarehouseReportPage() {
  const [selectedWarehouse, setSelectedWarehouse] = useState("1");
  const [pageSize, setPageSize] = useState("10");
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  const toggleRowSelection = (reference: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(reference)) {
      newSelected.delete(reference);
    } else {
      newSelected.add(reference);
    }
    setSelectedRows(newSelected);
  };

  const toggleAllSelection = (data: WarehouseData[]) => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(data.map(item => item.reference)));
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "received": return "default";
      case "ordered": return "secondary";
      case "pending": return "destructive";
      default: return "outline";
    }
  };

  const getPaymentStatusVariant = (status: string) => {
    switch (status) {
      case "paid": return "default";
      case "due": return "destructive";
      case "partial": return "secondary";
      case "received": return "default";
      default: return "outline";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const TableContent = ({ data }: { data: WarehouseData[] }) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={selectedRows.size === data.length && data.length > 0}
                onCheckedChange={() => toggleAllSelection(data)}
              />
              <span>DATE</span>
            </div>
          </TableHead>
          <TableHead>REFERENCE</TableHead>
          <TableHead>CUSTOMER</TableHead>
          <TableHead>QUANTITY</TableHead>
          <TableHead>STATUS</TableHead>
          <TableHead>GRAND TOTAL</TableHead>
          <TableHead>PAID</TableHead>
          <TableHead>DUE</TableHead>
          <TableHead>PAYMENT STATUS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={`${item.reference}-${index}`}>
            <TableCell>
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={selectedRows.has(item.reference)}
                  onCheckedChange={() => toggleRowSelection(item.reference)}
                />
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </div>
            </TableCell>
            <TableCell className="font-medium">{item.reference}</TableCell>
            <TableCell>{item.customer}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>
              <Badge variant={getStatusVariant(item.status)}>
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </Badge>
            </TableCell>
            <TableCell>{formatCurrency(item.grandTotal)}</TableCell>
            <TableCell>{formatCurrency(item.paid)}</TableCell>
            <TableCell>{formatCurrency(item.due)}</TableCell>
            <TableCell>
              <Badge variant={getPaymentStatusVariant(item.paymentStatus)}>
                {item.paymentStatus.charAt(0).toUpperCase() + item.paymentStatus.slice(1)}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      {/* Header */}
      <div className="flex flex-col space-y-4 mb-6 pb-4 border-b">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Warehouse Report</h1>
          </div>
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-foreground">Warehouse Report</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        <div className="lg:col-span-3">
          <Select value={selectedWarehouse} onValueChange={setSelectedWarehouse}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select warehouse" />
            </SelectTrigger>
            <SelectContent>
              {warehouseOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="lg:col-span-9 flex justify-end gap-3">
          <Button variant="outline" className="gap-2">
            <FileText className="h-4 w-4" />
            Excel
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            PDF
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <Card className="shadow-sm border-0">
        <CardContent className="p-6">
          <Tabs defaultValue="sale" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-6">
              <TabsTrigger value="sale">Sale</TabsTrigger>
              <TabsTrigger value="purchase">Purchase</TabsTrigger>
              <TabsTrigger value="quotation">Quotation</TabsTrigger>
              <TabsTrigger value="return">Return</TabsTrigger>
              <TabsTrigger value="expenses">Expenses</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sale">
              <div className="rounded-md border">
                <TableContent data={warehouseData.sale} />
              </div>
            </TabsContent>

            <TabsContent value="purchase">
              <div className="rounded-md border">
                <TableContent data={warehouseData.purchase} />
              </div>
            </TabsContent>

            <TabsContent value="quotation">
              <div className="rounded-md border">
                <TableContent data={warehouseData.quotation} />
              </div>
            </TabsContent>

            <TabsContent value="return">
              <div className="rounded-md border">
                <TableContent data={warehouseData.return} />
              </div>
            </TabsContent>

            <TabsContent value="expenses">
              <div className="rounded-md border">
                <TableContent data={warehouseData.expenses} />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Showing product per page</span>
          <Select value={pageSize} onValueChange={setPageSize}>
            <SelectTrigger className="w-20 h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {pageSizeOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

    </div>
  );
}

// Icons (you can replace with actual icons from lucide-react or similar)
const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const Download = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);