// app/sales-list/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
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
} from "lucide-react";
import Link from "next/link";

interface Sale {
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

const salesData: Sale[] = [
  {
    id: "1",
    date: "26/09/2023",
    reference: "5389607",
    customer: "Jane Ronan",
    warehouse: "Warehouse 01",
    status: "received",
    grandTotal: 120,
    paid: 120,
    due: 0,
    paymentStatus: "paid",
  },
  {
    id: "2",
    date: "25/09/2023",
    reference: "5389607",
    customer: "Victor James",
    warehouse: "Warehouse 01",
    status: "ordered",
    grandTotal: 2100,
    paid: 0,
    due: 2100,
    paymentStatus: "due",
  },
  {
    id: "3",
    date: "24/09/2023",
    reference: "5389607",
    customer: "Anda Smith",
    warehouse: "Warehouse 01",
    status: "received",
    grandTotal: 1210,
    paid: 1210,
    due: 0,
    paymentStatus: "paid",
  },
];

const statusVariants = {
  received: "default",
  ordered: "secondary",
  pending: "destructive",
} as const;

const paymentStatusVariants = {
  paid: "default",
  due: "destructive",
  partial: "secondary",
} as const;

export default function SalesListPage() {
  const [selectedSales, setSelectedSales] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSaleSelection = (saleId: string) => {
    setSelectedSales((prev) =>
      prev.includes(saleId)
        ? prev.filter((id) => id !== saleId)
        : [...prev, saleId]
    );
  };

  const toggleAllSelections = () => {
    setSelectedSales((prev) =>
      prev.length === salesData.length ? [] : salesData.map((sale) => sale.id)
    );
  };

  const filteredSales = salesData.filter(
    (sale) =>
      sale.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sale.reference.includes(searchQuery) ||
      sale.warehouse.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white p-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-semibold text-gray-900">Sales List</h1>
          </div>
          <nav className="flex space-x-2 text-sm">
            <Link
              href="/dashboard"
              className="text-gray-500 hover:text-gray-700"
            >
              Dashboard
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Sales List</span>
          </nav>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search on this table..."
                className="pl-10 w-full sm:w-80"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Excel
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              PDF
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Import
            </Button>
            <Link href="/create-sales">
              <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4" />
                Create Sales
              </Button>
            </Link>
          </div>
        </div>

        {/* Sales Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedSales.length === salesData.length}
                      onCheckedChange={toggleAllSelections}
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
                {filteredSales.map((sale) => (
                  <TableRow key={sale.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedSales.includes(sale.id)}
                        onCheckedChange={() => toggleSaleSelection(sale.id)}
                      />
                    </TableCell>
                    <TableCell className="text-gray-600">{sale.date}</TableCell>
                    <TableCell className="font-medium">
                      {sale.reference}
                    </TableCell>
                    <TableCell>{sale.customer}</TableCell>
                    <TableCell>{sale.warehouse}</TableCell>
                    <TableCell>
                      <Badge variant={statusVariants[sale.status]}>
                        {sale.status.charAt(0).toUpperCase() +
                          sale.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>${sale.grandTotal.toLocaleString()}</TableCell>
                    <TableCell>${sale.paid.toLocaleString()}</TableCell>
                    <TableCell>${sale.due.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge
                        variant={paymentStatusVariants[sale.paymentStatus]}
                      >
                        {sale.paymentStatus.charAt(0).toUpperCase() +
                          sale.paymentStatus.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setIsDetailsOpen(true)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Link href={`/edit-sales/${sale.id}`}>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => setIsDeleteOpen(true)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
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
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              1
            </Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              2
            </Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              3
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Filter</DialogTitle>
          </DialogHeader>
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
                  <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-3 justify-end mt-6">
            <Button variant="outline" onClick={() => setIsFilterOpen(false)}>
              Cancel
            </Button>
            <Button>Filter</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Details Modal */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Sales Details</DialogTitle>
          </DialogHeader>
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
                  <div className="flex justify-between items-center">
                    <span className="font-medium">PAYMENT STATUS:</span>
                    <Badge>Paid</Badge>
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
                    <span className="text-right">
                      2750 Quadra Street, Canada
                    </span>
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
                    <span className="text-right">
                      413 North Las Vegas, NV 89032
                    </span>
                  </div>
                </div>
              </div>
            </div>

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
                      <TableCell>01.</TableCell>
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

            <div className="flex justify-end gap-3">
              <Button variant="outline">SMS</Button>
              <Button variant="outline">EMAIL</Button>
              <Button variant="outline">PDF</Button>
              <Button>Print</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Sheet */}
      <Sheet open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Confirm Deletion</SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            <p className="text-sm text-gray-600">
              Are you sure you want to delete this sale? This action cannot be
              undone.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setIsDeleteOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => setIsDeleteOpen(false)}
                className="flex-1"
              >
                Delete
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
