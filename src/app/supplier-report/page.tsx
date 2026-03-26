// app/supplier-report/page.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Types for our data
interface ReportData {
  id: string;
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

// Mock data - in a real app, this would come from an API
const saleData: ReportData[] = [
  {
    id: "1",
    date: "26/09/2023",
    reference: "5389607",
    customer: "Jane Ronan",
    quantity: 1,
    status: "received",
    grandTotal: 120.0,
    paid: 120.0,
    due: 0.0,
    paymentStatus: "paid",
  },
  {
    id: "2",
    date: "25/09/2023",
    reference: "5389607",
    customer: "Victor James",
    quantity: 14,
    status: "ordered",
    grandTotal: 2100.0,
    paid: 0.0,
    due: 2100.0,
    paymentStatus: "due",
  },
  // Add more data as needed...
];

const paymentData: ReportData[] = [
  // Similar structure for payment data
  ...saleData, // Using same data for demo
];

const quotationData: ReportData[] = [
  // Similar structure for quotation data
  ...saleData, // Using same data for demo
];

const returnData: ReportData[] = [
  // Similar structure for return data
  ...saleData, // Using same data for demo
];

const getStatusVariant = (status: ReportData["status"]) => {
  switch (status) {
    case "received":
      return "default";
    case "ordered":
      return "secondary";
    case "pending":
      return "destructive";
    default:
      return "outline";
  }
};

const getPaymentStatusVariant = (status: ReportData["paymentStatus"]) => {
  switch (status) {
    case "paid":
      return "default";
    case "due":
      return "destructive";
    case "partial":
      return "secondary";
    case "received":
      return "default";
    default:
      return "outline";
  }
};

const ReportTable = ({ data }: { data: ReportData[] }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <div className="flex items-center space-x-2">
                <Checkbox id="select-all" />
                <label
                  htmlFor="select-all"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  DATE
                </label>
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
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Checkbox id={`select-${item.id}`} />
                  <span className="text-sm text-muted-foreground">
                    {item.date}
                  </span>
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
              <TableCell>${item.grandTotal.toFixed(2)}</TableCell>
              <TableCell>${item.paid.toFixed(2)}</TableCell>
              <TableCell>${item.due.toFixed(2)}</TableCell>
              <TableCell>
                <Badge variant={getPaymentStatusVariant(item.paymentStatus)}>
                  {item.paymentStatus.charAt(0).toUpperCase() +
                    item.paymentStatus.slice(1)}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default function SupplierReportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50/50">
      {/* Header Section */}
      <div className="flex-1 p-6">
        <div className="mb-6 flex items-end justify-between border-b pb-4">
          <div>
            <h1 className="text-2xl font-bold">Supplier Report</h1>
          </div>
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-foreground">
                    Supplier Report
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Filters Section */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-center gap-4">
            <Select defaultValue="1">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select warehouse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Warehouse 01</SelectItem>
                <SelectItem value="2">Warehouse 02</SelectItem>
                <SelectItem value="3">Warehouse 03</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Excel
            </Button>
            <Button variant="outline" size="sm">
              PDF
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <Tabs defaultValue="sale" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="sale">Sale</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
                <TabsTrigger value="quotation">Quotation</TabsTrigger>
                <TabsTrigger value="return">Return</TabsTrigger>
              </TabsList>

              <TabsContent value="sale">
                <ReportTable data={saleData} />
              </TabsContent>

              <TabsContent value="payment">
                <ReportTable data={paymentData} />
              </TabsContent>

              <TabsContent value="quotation">
                <ReportTable data={quotationData} />
              </TabsContent>

              <TabsContent value="return">
                <ReportTable data={returnData} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Showing product per page</span>
            <Select defaultValue="10">
              <SelectTrigger className="w-[80px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="30">30</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
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
      
    </div>
  );
}
