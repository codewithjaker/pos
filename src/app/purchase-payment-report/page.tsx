// app/purchase-payment-report/page.tsx
import { Card, CardContent } from "@/components/ui/card";
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

interface PaymentRecord {
  date: string;
  reference: string;
  purchase: string;
  supplier: string;
  paidBy: string;
  amount: string;
}

const paymentData: PaymentRecord[] = [
  {
    date: "26/09/2023",
    reference: "5389607",
    purchase: "P - 3212",
    supplier: "Solid IT Solution",
    paidBy: "Cash",
    amount: "$120.00",
  },
  {
    date: "25/09/2023",
    reference: "5389607",
    purchase: "P - 3123",
    supplier: "Medizo Co.",
    paidBy: "Cash",
    amount: "$2100.00",
  },
  {
    date: "24/09/2023",
    reference: "5389607",
    purchase: "P - 3100",
    supplier: "Coze Agency",
    paidBy: "Cash",
    amount: "$1210.00",
  },
  {
    date: "23/09/2023",
    reference: "5389607",
    purchase: "P - 3001",
    supplier: "Costik Corpo.",
    paidBy: "Cash",
    amount: "$1500.00",
  },
  {
    date: "21/09/2023",
    reference: "5389607",
    purchase: "P - 2345",
    supplier: "Jeel Beauty Co.",
    paidBy: "Cash",
    amount: "$1100.00",
  },
  {
    date: "19/09/2023",
    reference: "5389607",
    purchase: "P - 3152",
    supplier: "Eeza Corporation",
    paidBy: "Cash",
    amount: "$15300.00",
  },
];

export default function PurchasePaymentReport() {
  return (
    <div className="min-h-screen bg-gray-50/30 flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 pb-4 border-b">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-2xl font-semibold">Purchase Payment Report</h1>
        </div>
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/pyle/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Purchase Payment Report</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Search and Actions Section */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative w-full max-w-sm">
            <Input
              type="search"
              placeholder="Search On This Table"
              className="w-full pl-3 pr-10"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-white hover:bg-gray-50">
            Excel
          </Button>
          <Button variant="outline" className="bg-white hover:bg-gray-50">
            PDF
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <Card className="shadow-sm border-0">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
                  <TableHead className="font-normal text-sm py-4">
                    <button className="flex items-center gap-1 hover:text-gray-700">
                      DATE
                      <svg
                        className="w-3 h-3 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                        />
                      </svg>
                    </button>
                  </TableHead>
                  <TableHead className="font-normal text-sm">
                    <button className="flex items-center gap-1 hover:text-gray-700">
                      REFERENCE
                      <svg
                        className="w-3 h-3 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                        />
                      </svg>
                    </button>
                  </TableHead>
                  <TableHead className="font-normal text-sm">
                    <button className="flex items-center gap-1 hover:text-gray-700">
                      PURCHASES
                      <svg
                        className="w-3 h-3 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                        />
                      </svg>
                    </button>
                  </TableHead>
                  <TableHead className="font-normal text-sm">
                    <button className="flex items-center gap-1 hover:text-gray-700">
                      SUPPLIER
                      <svg
                        className="w-3 h-3 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                        />
                      </svg>
                    </button>
                  </TableHead>
                  <TableHead className="font-normal text-sm">
                    <button className="flex items-center gap-1 hover:text-gray-700">
                      PAID BY
                      <svg
                        className="w-3 h-3 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                        />
                      </svg>
                    </button>
                  </TableHead>
                  <TableHead className="font-normal text-sm text-right">
                    <button className="flex items-center gap-1 hover:text-gray-700 ml-auto">
                      AMOUNT
                      <svg
                        className="w-3 h-3 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                        />
                      </svg>
                    </button>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paymentData.map((record, index) => (
                  <TableRow
                    key={index}
                    className="border-b hover:bg-gray-50/30"
                  >
                    <TableCell className="py-4 font-medium">
                      <span className="text-sm text-gray-600">
                        {record.date}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {record.reference}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {record.purchase}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {record.supplier}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {record.paidBy}
                    </TableCell>
                    <TableCell className="text-sm font-semibold text-gray-900 text-right">
                      {record.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-8 py-4">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <span className="text-sm text-gray-600">
            Showing product per page
          </span>
          <Select defaultValue="10">
            <SelectTrigger className="w-20 border-0 shadow-none bg-transparent">
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
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 bg-primary text-primary-foreground"
          >
            1
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8">
            2
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8">
            3
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>

    </div>
  );
}
