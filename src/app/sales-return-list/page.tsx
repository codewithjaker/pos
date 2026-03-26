// app/sales-return-list/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Search,
  Filter,
  Download,
  Upload,
  Plus,
  Eye,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

interface SalesReturn {
  id: string;
  date: string;
  reference: string;
  customer: string;
  warehouse: string;
  status: "received" | "ordered" | "pending";
  grandTotal: number;
  paid: number;
  due: number;
  paymentStatus: "paid" | "due" | "partial";
}

const salesReturns: SalesReturn[] = [
  {
    id: "1",
    date: "26/09/2023",
    reference: "5389607",
    customer: "Jane Ronan",
    warehouse: "Warehouse 01",
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
    warehouse: "Warehouse 01",
    status: "ordered",
    grandTotal: 2100.0,
    paid: 0.0,
    due: 2100.0,
    paymentStatus: "due",
  },
  {
    id: "3",
    date: "24/09/2023",
    reference: "5389607",
    customer: "Anda Smith",
    warehouse: "Warehouse 01",
    status: "received",
    grandTotal: 1210.0,
    paid: 1210.0,
    due: 0.0,
    paymentStatus: "paid",
  },
];

const getStatusVariant = (status: SalesReturn["status"]) => {
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

const getPaymentStatusVariant = (status: SalesReturn["paymentStatus"]) => {
  switch (status) {
    case "paid":
      return "default";
    case "due":
      return "destructive";
    case "partial":
      return "secondary";
    default:
      return "outline";
  }
};

export default function SalesReturnList() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleRowSelection = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleAllRows = () => {
    setSelectedRows((prev) =>
      prev.length === salesReturns.length
        ? []
        : salesReturns.map((item) => item.id)
    );
  };

  const filteredReturns = salesReturns.filter(
    (returnItem) =>
      returnItem.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      returnItem.reference.includes(searchQuery) ||
      returnItem.warehouse.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 pb-4 border-b">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Sales Return List
          </h1>
        </div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/pyle/"
                className="text-gray-600 hover:text-gray-900"
              >
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-gray-900 font-medium">
                Sales Return List
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex flex-1 flex-col sm:flex-row gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Filter</DialogTitle>
              </DialogHeader>
              <FilterForm />
            </DialogContent>
          </Dialog>

          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search on this table"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Excel
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            PDF
          </Button>
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" />
            Import
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Sales Return
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox
                      checked={
                        selectedRows.length === salesReturns.length &&
                        salesReturns.length > 0
                      }
                      onCheckedChange={toggleAllRows}
                    />
                  </TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Reference</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Warehouse</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Grand Total</TableHead>
                  <TableHead>Paid</TableHead>
                  <TableHead>Due</TableHead>
                  <TableHead>Payment Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReturns.map((returnItem) => (
                  <TableRow key={returnItem.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedRows.includes(returnItem.id)}
                        onCheckedChange={() =>
                          toggleRowSelection(returnItem.id)
                        }
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {returnItem.date}
                    </TableCell>
                    <TableCell>{returnItem.reference}</TableCell>
                    <TableCell>{returnItem.customer}</TableCell>
                    <TableCell>{returnItem.warehouse}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(returnItem.status)}>
                        {returnItem.status.charAt(0).toUpperCase() +
                          returnItem.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>${returnItem.grandTotal.toFixed(2)}</TableCell>
                    <TableCell>${returnItem.paid.toFixed(2)}</TableCell>
                    <TableCell>${returnItem.due.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={getPaymentStatusVariant(
                          returnItem.paymentStatus
                        )}
                      >
                        {returnItem.paymentStatus.charAt(0).toUpperCase() +
                          returnItem.paymentStatus.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <DialogHeader>
                              <DialogTitle>Sales Return Details</DialogTitle>
                            </DialogHeader>
                            <SalesReturnDetails />
                          </DialogContent>
                        </Dialog>

                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>

                        <Sheet>
                          <SheetTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle>Confirm Deletion</SheetTitle>
                            </SheetHeader>
                            <DeleteConfirmation />
                          </SheetContent>
                        </Sheet>
                      </div>
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
        <div className="flex items-center gap-2 text-sm text-gray-600">
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

        <div className="flex gap-1">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-primary text-primary-foreground"
          >
            1
          </Button>
          <Button variant="outline" size="icon">
            2
          </Button>
          <Button variant="outline" size="icon">
            3
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// Filter Form Component
function FilterForm() {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Product Name</label>
          <Input placeholder="Enter Product Name" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Product Code</label>
          <Input placeholder="Enter Product Code" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Brand</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="brand-one">Brand One</SelectItem>
              <SelectItem value="brand-two">Brand Two</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Price</label>
          <Input type="number" placeholder="Enter Price" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Select Availability</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="instock">In Stock</SelectItem>
              <SelectItem value="outofstock">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <Button variant="outline">Cancel</Button>
        <Button>Filter</Button>
      </div>
    </div>
  );
}

// Sales Return Details Component
function SalesReturnDetails() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold mb-4">Invoice Details:</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">DATE:</span>
              <span>26/01/2022</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">TIME:</span>
              <span>20:31</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">REFERENCE:</span>
              <span>5389607</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">WAREHOUSE:</span>
              <span>Warehouse 01</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">PAYMENT STATUS:</span>
              <Badge variant="default">Paid</Badge>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Customer info:</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">NAME:</span>
              <span>Jhon Smith</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">MAIL:</span>
              <span>Smith123@gmail.com</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">PHONE:</span>
              <span>+00 983 234 396</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">ADDRESS:</span>
              <span>2750 Quadra Street, Canada</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company info:</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">NAME:</span>
              <span>Pyle Corporation</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">MAIL:</span>
              <span>hello@pyle.com</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">PHONE:</span>
              <span>+00 793 234 609</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">ADDRESS:</span>
              <span>413 North Las Vegas, NV 89032</span>
            </div>
          </div>
        </div>
      </div>

      {/* Order Items Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>NO.</TableHead>
                <TableHead>PRODUCT</TableHead>
                <TableHead>CODE</TableHead>
                <TableHead>UNIT PRICE</TableHead>
                <TableHead>QUANTITY</TableHead>
                <TableHead>DISCOUNT</TableHead>
                <TableHead>TAX</TableHead>
                <TableHead>SUBTOTAL</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">01.</TableCell>
                <TableCell>Headphone</TableCell>
                <TableCell>9860532</TableCell>
                <TableCell>$50.00</TableCell>
                <TableCell>100pc</TableCell>
                <TableCell>$0.00</TableCell>
                <TableCell>$0.00</TableCell>
                <TableCell>$5000.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Summary */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>ORDER TAX</span>
          <span>$00.00</span>
        </div>
        <div className="flex justify-between">
          <span>DISCOUNT</span>
          <span>$150.00</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$50.00</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>GRAND TOTAL</span>
          <span className="text-primary">$200.00</span>
        </div>
        <div className="flex justify-between">
          <span>PAID</span>
          <span>$200.00</span>
        </div>
        <div className="flex justify-between">
          <span>DUE</span>
          <span>$0.00</span>
        </div>
      </div>

      <div className="flex gap-2 justify-end">
        <Button variant="outline">SMS</Button>
        <Button variant="outline">EMAIL</Button>
        <Button variant="outline">PDF</Button>
        <Button>Print</Button>
      </div>
    </div>
  );
}

// Delete Confirmation Component
function DeleteConfirmation() {
  return (
    <div className="space-y-4 py-4">
      <p className="text-sm text-gray-600">
        Are you sure you want to delete this sales return? This action cannot be
        undone.
      </p>
      <div className="flex gap-2 justify-end">
        <Button variant="outline">Cancel</Button>
        <Button variant="destructive">Delete</Button>
      </div>
    </div>
  );
}
