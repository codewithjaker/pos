"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Search,
  Filter,
  Download,
  Upload,
  PlusCircle,
  Eye,
  Edit,
  Trash2,
  ChevronsUpDown,
} from "lucide-react";
import Link from "next/link";

interface Quotation {
  id: string;
  date: string;
  reference: string;
  customer: string;
  warehouse: string;
  totalItems: number;
  grandTotal: number;
  status: "completed" | "pending" | "cancelled";
}

export default function QuotationList() {
  const [selectedQuotations, setSelectedQuotations] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const quotations: Quotation[] = [
    {
      id: "1",
      date: "26/12/2023",
      reference: "3489603",
      customer: "Warren Smith",
      warehouse: "Warehouse 01",
      totalItems: 5,
      grandTotal: 120.0,
      status: "completed",
    },
    {
      id: "2",
      date: "25/12/2023",
      reference: "3289605",
      customer: "Victor James",
      warehouse: "Warehouse 01",
      totalItems: 7,
      grandTotal: 234.0,
      status: "completed",
    },
    // Add more mock data as needed
  ];

  const toggleQuotationSelection = (id: string) => {
    setSelectedQuotations((prev) =>
      prev.includes(id)
        ? prev.filter((quoteId) => quoteId !== id)
        : [...prev, id]
    );
  };

  const toggleAllQuotations = () => {
    setSelectedQuotations(
      selectedQuotations.length === quotations.length
        ? []
        : quotations.map((quote) => quote.id)
    );
  };

  const getStatusVariant = (status: Quotation["status"]) => {
    switch (status) {
      case "completed":
        return "default";
      case "pending":
        return "secondary";
      case "cancelled":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-6 pb-4 border-b">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-2xl font-semibold text-gray-900">
            Quotation List
          </h1>
        </div>
        <nav className="flex space-x-2 text-sm">
          <Link href="/pyle/" className="text-gray-600 hover:text-gray-900">
            Dashboard
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Quotation List</span>
        </nav>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex flex-1 flex-col sm:flex-row gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Filter</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="product-name">Product Name</Label>
                    <Input id="product-name" placeholder="Enter Product Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
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
                    <Label htmlFor="product-code">Product Code</Label>
                    <Input id="product-code" placeholder="Enter Product Code" />
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
                    <Input id="price" type="number" placeholder="Enter Price" />
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
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="flex-1">
                    Cancel
                  </Button>
                  <Button className="flex-1">Filter</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search On This Table"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            Excel
          </Button>
          <Button variant="outline" size="sm">
            PDF
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Upload className="h-4 w-4" />
            Import
          </Button>
          <Link href="/pyle/create-quotation">
            <Button className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              Create Quotation
            </Button>
          </Link>
        </div>
      </div>

      {/* Quotations Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={
                          selectedQuotations.length === quotations.length &&
                          quotations.length > 0
                        }
                        onCheckedChange={toggleAllQuotations}
                      />
                      <Label className="flex items-center gap-1 cursor-pointer">
                        DATE
                        <ChevronsUpDown className="h-4 w-4" />
                      </Label>
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      REFERENCE
                      <ChevronsUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      CUSTOMER
                      <ChevronsUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      WAREHOUSE
                      <ChevronsUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      TOTAL ITEMS
                      <ChevronsUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      GRAND TOTAL
                      <ChevronsUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      STATUS
                      <ChevronsUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead className="text-right">ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quotations.map((quotation) => (
                  <TableRow key={quotation.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={selectedQuotations.includes(quotation.id)}
                          onCheckedChange={() =>
                            toggleQuotationSelection(quotation.id)
                          }
                        />
                        <span className="text-sm text-gray-500">
                          {quotation.date}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {quotation.reference}
                    </TableCell>
                    <TableCell>{quotation.customer}</TableCell>
                    <TableCell>{quotation.warehouse}</TableCell>
                    <TableCell>{quotation.totalItems}</TableCell>
                    <TableCell>${quotation.grandTotal.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(quotation.status)}>
                        {quotation.status.charAt(0).toUpperCase() +
                          quotation.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Link href="/pyle/edit-quotation">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
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
    </div>
  );
}
