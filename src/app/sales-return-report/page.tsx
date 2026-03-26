// app/sales-return-report/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
} from "lucide-react";

// Mock data - in a real app, this would come from an API
const salesReturnData = [
  {
    id: 1,
    date: "26/09/2023",
    reference: "5389607",
    return: "RT - 2234",
    customer: "Jane Ronan",
    paidBy: "Cash",
    amount: "$120.00",
  },
  {
    id: 2,
    date: "25/09/2023",
    reference: "5389607",
    return: "RT - 2234",
    customer: "Victor James",
    paidBy: "Cash",
    amount: "$2100.00",
  },
  {
    id: 3,
    date: "24/09/2023",
    reference: "5389607",
    return: "RT - 2234",
    customer: "Anda Smith",
    paidBy: "Cash",
    amount: "$1210.00",
  },
  {
    id: 4,
    date: "23/09/2023",
    reference: "5389607",
    return: "RT - 2234",
    customer: "Jennifer Lora",
    paidBy: "Cash",
    amount: "$1500.00",
  },
  {
    id: 5,
    date: "21/09/2023",
    reference: "5389607",
    return: "RT - 2234",
    customer: "Angela Carter",
    paidBy: "Cash",
    amount: "$1000.00",
  },
  {
    id: 6,
    date: "19/09/2023",
    reference: "5389607",
    return: "RT - 2234",
    customer: "Jonathon Ronan",
    paidBy: "Cash",
    amount: "$15300.00",
  },
];

export default function SalesReturnReport() {
  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col">
      {/* Header Section */}
      <div className="flex-1 space-y-6 p-6">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/pyle/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Sales Return Report</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Title */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Sales Return Report
            </h1>
          </div>
        </div>

        {/* Filters and Actions */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          {/* Search */}
          <div className="flex-1 max-w-sm">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search on this table" className="pl-8" />
            </div>
          </div>

          {/* Export Buttons */}
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

        {/* Table Card */}
        <Card>
          <CardContent className="p-0">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[120px]">
                      <button className="flex items-center gap-1 font-normal">
                        DATE
                        <ChevronUpDown className="h-4 w-4" />
                      </button>
                    </TableHead>
                    <TableHead>
                      <button className="flex items-center gap-1 font-normal">
                        REFERENCE
                        <ChevronUpDown className="h-4 w-4" />
                      </button>
                    </TableHead>
                    <TableHead>
                      <button className="flex items-center gap-1 font-normal">
                        RETURN
                        <ChevronUpDown className="h-4 w-4" />
                      </button>
                    </TableHead>
                    <TableHead>
                      <button className="flex items-center gap-1 font-normal">
                        CUSTOMER
                        <ChevronUpDown className="h-4 w-4" />
                      </button>
                    </TableHead>
                    <TableHead>
                      <button className="flex items-center gap-1 font-normal">
                        PAID BY
                        <ChevronUpDown className="h-4 w-4" />
                      </button>
                    </TableHead>
                    <TableHead className="text-right">
                      <button className="flex items-center gap-1 font-normal ml-auto">
                        AMOUNT
                        <ChevronUpDown className="h-4 w-4" />
                      </button>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salesReturnData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.date}</TableCell>
                      <TableCell>{item.reference}</TableCell>
                      <TableCell>{item.return}</TableCell>
                      <TableCell>{item.customer}</TableCell>
                      <TableCell>{item.paidBy}</TableCell>
                      <TableCell className="text-right font-semibold">
                        {item.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Pagination and Page Size */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Page Size Selector */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Showing product per page</span>
            <Select defaultValue="10">
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="30">30</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 bg-primary text-primary-foreground"
            >
              1
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8">
              2
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8">
              3
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
}

// ChevronUpDown component for sortable headers
function ChevronUpDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m7 15 5 5 5-5" />
      <path d="m7 9 5-5 5 5" />
    </svg>
  );
}
