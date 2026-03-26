"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Trash2, Plus, Minus } from "lucide-react";

interface Product {
  id: string;
  name: string;
  code: string;
  availableStock: number;
  quantity: number;
  type: "addition" | "deduction";
}

export default function CreateAdjustmentPage() {
  const [warehouse, setWarehouse] = useState("");
  const [date, setDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [notes, setNotes] = useState("");
  const [products, setProducts] = useState<Product[]>([
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
  ]);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setProducts(products.map(product => 
      product.id === id ? { ...product, quantity: newQuantity } : product
    ));
  };

  const handleTypeChange = (id: string, newType: "addition" | "deduction") => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, type: newType } : product
    ));
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      warehouse,
      date,
      products,
      notes,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 pb-4 border-b">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-gray-900">Create Adjustment</h1>
          </div>
          <nav className="text-sm text-gray-600">
            <ol className="flex space-x-2">
              <li>
                <a href="/pyle/" className="hover:text-gray-900">Dashboard</a>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Create Adjustment</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Search Form */}
      <form onSubmit={(e) => e.preventDefault()} className="mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Warehouse Selection */}
          <div className="space-y-2">
            <Label htmlFor="warehouse">Warehouse</Label>
            <Select value={warehouse} onValueChange={setWarehouse}>
              <SelectTrigger id="warehouse" className="w-full">
                <SelectValue placeholder="Select Warehouse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Warehouse 01</SelectItem>
                <SelectItem value="2">Warehouse 02</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date Selection */}
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Product Search */}
          <div className="lg:col-span-2 space-y-2">
            <Label htmlFor="search">Choose Product</Label>
            <div className="relative">
              <Input
                id="search"
                type="text"
                placeholder="Scan / Search product by code"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4 pr-12"
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </form>

      {/* Products Table */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">Selected Products For Adjustment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-medium">PRODUCT</TableHead>
                  <TableHead className="font-medium">PRODUCT CODE</TableHead>
                  <TableHead className="font-medium">AVAILABLE STOCK</TableHead>
                  <TableHead className="font-medium">QUANTITY</TableHead>
                  <TableHead className="font-medium">TYPE</TableHead>
                  <TableHead className="font-medium text-right">DELETE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.code}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {product.availableStock}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Input
                          type="number"
                          value={product.quantity}
                          onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 1)}
                          className="w-20 text-center"
                          min="1"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={product.type}
                        onValueChange={(value: "addition" | "deduction") => 
                          handleTypeChange(product.id, value)
                        }
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="addition">Addition</SelectItem>
                          <SelectItem value="deduction">Deduction</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Notes and Submit */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Add a note"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
            />
          </div>
          <div>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              Submit Products
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}