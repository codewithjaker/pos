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
import { Badge } from "@/components/ui/badge";
import {
  Filter,
  Search,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
} from "lucide-react";

interface ProductAlert {
  id: string;
  code: string;
  product: string;
  warehouse: string;
  quantity: number;
  alertQuantity: number;
}

export default function ProductQuantityAlert() {
  const [products, setProducts] = useState<ProductAlert[]>([
    {
      id: "1",
      code: "5389607",
      product: "Headphone",
      warehouse: "Warehouse 01",
      quantity: 10,
      alertQuantity: 10,
    },
    {
      id: "2",
      code: "5389607",
      product: "Mouse",
      warehouse: "Warehouse 01",
      quantity: 27,
      alertQuantity: 100,
    },
    {
      id: "3",
      code: "5389607",
      product: "Smart Phones",
      warehouse: "Warehouse 01",
      quantity: 33,
      alertQuantity: 50,
    },
    {
      id: "4",
      code: "5389607",
      product: "Smart Watches",
      warehouse: "Warehouse 01",
      quantity: 12,
      alertQuantity: 10,
    },
    {
      id: "5",
      code: "5389607",
      product: "Television",
      warehouse: "Warehouse 01",
      quantity: 16,
      alertQuantity: 100,
    },
    {
      id: "6",
      code: "5389607",
      product: "Gaming Laptop",
      warehouse: "Warehouse 01",
      quantity: 21,
      alertQuantity: 10,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter(
    (product) =>
      product.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.includes(searchTerm) ||
      product.warehouse.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50/30 p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 pb-6 border-b">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-2xl font-semibold text-gray-900">
            Product Quantity Alert
          </h1>
          <nav className="flex text-sm text-gray-600 mt-2">
            <a href="/pyle/" className="hover:text-gray-900 transition-colors">
              Dashboard
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Product Quantity Alert</span>
          </nav>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex flex-1 flex-col sm:flex-row gap-4">
          <Button variant="outline" className="flex items-center gap-2 w-fit">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search on this table..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Excel
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            PDF
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card className="shadow-sm border-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-medium text-gray-900 cursor-pointer hover:bg-gray-50/50">
                  <div className="flex items-center gap-1">
                    CODE
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3 text-gray-400" />
                      <ChevronDown className="h-3 w-3 text-gray-400 -mt-1" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="font-medium text-gray-900 cursor-pointer hover:bg-gray-50/50">
                  <div className="flex items-center gap-1">
                    PRODUCT
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3 text-gray-400" />
                      <ChevronDown className="h-3 w-3 text-gray-400 -mt-1" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="font-medium text-gray-900 cursor-pointer hover:bg-gray-50/50">
                  <div className="flex items-center gap-1">
                    WAREHOUSE
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3 text-gray-400" />
                      <ChevronDown className="h-3 w-3 text-gray-400 -mt-1" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="font-medium text-gray-900 cursor-pointer hover:bg-gray-50/50">
                  <div className="flex items-center gap-1">
                    QUANTITY
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3 text-gray-400" />
                      <ChevronDown className="h-3 w-3 text-gray-400 -mt-1" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="font-medium text-gray-900 cursor-pointer hover:bg-gray-50/50">
                  <div className="flex items-center gap-1">
                    ALERT QUANTITY
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3 text-gray-400" />
                      <ChevronDown className="h-3 w-3 text-gray-400 -mt-1" />
                    </div>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedProducts.map((product) => (
                <TableRow key={product.id} className="hover:bg-gray-50/50">
                  <TableCell className="font-medium text-gray-700">
                    {product.code}
                  </TableCell>
                  <TableCell className="text-gray-700">
                    {product.product}
                  </TableCell>
                  <TableCell className="text-gray-700">
                    {product.warehouse}
                  </TableCell>
                  <TableCell className="text-gray-700">
                    {product.quantity}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        product.quantity <= product.alertQuantity
                          ? "destructive"
                          : "outline"
                      }
                      className="font-semibold"
                    >
                      {product.alertQuantity}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-6 py-4">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <span className="text-sm text-gray-600">
            Showing product per page
          </span>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border-0 bg-transparent text-sm font-medium focus:outline-none focus:ring-0"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="h-8 w-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {[...Array(totalPages)].map((_, index) => (
            <Button
              key={index + 1}
              variant={currentPage === index + 1 ? "default" : "outline"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="h-8 w-8"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
