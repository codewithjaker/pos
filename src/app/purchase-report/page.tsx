// app/purchase-report/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
} from "lucide-react";

// Mock data - in a real app, this would come from an API
const purchaseData = [
  {
    id: 1,
    date: "26/09/2023",
    reference: "5389607",
    supplier: "Solid IT Solution",
    status: "received",
    grandTotal: 120.0,
    paid: 120.0,
    due: 0.0,
    paymentStatus: "paid",
  },
  {
    id: 2,
    date: "25/09/2023",
    reference: "5389607",
    supplier: "Medizo Co.",
    status: "ordered",
    grandTotal: 2100.0,
    paid: 0.0,
    due: 2100.0,
    paymentStatus: "due",
  },
  {
    id: 3,
    date: "24/09/2023",
    reference: "5389607",
    supplier: "Coze Agency",
    status: "received",
    grandTotal: 1210.0,
    paid: 1210.0,
    due: 0.0,
    paymentStatus: "paid",
  },
  {
    id: 4,
    date: "23/09/2023",
    reference: "5389607",
    supplier: "Costik Corpo.",
    status: "received",
    grandTotal: 1500.0,
    paid: 1500.0,
    due: 0.0,
    paymentStatus: "paid",
  },
  {
    id: 5,
    date: "21/09/2023",
    reference: "5389607",
    supplier: "Jeel Beauty Co.",
    status: "pending",
    grandTotal: 1100.0,
    paid: 1000.0,
    due: 100.0,
    paymentStatus: "partial",
  },
  {
    id: 6,
    date: "19/09/2023",
    reference: "5389607",
    supplier: "Eeza Corporation",
    status: "received",
    grandTotal: 15300.0,
    paid: 15300.0,
    due: 0.0,
    paymentStatus: "received",
  },
];

const getStatusBadge = (status: string) => {
  const statusConfig = {
    received: { variant: "default" as const, label: "Received" },
    ordered: { variant: "secondary" as const, label: "Ordered" },
    pending: { variant: "destructive" as const, label: "Pending" },
  };

  const config = statusConfig[status as keyof typeof statusConfig] || {
    variant: "outline" as const,
    label: status,
  };
  return <Badge variant={config.variant}>{config.label}</Badge>;
};

const getPaymentStatusBadge = (status: string) => {
  const paymentConfig = {
    paid: { variant: "default" as const, label: "Paid" },
    due: { variant: "destructive" as const, label: "Due" },
    partial: { variant: "secondary" as const, label: "Partial" },
    received: { variant: "default" as const, label: "Received" },
  };

  const config = paymentConfig[status as keyof typeof paymentConfig] || {
    variant: "outline" as const,
    label: status,
  };
  return <Badge variant={config.variant}>{config.label}</Badge>;
};

export default function PurchaseReportPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 pb-4 border-b">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Purchase Report
          </h1>
        </div>
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <a
            href="/dashboard"
            className="hover:text-foreground transition-colors"
          >
            Dashboard
          </a>
          <span>/</span>
          <span className="text-foreground">Purchase Report</span>
        </nav>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search on this table"
              className="pl-8 bg-white"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Excel
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            PDF
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card className="shadow-sm border-0">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-medium">DATE</TableHead>
                  <TableHead className="font-medium">REFERENCE</TableHead>
                  <TableHead className="font-medium">SUPPLIER</TableHead>
                  <TableHead className="font-medium">STATUS</TableHead>
                  <TableHead className="font-medium">GRAND TOTAL</TableHead>
                  <TableHead className="font-medium">PAID</TableHead>
                  <TableHead className="font-medium">DUE</TableHead>
                  <TableHead className="font-medium text-right">
                    PAYMENT STATUS
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchaseData.map((purchase) => (
                  <TableRow key={purchase.id}>
                    <TableCell className="font-medium">
                      <span className="text-sm text-muted-foreground">
                        {purchase.date}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm">
                      {purchase.reference}
                    </TableCell>
                    <TableCell className="text-sm">
                      {purchase.supplier}
                    </TableCell>
                    <TableCell>{getStatusBadge(purchase.status)}</TableCell>
                    <TableCell className="text-sm">
                      ${purchase.grandTotal.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-sm">
                      ${purchase.paid.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-sm">
                      ${purchase.due.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {getPaymentStatusBadge(purchase.paymentStatus)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Showing product per page</span>
          <Select defaultValue="10">
            <SelectTrigger className="w-20 h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            1
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            2
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            3
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

    </div>
  );
}
