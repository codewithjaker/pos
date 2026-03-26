// app/customer-report/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  grandTotal: string;
  paid: string;
  due: string;
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
    grandTotal: "$120.00",
    paid: "$120.00",
    due: "$00.00",
    paymentStatus: "paid",
  },
  {
    id: "2",
    date: "25/09/2023",
    reference: "5389607",
    customer: "Victor James",
    quantity: 14,
    status: "ordered",
    grandTotal: "$2100.00",
    paid: "$00.00",
    due: "$2100.00",
    paymentStatus: "due",
  },
  // Add more mock data as needed...
];

const purchaseData: ReportData[] = [
  // Similar structure for purchase data
  {
    id: "1",
    date: "26/09/2023",
    reference: "5389607",
    customer: "Jane Ronan",
    quantity: 1,
    status: "received",
    grandTotal: "$120.00",
    paid: "$120.00",
    due: "$00.00",
    paymentStatus: "paid",
  },
];

const quotationData: ReportData[] = [
  // Similar structure for quotation data
  {
    id: "1",
    date: "26/09/2023",
    reference: "5389607",
    customer: "Jane Ronan",
    quantity: 1,
    status: "received",
    grandTotal: "$120.00",
    paid: "$120.00",
    due: "$00.00",
    paymentStatus: "paid",
  },
];

const returnData: ReportData[] = [
  // Similar structure for return data
  {
    id: "1",
    date: "26/09/2023",
    reference: "5389607",
    customer: "Jane Ronan",
    quantity: 1,
    status: "received",
    grandTotal: "$120.00",
    paid: "$120.00",
    due: "$00.00",
    paymentStatus: "paid",
  },
];

// Status badge component
const StatusBadge = ({ status }: { status: ReportData["status"] }) => {
  const variants = {
    received: "bg-green-100 text-green-800 hover:bg-green-100",
    ordered: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
    pending: "bg-red-100 text-red-800 hover:bg-red-100",
  };

  const labels = {
    received: "Received",
    ordered: "Ordered",
    pending: "Pending",
  };

  return (
    <Badge variant="secondary" className={variants[status]}>
      {labels[status]}
    </Badge>
  );
};

// Payment status badge component
const PaymentStatusBadge = ({
  status,
}: {
  status: ReportData["paymentStatus"];
}) => {
  const variants = {
    paid: "bg-green-100 text-green-800 hover:bg-green-100",
    due: "bg-red-100 text-red-800 hover:bg-red-100",
    partial: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
    received: "bg-green-100 text-green-800 hover:bg-green-100",
  };

  const labels = {
    paid: "Paid",
    due: "Due",
    partial: "Partial",
    received: "Received",
  };

  return (
    <Badge variant="secondary" className={variants[status]}>
      {labels[status]}
    </Badge>
  );
};

// Report table component
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
                  className="text-sm font-medium leading-none"
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
                <StatusBadge status={item.status} />
              </TableCell>
              <TableCell>{item.grandTotal}</TableCell>
              <TableCell>{item.paid}</TableCell>
              <TableCell>{item.due}</TableCell>
              <TableCell>
                <PaymentStatusBadge status={item.paymentStatus} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default function CustomerReportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 p-6">
      {/* Header Section */}
      <div className="mb-6 flex items-end justify-between border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold">Customer Report</h1>
        </div>
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/pyle/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-muted-foreground">
                  Customer Report
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Filters Section */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <div className="flex flex-wrap items-center gap-4">
            <Select defaultValue="1">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select warehouse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Warehouse 01</SelectItem>
                <SelectItem value="2">Warehouse 02</SelectItem>
                <SelectItem value="3">Warehouse 03</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="lg:col-span-9">
          <div className="flex flex-wrap items-center justify-end gap-4">
            <Button variant="outline">Excel</Button>
            <Button variant="outline">PDF</Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Card className="shadow-sm">
        <CardContent className="p-0">
          <Tabs defaultValue="sale" className="w-full">
            <div className="border-b">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="sale">Sale</TabsTrigger>
                <TabsTrigger value="purchase">Purchase</TabsTrigger>
                <TabsTrigger value="quotation">Quotation</TabsTrigger>
                <TabsTrigger value="return">Return</TabsTrigger>
              </TabsList>
            </div>

            <div className="p-6">
              <TabsContent value="sale">
                <ReportTable data={saleData} />
              </TabsContent>

              <TabsContent value="purchase">
                <ReportTable data={purchaseData} />
              </TabsContent>

              <TabsContent value="quotation">
                <ReportTable data={quotationData} />
              </TabsContent>

              <TabsContent value="return">
                <ReportTable data={returnData} />
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>

      {/* Pagination Section */}
      <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">
            Showing product per page
          </span>
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
  );
}
