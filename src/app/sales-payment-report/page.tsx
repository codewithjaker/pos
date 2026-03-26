// app/sales-payment-report/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
const paymentData = [
  {
    date: "26/09/2023",
    reference: "5389607",
    sale: "S - 2234",
    customer: "Jane Ronan",
    paidBy: "Cash",
    amount: "$120.00",
  },
  {
    date: "25/09/2023",
    reference: "5389607",
    sale: "S - 2234",
    customer: "Victor James",
    paidBy: "Cash",
    amount: "$2100.00",
  },
  {
    date: "24/09/2023",
    reference: "5389607",
    sale: "S - 2234",
    customer: "Anda Smith",
    paidBy: "Cash",
    amount: "$1210.00",
  },
  {
    date: "23/09/2023",
    reference: "5389607",
    sale: "S - 2234",
    customer: "Jennifer Lora",
    paidBy: "Cash",
    amount: "$1500.00",
  },
  {
    date: "21/09/2023",
    reference: "5389607",
    sale: "S - 2234",
    customer: "Angela Carter",
    paidBy: "Cash",
    amount: "$1000.00",
  },
  {
    date: "19/09/2023",
    reference: "5389607",
    sale: "S - 2234",
    customer: "Jonathon Ronan",
    paidBy: "Cash",
    amount: "$15300.00",
  },
];

export default function SalesPaymentReport() {
  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col">
      {/* Header Section */}
      <div className="flex-1 space-y-8 p-8">
        {/* Breadcrumb and Title */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-6 border-b">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Sales Payment Report
            </h1>
          </div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/pyle/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Sales Payment Report</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          <div className="flex-1 max-w-sm">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search On This Table" className="pl-8" />
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

        {/* Table Section */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-normal cursor-pointer hover:bg-muted/50">
                      <div className="flex items-center">
                        DATE
                        <ChevronUpDownIcon className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="font-normal cursor-pointer hover:bg-muted/50">
                      <div className="flex items-center">
                        REFERENCE
                        <ChevronUpDownIcon className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="font-normal cursor-pointer hover:bg-muted/50">
                      <div className="flex items-center">
                        SALE
                        <ChevronUpDownIcon className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="font-normal cursor-pointer hover:bg-muted/50">
                      <div className="flex items-center">
                        CUSTOMER
                        <ChevronUpDownIcon className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="font-normal cursor-pointer hover:bg-muted/50">
                      <div className="flex items-center">
                        PAID BY
                        <ChevronUpDownIcon className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="font-normal text-right cursor-pointer hover:bg-muted/50">
                      <div className="flex items-center justify-end">
                        AMOUNT
                        <ChevronUpDownIcon className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentData.map((payment, index) => (
                    <TableRow key={index} className="hover:bg-muted/50">
                      <TableCell className="font-medium">
                        <span className="text-sm text-muted-foreground">
                          {payment.date}
                        </span>
                      </TableCell>
                      <TableCell className="text-sm">
                        {payment.reference}
                      </TableCell>
                      <TableCell className="text-sm">{payment.sale}</TableCell>
                      <TableCell className="text-sm">
                        {payment.customer}
                      </TableCell>
                      <TableCell className="text-sm">
                        {payment.paidBy}
                      </TableCell>
                      <TableCell className="text-right font-semibold">
                        {payment.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
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

// Custom icon component for sort arrows
function ChevronUpDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
      />
    </svg>
  );
}
