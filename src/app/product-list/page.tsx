// app/product-list/page.tsx
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
  Search,
  Filter,
  Upload,
  Plus,
  Eye,
  Edit,
  Trash2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Product {
  id: string;
  image: string;
  name: string;
  code: string;
  category: string;
  brand: string;
  price: number;
  unit: string;
  quantity: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
}

export default function ProductListPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Mock data with more products
  const products: Product[] = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      name: "Wireless Earphones",
      code: "5389607",
      category: "Electronics",
      brand: "JCL",
      price: 101.0,
      unit: "pc",
      quantity: 105,
      status: "in-stock",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      name: "Smart Watch Series 5",
      code: "5389608",
      category: "Electronics",
      brand: "TechCorp",
      price: 299.99,
      unit: "pc",
      quantity: 15,
      status: "low-stock",
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
      name: "Bluetooth Speaker",
      code: "5389609",
      category: "Electronics",
      brand: "AudioPro",
      price: 89.99,
      unit: "pc",
      quantity: 0,
      status: "out-of-stock",
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
      name: "Gaming Keyboard",
      code: "5389610",
      category: "Computer",
      brand: "GameMaster",
      price: 129.99,
      unit: "pc",
      quantity: 42,
      status: "in-stock",
    },
    {
      id: "5",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
      name: "Wireless Mouse",
      code: "5389611",
      category: "Computer",
      brand: "TechPlus",
      price: 45.99,
      unit: "pc",
      quantity: 78,
      status: "in-stock",
    },
    {
      id: "6",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      name: "Running Shoes Pro",
      code: "5389612",
      category: "Footwear",
      brand: "SportFlex",
      price: 129.99,
      unit: "pc",
      quantity: 67,
      status: "in-stock",
    },
    {
      id: "7",
      image:
        "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=400&h=300&fit=crop",
      name: "Leather Office Chair",
      code: "5389613",
      category: "Furniture",
      brand: "ComfortWorks",
      price: 349.99,
      unit: "pc",
      quantity: 12,
      status: "low-stock",
    },
    {
      id: "8",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop",
      name: "Digital Camera 4K",
      code: "5389614",
      category: "Electronics",
      brand: "PhotoPro",
      price: 599.99,
      unit: "pc",
      quantity: 23,
      status: "in-stock",
    },
    {
      id: "9",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
      name: "Polarized Sunglasses",
      code: "5389615",
      category: "Accessories",
      brand: "RayShade",
      price: 159.99,
      unit: "pc",
      quantity: 0,
      status: "out-of-stock",
    },
    {
      id: "10",
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=300&fit=crop",
      name: "Luxury Watch",
      code: "5389616",
      category: "Accessories",
      brand: "TimeMaster",
      price: 899.99,
      unit: "pc",
      quantity: 5,
      status: "low-stock",
    },
    {
      id: "11",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop",
      name: "Smart Water Bottle",
      code: "5389617",
      category: "Fitness",
      brand: "HydroTech",
      price: 49.99,
      unit: "pc",
      quantity: 89,
      status: "in-stock",
    },
    {
      id: "12",
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=300&fit=crop",
      name: "Gaming Headset",
      code: "5389618",
      category: "Electronics",
      brand: "AudioPro",
      price: 79.99,
      unit: "pc",
      quantity: 34,
      status: "in-stock",
    },
    {
      id: "13",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop",
      name: "Backpack Pro",
      code: "5389619",
      category: "Accessories",
      brand: "TravelGear",
      price: 89.99,
      unit: "pc",
      quantity: 47,
      status: "in-stock",
    },
    {
      id: "14",
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
      name: "Tablet Air 2024",
      code: "5389620",
      category: "Electronics",
      brand: "TechCorp",
      price: 449.99,
      unit: "pc",
      quantity: 18,
      status: "low-stock",
    },
    {
      id: "15",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      name: "Noise Cancelling Headphones",
      code: "5389621",
      category: "Electronics",
      brand: "SoundMax",
      price: 199.99,
      unit: "pc",
      quantity: 0,
      status: "out-of-stock",
    },
    {
      id: "16",
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=300&fit=crop",
      name: "Fitness Tracker",
      code: "5389622",
      category: "Wearables",
      brand: "ActiveLife",
      price: 79.99,
      unit: "pc",
      quantity: 56,
      status: "in-stock",
    },
    {
      id: "17",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
      name: "Desk Lamp LED",
      code: "5389623",
      category: "Home",
      brand: "BrightHome",
      price: 39.99,
      unit: "pc",
      quantity: 124,
      status: "in-stock",
    },
    {
      id: "18",
      image:
        "https://images.unsplash.com/photo-1523371683702-309cffa3d34d?w=400&h=300&fit=crop",
      name: "Mechanical Keyboard",
      code: "5389624",
      category: "Computer",
      brand: "GameMaster",
      price: 149.99,
      unit: "pc",
      quantity: 8,
      status: "low-stock",
    },
    {
      id: "19",
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=300&fit=crop",
      name: "Portable Charger 10000mAh",
      code: "5389625",
      category: "Electronics",
      brand: "PowerPlus",
      price: 29.99,
      unit: "pc",
      quantity: 203,
      status: "in-stock",
    },
    {
      id: "20",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop",
      name: "Wireless Earbuds Pro",
      code: "5389626",
      category: "Electronics",
      brand: "SoundMax",
      price: 129.99,
      unit: "pc",
      quantity: 25,
      status: "in-stock",
    },
  ];

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const toggleProductSelection = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleAllProducts = () => {
    setSelectedProducts(
      selectedProducts.length === currentProducts.length
        ? []
        : currentProducts.map((p) => p.id)
    );
  };

  const getStatusBadge = (product: Product) => {
    const statusConfig = {
      "in-stock": { variant: "default" as const, label: "In Stock" },
      "low-stock": { variant: "secondary" as const, label: "Low Stock" },
      "out-of-stock": {
        variant: "destructive" as const,
        label: "Out of Stock",
      },
    };

    const config = statusConfig[product.status];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getQuantityBadge = (quantity: number) => {
    if (quantity > 100) {
      return <Badge variant="default">{quantity}</Badge>;
    } else if (quantity > 0) {
      return <Badge variant="secondary">{quantity}</Badge>;
    } else {
      return <Badge variant="destructive">{quantity}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Header */}
      <div className="border-b bg-white px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold text-gray-900">
              Products List
            </h1>
            <nav className="flex space-x-2 text-sm text-gray-600 mt-2">
              <span>Dashboard</span>
              <span>/</span>
              <span className="text-gray-900 font-medium">Products List</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Filters and Actions */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row gap-4 justify-between">
            {/* Left Section - Filter and Search */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                variant="outline"
                className="flex items-center gap-2 shrink-0"
              >
                <Filter className="h-4 w-4" />
                Filter
              </Button>

              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 bg-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Right Section - Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <Button
                variant="outline"
                className="flex items-center gap-2 shrink-0"
              >
                Export Excel
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 shrink-0"
              >
                Export PDF
              </Button>
              <div className="relative">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 shrink-0"
                >
                  <Upload className="h-4 w-4" />
                  Import
                </Button>
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept=".csv,.xlsx,.xls"
                />
              </div>
              <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 shrink-0">
                <Plus className="h-4 w-4" />
                Create Product
              </Button>
            </div>
          </div>
        </div>

        {/* Selected Products Action Bar */}
        {selectedProducts.length > 0 && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between">
            <div className="text-sm text-blue-800">
              {selectedProducts.length} product
              {selectedProducts.length > 1 ? "s" : ""} selected
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Bulk Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                className="flex items-center gap-2"
              >
                <Trash2 className="h-4 w-4" />
                Delete Selected
              </Button>
            </div>
          </div>
        )}

        {/* Products Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12 px-4">
                      <Checkbox
                        checked={
                          selectedProducts.length === currentProducts.length &&
                          currentProducts.length > 0
                        }
                        onCheckedChange={toggleAllProducts}
                      />
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Product
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Code
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Category
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Brand
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="text-right">
                      <div className="flex items-center gap-1 justify-end">
                        Price
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentProducts.length > 0 ? (
                    currentProducts.map((product) => (
                      <TableRow
                        key={product.id}
                        className="hover:bg-gray-50/50"
                      >
                        <TableCell className="px-4">
                          <Checkbox
                            checked={selectedProducts.includes(product.id)}
                            onCheckedChange={() =>
                              toggleProductSelection(product.id)
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-10 h-10 rounded-lg object-cover border"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  "/img/placeholder-product.png";
                              }}
                            />
                            <span className="font-medium">{product.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-sm">
                          {product.code}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{product.category}</Badge>
                        </TableCell>
                        <TableCell>{product.brand}</TableCell>
                        <TableCell className="text-right font-semibold">
                          ${product.price.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-gray-600">
                          {product.unit}
                        </TableCell>
                        <TableCell>{getStatusBadge(product)}</TableCell>
                        <TableCell>
                          {getQuantityBadge(product.quantity)}
                        </TableCell>
                        <TableCell>
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
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={10}
                        className="text-center py-8 text-gray-500"
                      >
                        {searchTerm
                          ? "No products found matching your search."
                          : "No products available."}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Show</span>
            <select
              className="border rounded px-2 py-1 text-sm bg-white"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            <span>products per page</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + itemsPerPage, filteredProducts.length)} of{" "}
              {filteredProducts.length} products
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                className="w-8 h-8"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
