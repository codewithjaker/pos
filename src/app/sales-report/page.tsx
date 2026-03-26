// app/sales-report/page.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

interface SalesData {
  date: string;
  reference: string;
  supplier: string;
  status: "received" | "ordered" | "pending";
  grandTotal: string;
  paid: string;
  due: string;
  paymentStatus: "paid" | "due" | "partial";
}

const salesData: SalesData[] = [
  {
    date: "26/09/2023",
    reference: "5389607",
    supplier: "Solid IT Solution",
    status: "received",
    grandTotal: "$120.00",
    paid: "$120.00",
    due: "$00.00",
    paymentStatus: "paid",
  },
  {
    date: "25/09/2023",
    reference: "5389607",
    supplier: "Victor James",
    status: "ordered",
    grandTotal: "$2100.00",
    paid: "$00.00",
    due: "$2100.00",
    paymentStatus: "due",
  },
  {
    date: "24/09/2023",
    reference: "5389607",
    supplier: "Anda Smith",
    status: "received",
    grandTotal: "$1210.00",
    paid: "$1210.00",
    due: "$00.00",
    paymentStatus: "paid",
  },
  {
    date: "23/09/2023",
    reference: "5389607",
    supplier: "Jennifer Lora",
    status: "received",
    grandTotal: "$1500.00",
    paid: "$1500.00",
    due: "$00.00",
    paymentStatus: "paid",
  },
  {
    date: "21/09/2023",
    reference: "5389607",
    supplier: "Angela Carter",
    status: "pending",
    grandTotal: "$1100.00",
    paid: "$1000.00",
    due: "$100.00",
    paymentStatus: "partial",
  },
  {
    date: "19/09/2023",
    reference: "5389607",
    supplier: "Jonathon Ronan",
    status: "received",
    grandTotal: "$15300.00",
    paid: "$15300.00",
    due: "$00.00",
    paymentStatus: "paid",
  },
];

const getStatusVariant = (status: SalesData["status"]) => {
  switch (status) {
    case "received":
      return "default";
    case "ordered":
      return "secondary";
    case "pending":
      return "destructive";
    default:
      return "default";
  }
};

const getPaymentStatusVariant = (status: SalesData["paymentStatus"]) => {
  switch (status) {
    case "paid":
      return "default";
    case "due":
      return "destructive";
    case "partial":
      return "secondary";
    default:
      return "default";
  }
};

export default function SalesReportPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 border-b pb-4">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-gray-900">Sales Report</h1>
          </div>
          <nav className="flex space-x-2 text-sm">
            <a href="/dashboard" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Sales Report</span>
          </nav>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search on this table"
                className="pl-10 bg-white"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="bg-white">
              Excel
            </Button>
            <Button variant="outline" className="bg-white">
              PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Table */}
      <Card className="mb-8">
        <CardContent className="p-0">
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
              {salesData.map((sale, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{sale.date}</TableCell>
                  <TableCell>{sale.reference}</TableCell>
                  <TableCell>{sale.supplier}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(sale.status)}>
                      {sale.status.charAt(0).toUpperCase() +
                        sale.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{sale.grandTotal}</TableCell>
                  <TableCell>{sale.paid}</TableCell>
                  <TableCell>{sale.due}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={getPaymentStatusVariant(sale.paymentStatus)}
                    >
                      {sale.paymentStatus.charAt(0).toUpperCase() +
                        sale.paymentStatus.slice(1)}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <span className="text-sm text-gray-600">
            Showing product per page
          </span>
          <Select defaultValue="10">
            <SelectTrigger className="w-20 bg-white">
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
          <Button variant="outline" size="sm" className="h-8 w-8">
            1
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8">
            2
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8">
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
