// app/print-barcode/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  RotateCcw,
  PlusCircle,
  Download,
  Trash2,
  Minus,
  Plus,
} from "lucide-react";
import { useState } from "react";

// Mock data - replace with your actual data
const products = [
  {
    id: "1",
    name: "Smartphone",
    code: "87305928",
    availableStock: 200,
    quantity: 1,
    type: "addition",
  },
  {
    id: "2",
    name: "Smart Watch",
    code: "56305954",
    availableStock: 151,
    quantity: 1,
    type: "addition",
  },
  {
    id: "3",
    name: "Laptop",
    code: "32305954",
    availableStock: 100,
    quantity: 1,
    type: "addition",
  },
  {
    id: "4",
    name: "Headphone",
    code: "56305945",
    availableStock: 250,
    quantity: 1,
    type: "addition",
  },
];

const warehouses = [
  { id: 0, name: "Choose Warehouse" },
  { id: 1, name: "Warehouse 01" },
  { id: 2, name: "Warehouse 02" },
];

const paperSizes = [
  { id: 0, name: "30 per sheet (A4)" },
  { id: 1, name: "35 per sheet (A4)" },
  { id: 2, name: "40 per sheet (A4)" },
];

export default function PrintBarcodePage() {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Smartphone",
      code: "87305928",
      availableStock: 200,
      quantity: 1,
      type: "addition",
    },
  ]);
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 pb-6 border-b">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Print Barcode</h1>
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <span>Dashboard</span>
            <span>/</span>
            <span className="text-foreground">Print Barcode</span>
          </span>
        </div>
      </div>

      {/* Search Form */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="warehouse">Choose Warehouse</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose Warehouse" />
                </SelectTrigger>
                <SelectContent>
                  {warehouses.map((warehouse) => (
                    <SelectItem
                      key={warehouse.id}
                      value={warehouse.id.toString()}
                    >
                      {warehouse.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="search">Choose Product</Label>
              <div className="relative">
                <Input
                  id="search"
                  placeholder="Scan / Search product by code"
                  className="pr-10"
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 top-0 h-full px-3"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Products Table */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Selected Products For Print Barcode</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>PRODUCT</TableHead>
                <TableHead>PRODUCT CODE</TableHead>
                <TableHead>QUANTITY</TableHead>
                <TableHead className="text-right">DELETE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.code}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          handleQuantityChange(product.id, product.quantity - 1)
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <Input
                        type="number"
                        value={product.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            product.id,
                            parseInt(e.target.value) || 1
                          )
                        }
                        className="w-20 text-center"
                        min="1"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          handleQuantityChange(product.id, product.quantity + 1)
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Paper Size Selection */}
      <div className="mb-6">
        <Label htmlFor="paper-size" className="mb-2 block">
          Paper Size
        </Label>
        <Select>
          <SelectTrigger className="w-full md:w-64">
            <SelectValue placeholder="Select paper size" />
          </SelectTrigger>
          <SelectContent>
            {paperSizes.map((size) => (
              <SelectItem key={size.id} value={size.id.toString()}>
                {size.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row justify-end gap-4 mb-12">
        <Button variant="outline" className="flex items-center gap-2">
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
        <Button className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Create Barcode
        </Button>
        <Button variant="secondary" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Print
        </Button>
      </div>

      {/* Barcode Preview */}
      <Card>
        <CardContent className="p-6">
          {/* Smart Phone Barcodes */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Smart Phone</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="border rounded-lg p-4 text-center">
                  <div className="text-sm font-medium mb-2">SMART PHONE</div>
                  <div className="bg-gray-100 h-20 flex items-center justify-center rounded">
                    <span className="text-xs text-muted-foreground">
                      Barcode Image
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Watch Barcodes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Smart Watch</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="border rounded-lg p-4 text-center">
                  <div className="text-sm font-medium mb-2">SMART WATCH</div>
                  <div className="bg-gray-100 h-20 flex items-center justify-center rounded">
                    <span className="text-xs text-muted-foreground">
                      Barcode Image
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
