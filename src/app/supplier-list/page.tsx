// app/supplier-list/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
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
  Search,
  Filter,
  Download,
  Upload,
  PlusCircle,
  Eye,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Supplier {
  id: string;
  date: string;
  reference: string;
  fromWarehouse: string;
  toWarehouse: string;
  totalItems: number;
  grandTotal: string;
  status: "completed" | "pending" | "cancelled";
}

export default function SupplierListPage() {
  const [selectedSuppliers, setSelectedSuppliers] = useState<string[]>([]);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const suppliers: Supplier[] = [
    {
      id: "1",
      date: "26/09/2023",
      reference: "5389607",
      fromWarehouse: "Warehouse 02",
      toWarehouse: "Warehouse 01",
      totalItems: 5,
      grandTotal: "$120.00",
      status: "completed",
    },
    // Add more supplier data here...
  ];

  const toggleSupplierSelection = (supplierId: string) => {
    setSelectedSuppliers((prev) =>
      prev.includes(supplierId)
        ? prev.filter((id) => id !== supplierId)
        : [...prev, supplierId]
    );
  };

  const selectAllSuppliers = (checked: boolean) => {
    setSelectedSuppliers(checked ? suppliers.map((s) => s.id) : []);
  };

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 pb-6 border-b">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Supplier List
          </h1>
        </div>
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <a href="/pyle/" className="hover:text-foreground transition-colors">
            Dashboard
          </a>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Supplier List</span>
        </nav>
      </div>

      {/* Toolbar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="flex flex-wrap items-center gap-4">
          <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </DialogTrigger>
            <FilterModal onClose={() => setIsFilterOpen(false)} />
          </Dialog>

          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search On This Table"
              className="pl-10 bg-white"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3">
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
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                <PlusCircle className="h-4 w-4" />
                Create Supplier
              </Button>
            </DialogTrigger>
            <CreateSupplierModal />
          </Dialog>
        </div>
      </div>

      {/* Table */}
      <Card className="mb-8">
        <CardContent className="p-0">
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={selectedSuppliers.length === suppliers.length}
                        onCheckedChange={selectAllSuppliers}
                      />
                      <span className="text-sm font-medium">DATE</span>
                    </div>
                  </TableHead>
                  <TableHead>REFERENCE</TableHead>
                  <TableHead>FROM WAREHOUSE</TableHead>
                  <TableHead>TO WAREHOUSE</TableHead>
                  <TableHead>TOTAL ITEMS</TableHead>
                  <TableHead>GRAND TOTAL</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead className="text-right">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {suppliers.map((supplier) => (
                  <TableRow key={supplier.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={selectedSuppliers.includes(supplier.id)}
                          onCheckedChange={() =>
                            toggleSupplierSelection(supplier.id)
                          }
                        />
                        <span className="text-sm text-muted-foreground">
                          {supplier.date}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {supplier.reference}
                    </TableCell>
                    <TableCell>{supplier.fromWarehouse}</TableCell>
                    <TableCell>{supplier.toWarehouse}</TableCell>
                    <TableCell>{supplier.totalItems}</TableCell>
                    <TableCell>{supplier.grandTotal}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        Completed
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end items-center space-x-2">
                        <Dialog
                          open={isDetailsOpen}
                          onOpenChange={setIsDetailsOpen}
                        >
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <SupplierDetailsModal />
                        </Dialog>

                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
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
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-8">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>Showing product per page</span>
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

        <div className="flex items-center space-x-1">
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
  );
}

// Filter Modal Component
function FilterModal({ onClose }: { onClose: () => void }) {
  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Filter</DialogTitle>
      </DialogHeader>
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
                <SelectValue placeholder="Electronics" />
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
                <SelectValue placeholder="Choose Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brand1">Brand One</SelectItem>
                <SelectItem value="brand2">Brand Two</SelectItem>
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
                <SelectValue placeholder="Instock" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="instock">Instock</SelectItem>
                <SelectItem value="outofstock">Out Of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <Button variant="outline" onClick={onClose} className="w-full">
            Cancel
          </Button>
          <Button className="w-full">Filter</Button>
        </div>
      </div>
    </DialogContent>
  );
}

// Create Supplier Modal Component
function CreateSupplierModal() {
  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Create New Supplier</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {/* Add form fields for creating supplier */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Supplier Name</label>
          <Input placeholder="Enter supplier name" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Contact Information</label>
          <Input placeholder="Enter contact information" />
        </div>
        <Button type="submit">Create Supplier</Button>
      </div>
    </DialogContent>
  );
}

// Supplier Details Modal Component
function SupplierDetailsModal() {
  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Supplier Details</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {/* Add supplier details here */}
        <div className="space-y-2">
          <h4 className="font-medium">Supplier Information</h4>
          {/* Add detailed supplier information */}
        </div>
      </div>
    </DialogContent>
  );
}

// Delete Confirmation Sheet Component
function DeleteConfirmationSheet() {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Delete Supplier</SheetTitle>
      </SheetHeader>
      <div className="py-6">
        <p className="text-muted-foreground mb-4">
          Are you sure you want to delete this supplier? This action cannot be
          undone.
        </p>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex-1">
            Cancel
          </Button>
          <Button variant="destructive" className="flex-1">
            Delete
          </Button>
        </div>
      </div>
    </SheetContent>
  );
}
