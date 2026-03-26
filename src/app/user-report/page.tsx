// app/user-report/page.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Mock data for the tables
const saleData = [
  {
    id: 1,
    date: "26/09/2023",
    reference: "5389607",
    customer: "Jane Ronan",
    quantity: 1,
    status: "Received",
    grandTotal: "$120.00",
    paid: "$120.00",
    due: "$00.00",
    paymentStatus: "Paid",
  },
  {
    id: 2,
    date: "25/09/2023",
    reference: "5389607",
    customer: "Victor James",
    quantity: 14,
    status: "Ordered",
    grandTotal: "$2100.00",
    paid: "$00.00",
    due: "$2100.00",
    paymentStatus: "Due",
  },
  {
    id: 3,
    date: "24/09/2023",
    reference: "5389607",
    customer: "Anda Smith",
    quantity: 10,
    status: "Received",
    grandTotal: "$1210.00",
    paid: "$1210.00",
    due: "$00.00",
    paymentStatus: "Paid",
  },
  {
    id: 4,
    date: "23/09/2023",
    reference: "5389607",
    customer: "Jennifer Lora",
    quantity: 22,
    status: "Received",
    grandTotal: "$1500.00",
    paid: "$1500.00",
    due: "$00.00",
    paymentStatus: "Paid",
  },
  {
    id: 5,
    date: "21/09/2023",
    reference: "5389607",
    customer: "Angela Carter",
    quantity: 23,
    status: "Pending",
    grandTotal: "$1100.00",
    paid: "$1000.00",
    due: "$100.00",
    paymentStatus: "Partial",
  },
  {
    id: 6,
    date: "19/09/2023",
    reference: "5389607",
    customer: "Jonathon Ronan",
    quantity: 15,
    status: "Received",
    grandTotal: "$15300.00",
    paid: "$15300.00",
    due: "$00.00",
    paymentStatus: "Received",
  },
];

// Status badge variants
const getStatusVariant = (status: string) => {
  switch (status) {
    case "Received":
    case "Paid":
      return "default";
    case "Ordered":
    case "Partial":
      return "secondary";
    case "Pending":
    case "Due":
      return "destructive";
    default:
      return "outline";
  }
};

// Table columns configuration
const columns = [
  { key: "date", label: "DATE" },
  { key: "reference", label: "REFERENCE" },
  { key: "customer", label: "CUSTOMER" },
  { key: "quantity", label: "QUANTITY" },
  { key: "status", label: "STATUS" },
  { key: "grandTotal", label: "GRAND TOTAL" },
  { key: "paid", label: "PAID" },
  { key: "due", label: "DUE" },
  { key: "paymentStatus", label: "PAYMENT STATUS" },
];

// Reusable table component
const ReportTable = ({ data }: { data: typeof saleData }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key} className="font-medium">
                <div className="flex items-center">
                  {column.key === "date" && <Checkbox className="mr-2" />}
                  {column.label}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Checkbox />
                  <span className="text-sm">{row.date}</span>
                </div>
              </TableCell>
              <TableCell className="text-sm">{row.reference}</TableCell>
              <TableCell className="text-sm">{row.customer}</TableCell>
              <TableCell className="text-sm">{row.quantity}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(row.status)}>
                  {row.status}
                </Badge>
              </TableCell>
              <TableCell className="text-sm">{row.grandTotal}</TableCell>
              <TableCell className="text-sm">{row.paid}</TableCell>
              <TableCell className="text-sm">{row.due}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(row.paymentStatus)}>
                  {row.paymentStatus}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default function UserReport() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50/50">
      {/* Header Section */}
      <div className="flex flex-col space-y-4 p-6 pb-4 md:flex-row md:items-end md:justify-between md:space-y-0">
        <div>
          <h1 className="text-2xl font-semibold">User Report</h1>
        </div>
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/pyle/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-foreground">
                  User Report
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Filters Section */}
      <div className="mb-8 px-6">
        <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          <div className="flex items-center space-x-4">
            <Select defaultValue="1">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select warehouse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Warehouse 01</SelectItem>
                <SelectItem value="2">Warehouse 02</SelectItem>
                <SelectItem value="3">Warehouse 03</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="bg-white hover:bg-gray-50">
              Excel
            </Button>
            <Button variant="outline" className="bg-white hover:bg-gray-50">
              PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6">
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <Tabs defaultValue="sale" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="sale">Sale</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
                <TabsTrigger value="quotation">Quotation</TabsTrigger>
                <TabsTrigger value="return">Return</TabsTrigger>
              </TabsList>

              <TabsContent value="sale" className="mt-6">
                <ReportTable data={saleData} />
              </TabsContent>

              <TabsContent value="payment" className="mt-6">
                <ReportTable data={saleData} />
              </TabsContent>

              <TabsContent value="quotation" className="mt-6">
                <ReportTable data={saleData} />
              </TabsContent>

              <TabsContent value="return" className="mt-6">
                <ReportTable data={saleData} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="mt-8 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              Showing product per page
            </span>
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
