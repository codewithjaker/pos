"use client";

import { useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Download,
  FileText,
  ChevronLeft,
  ChevronRight,
  Trash2,
} from "lucide-react";

interface Product {
  id: string;
  code: string;
  name: string;
  totalSales: number;
  grandTotal: number;
}

export default function ProductReport() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [products] = useState<Product[]>([
    {
      id: "1",
      code: "273-2416",
      name: "Headphones",
      totalSales: 5,
      grandTotal: 1200.0,
    },
    {
      id: "2",
      code: "273-2415",
      name: "Mouse",
      totalSales: 10,
      grandTotal: 3200.0,
    },
    {
      id: "3",
      code: "273-123",
      name: "Laptop",
      totalSales: 20,
      grandTotal: 1200.0,
    },
    {
      id: "4",
      code: "239-143",
      name: "Keyboard",
      totalSales: 12,
      grandTotal: 1500.0,
    },
    {
      id: "5",
      code: "273-2410",
      name: "Smart Watch",
      totalSales: 13,
      grandTotal: 1000.0,
    },
    {
      id: "6",
      code: "273-2419",
      name: "Laptop",
      totalSales: 15,
      grandTotal: 15300.0,
    },
  ]);

  const toggleProductSelection = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleAllProducts = () => {
    setSelectedProducts((prev) =>
      prev.length === products.length ? [] : products.map((p) => p.id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50/30 p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-6 pb-4 border-b">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-2xl font-semibold text-gray-900">
            Product Report
          </h1>
        </div>
        <nav className="flex space-x-2 text-sm">
          <a
            href="/pyle/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Dashboard
          </a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Product Report</span>
        </nav>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Input
                type="search"
                placeholder="Search on this table"
                className="w-full pl-10 bg-white"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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

            {/* Warehouse Select */}
            <Select defaultValue="1">
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select warehouse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Warehouse 01</SelectItem>
                <SelectItem value="2">Warehouse 02</SelectItem>
                <SelectItem value="3">Warehouse 03</SelectItem>
              </SelectContent>
            </Select>

            {/* Date Input */}
            <Input type="date" className="bg-white" />
          </div>
        </div>

        {/* Export Buttons */}
        <div className="lg:col-span-3 flex justify-end space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Excel</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>PDF</span>
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card className="shadow-sm border-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
                <TableHead className="w-[200px]">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={selectedProducts.length === products.length}
                      onCheckedChange={toggleAllProducts}
                    />
                    <span className="text-sm font-medium text-gray-900">
                      CODE
                    </span>
                  </div>
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-900">
                  PRODUCTS
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-900">
                  TOTAL SALES
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-900">
                  GRAND TOTAL
                </TableHead>
                <TableHead className="text-right text-sm font-medium text-gray-900">
                  ACTION
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} className="hover:bg-gray-50/30">
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        checked={selectedProducts.includes(product.id)}
                        onCheckedChange={() =>
                          toggleProductSelection(product.id)
                        }
                      />
                      <Badge variant="secondary" className="font-normal">
                        {product.code}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {product.name}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {product.totalSales}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    ${product.grandTotal.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
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
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 py-4">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <span className="text-sm text-gray-600">
            Showing product per page
          </span>
          <Select defaultValue="10">
            <SelectTrigger className="w-20 bg-transparent border-0 shadow-none">
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
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-blue-600 text-white hover:bg-blue-700"
          >
            1
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            2
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            3
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
