// app/purchase-return-list/page.tsx
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
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
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
} from "lucide-react";

interface PurchaseReturn {
  id: string;
  date: string;
  reference: string;
  supplier: string;
  warehouse: string;
  status: "received" | "ordered" | "pending";
  grandTotal: number;
  paid: number;
  due: number;
  paymentStatus: "paid" | "due" | "partial";
}

const purchaseReturns: PurchaseReturn[] = [
  {
    id: "1",
    date: "26/09/2023",
    reference: "5389607",
    supplier: "Solid IT Solution",
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
    supplier: "Medizo Co.",
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
    supplier: "Coze Agency",
    warehouse: "Warehouse 01",
    status: "received",
    grandTotal: 1210.0,
    paid: 1210.0,
    due: 0.0,
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

export default function PurchaseReturnList() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const toggleSelectAll = (checked: boolean) => {
    setSelectedItems(checked ? purchaseReturns.map((item) => item.id) : []);
  };

  const toggleSelectItem = (id: string, checked: boolean) => {
    setSelectedItems((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  return (
    <div className="flex-1 space-y-6 p-6 bg-gray-50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Purchase Return List
          </h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/pyle/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbPage>Purchase Return List</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Actions Bar */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="product-name">Product Name</Label>
                      <Input
                        id="product-name"
                        placeholder="Enter Product Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Electronics" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="electronics">
                            Electronics
                          </SelectItem>
                          <SelectItem value="clothing">Clothing</SelectItem>
                          <SelectItem value="accessories">
                            Accessories
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product-code">Product Code</Label>
                      <Input
                        id="product-code"
                        placeholder="Enter Product Code"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brand">Brand</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose Brand" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="brand-one">Brand One</SelectItem>
                          <SelectItem value="brand-two">Brand Two</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price</Label>
                      <Input
                        id="price"
                        type="number"
                        placeholder="Enter Price"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availability">Select Availability</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Instock" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="instock">Instock</SelectItem>
                          <SelectItem value="out-of-stock">
                            Out Of Stock
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setIsFilterOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button>Filter</Button>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search On This Table" className="pl-8" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="gap-2">
                Excel
              </Button>
              <Button variant="outline" className="gap-2">
                PDF
              </Button>
              <Button variant="outline" className="gap-2">
                <Upload className="h-4 w-4" />
                Import
              </Button>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Create Return
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Purchase Returns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        checked={
                          selectedItems.length === purchaseReturns.length
                        }
                        onCheckedChange={toggleSelectAll}
                      />
                      <span>DATE</span>
                    </div>
                  </TableHead>
                  <TableHead>REFERENCE</TableHead>
                  <TableHead>SUPPLIER</TableHead>
                  <TableHead>WAREHOUSE</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead>GRAND TOTAL</TableHead>
                  <TableHead>PAID</TableHead>
                  <TableHead>DUE</TableHead>
                  <TableHead>PAYMENT STATUS</TableHead>
                  <TableHead className="text-right">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchaseReturns.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedItems.includes(item.id)}
                          onCheckedChange={(checked) =>
                            toggleSelectItem(item.id, checked as boolean)
                          }
                        />
                        <span className="text-sm text-muted-foreground">
                          {item.date}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {item.reference}
                    </TableCell>
                    <TableCell>{item.supplier}</TableCell>
                    <TableCell>{item.warehouse}</TableCell>
                    <TableCell>
                      <Badge variant={statusVariants[item.status]}>
                        {item.status.charAt(0).toUpperCase() +
                          item.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>${item.grandTotal.toFixed(2)}</TableCell>
                    <TableCell>${item.paid.toFixed(2)}</TableCell>
                    <TableCell>${item.due.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={paymentStatusVariants[item.paymentStatus]}
                      >
                        {item.paymentStatus.charAt(0).toUpperCase() +
                          item.paymentStatus.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Dialog
                          open={isDetailsOpen}
                          onOpenChange={setIsDetailsOpen}
                        >
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <DialogHeader>
                              <DialogTitle>Purchase Return Details</DialogTitle>
                            </DialogHeader>
                            <PurchaseReturnDetails />
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Sheet
                          open={isDeleteOpen}
                          onOpenChange={setIsDeleteOpen}
                        >
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
                              <SheetTitle>Delete Purchase Return</SheetTitle>
                            </SheetHeader>
                            <div className="py-4">
                              <p>
                                Are you sure you want to delete this purchase
                                return?
                              </p>
                              <div className="flex gap-2 mt-4">
                                <Button
                                  variant="outline"
                                  onClick={() => setIsDeleteOpen(false)}
                                >
                                  Cancel
                                </Button>
                                <Button variant="destructive">Delete</Button>
                              </div>
                            </div>
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
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
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
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
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

function PurchaseReturnDetails() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h6 className="font-semibold mb-4">Purchase info:</h6>
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
          <h6 className="font-semibold mb-4">Supplier info:</h6>
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
          <h6 className="font-semibold mb-4">Company info:</h6>
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

      <div className="border rounded-lg">
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
              <TableCell className="font-semibold">01.</TableCell>
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
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline">SMS</Button>
        <Button variant="outline">EMAIL</Button>
        <Button variant="outline">PDF</Button>
        <Button>Print</Button>
      </div>
    </div>
  );
}
