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
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Eye,
  Edit,
  Trash2,
  Filter,
  Search,
  Download,
  Upload,
  PlusCircle,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

interface Adjustment {
  id: string;
  date: string;
  reference: string;
  warehouse: string;
  totalProducts: number;
}

export default function AdjustmentListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const adjustments: Adjustment[] = [
    {
      id: "1",
      date: "26/12/2023",
      reference: "3489603",
      warehouse: "Warehouse 02",
      totalProducts: 5,
    },
    {
      id: "2",
      date: "25/12/2023",
      reference: "3289605",
      warehouse: "Warehouse 02",
      totalProducts: 7,
    },
    {
      id: "3",
      date: "24/12/2023",
      reference: "4589603",
      warehouse: "Warehouse 02",
      totalProducts: 10,
    },
    {
      id: "4",
      date: "23/12/2023",
      reference: "6789606",
      warehouse: "Warehouse 02",
      totalProducts: 12,
    },
    {
      id: "5",
      date: "22/12/2023",
      reference: "2896034",
      warehouse: "Warehouse 02",
      totalProducts: 15,
    },
  ];

  const toggleRowSelection = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleAllRows = () => {
    setSelectedRows((prev) =>
      prev.length === adjustments.length ? [] : adjustments.map((adj) => adj.id)
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 pb-4 border-b">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Adjustment List
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
              <BreadcrumbPage className="text-gray-900">
                Adjustment List
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Filters and Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Left Side - Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Filter Adjustments</DialogTitle>
              </DialogHeader>
              <FilterForm />
            </DialogContent>
          </Dialog>

          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search adjustments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Right Side - Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
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
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
            <PlusCircle className="h-4 w-4" />
            Create Adjustment
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card className="shadow-sm border-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={
                      selectedRows.length === adjustments.length &&
                      adjustments.length > 0
                    }
                    onCheckedChange={toggleAllRows}
                    aria-label="Select all"
                  />
                </TableHead>
                <TableHead className="font-semibold text-gray-900">
                  Date
                </TableHead>
                <TableHead className="font-semibold text-gray-900">
                  Reference
                </TableHead>
                <TableHead className="font-semibold text-gray-900">
                  Warehouse
                </TableHead>
                <TableHead className="font-semibold text-gray-900">
                  Total Products
                </TableHead>
                <TableHead className="font-semibold text-gray-900 text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {adjustments.map((adjustment) => (
                <TableRow key={adjustment.id} className="hover:bg-gray-50/30">
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(adjustment.id)}
                      onCheckedChange={() => toggleRowSelection(adjustment.id)}
                      aria-label={`Select adjustment ${adjustment.reference}`}
                    />
                  </TableCell>
                  <TableCell className="font-medium text-gray-600">
                    {adjustment.date}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="font-normal">
                      {adjustment.reference}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {adjustment.warehouse}
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {adjustment.totalProducts}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                      <div className="flex items-center justify-center gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
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
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Showing adjustments per page</span>
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
          <Button variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="w-8 h-8 p-0">
            1
          </Button>
          <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
            2
          </Button>
          <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
            3
          </Button>
          <Button variant="outline" size="sm">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

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
          <label className="text-sm font-medium">Availability</label>
          <Select defaultValue="instock">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="instock">In Stock</SelectItem>
              <SelectItem value="outofstock">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-3 justify-end pt-4">
        <Button variant="outline" type="button">
          Cancel
        </Button>
        <Button type="submit">Apply Filters</Button>
      </div>
    </div>
  );
}
