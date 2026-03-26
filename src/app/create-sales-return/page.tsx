"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Search, X, Plus, Minus, Trash2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  code: string;
  unitCost: number;
  stock: number;
  quantity: number;
  discount: number;
  tax: number;
  subtotal: number;
}

export default function CreateSalesReturn() {
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [customer, setCustomer] = useState<string>("0");
  const [warehouse, setWarehouse] = useState<string>("0");
  const [orderTax, setOrderTax] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [status, setStatus] = useState<string>("0");
  const [notes, setNotes] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Smartphone",
      code: "87305928",
      unitCost: 200,
      stock: 200,
      quantity: 1,
      discount: 0,
      tax: 0,
      subtotal: 200,
    },
    {
      id: "2",
      name: "Smart Watch",
      code: "56305954",
      unitCost: 100,
      stock: 151,
      quantity: 1,
      discount: 0,
      tax: 0,
      subtotal: 100,
    },
    {
      id: "3",
      name: "Laptop",
      code: "32305954",
      unitCost: 600,
      stock: 100,
      quantity: 1,
      discount: 0,
      tax: 0,
      subtotal: 600,
    },
    {
      id: "4",
      name: "Headphone",
      code: "56305945",
      unitCost: 900,
      stock: 250,
      quantity: 1,
      discount: 0,
      tax: 0,
      subtotal: 900,
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 0) return;

    setProducts(
      products.map((product) => {
        if (product.id === id) {
          const updatedProduct = {
            ...product,
            quantity: newQuantity,
            subtotal: product.unitCost * newQuantity - product.discount,
          };
          return updatedProduct;
        }
        return product;
      })
    );
  };

  const removeProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const grandTotal =
    products.reduce((total, product) => total + product.subtotal, 0) +
    shippingCost -
    discount;

  return (
    <div className="min-h-screen bg-gray-50/30 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-4 border-b">
          <div className="mb-4 md:mb-0">
            <h4 className="text-2xl font-semibold">Create Sales Return</h4>
          </div>
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/pyle/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Create Sales Return</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="customer">Customer</Label>
            <Select value={customer} onValueChange={setCustomer}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select customer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Jhon Victim</SelectItem>
                <SelectItem value="1">Tony Stark</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="warehouse">Warehouse</Label>
            <Select value={warehouse} onValueChange={setWarehouse}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select warehouse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Select Warehouse</SelectItem>
                <SelectItem value="1">Warehouse 01</SelectItem>
                <SelectItem value="2">Warehouse 02</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="search">Choose Product</Label>
          <div className="relative">
            <Input
              id="search"
              placeholder="Scan / Search product by code"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">
            Selected Products For Sales Return
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>PRODUCT</TableHead>
                  <TableHead>CODE</TableHead>
                  <TableHead>UNIT COST</TableHead>
                  <TableHead>STOCK</TableHead>
                  <TableHead>QUANTITY</TableHead>
                  <TableHead>DISCOUNT</TableHead>
                  <TableHead>TAX</TableHead>
                  <TableHead>SUBTOTAL</TableHead>
                  <TableHead className="text-right">DELETE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.code}</TableCell>
                    <TableCell>${product.unitCost.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        {product.stock}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(product.id, product.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Input
                          type="number"
                          value={product.quantity}
                          onChange={(e) =>
                            updateQuantity(
                              product.id,
                              parseInt(e.target.value) || 0
                            )
                          }
                          className="w-16 text-center"
                          min="0"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(product.id, product.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>${product.discount.toFixed(2)}</TableCell>
                    <TableCell>${product.tax.toFixed(2)}</TableCell>
                    <TableCell>${product.subtotal.toFixed(2)}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeProduct(product.id)}
                       
                        className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
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

      {/* Totals Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="order-tax">Order Tax</Label>
              <div className="relative">
                <Input
                  id="order-tax"
                  type="number"
                  placeholder="0"
                  value={orderTax}
                  onChange={(e) => setOrderTax(parseFloat(e.target.value) || 0)}
                  className="pr-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500">%</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="discount">Discount</Label>
              <div className="relative">
                <Input
                  id="discount"
                  type="number"
                  placeholder="0"
                  value={discount}
                  onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                  className="pr-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="shipping">Shipping Cost</Label>
              <div className="relative">
                <Input
                  id="shipping"
                  type="number"
                  placeholder="0"
                  value={shippingCost}
                  onChange={(e) =>
                    setShippingCost(parseFloat(e.target.value) || 0)
                  }
                  className="pr-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Sent</SelectItem>
                  <SelectItem value="1">Received</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Add a note"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">ORDER TAX:</TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      ${orderTax.toFixed(2)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">DISCOUNT:</TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      ${discount.toFixed(2)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">SHIPPING:</TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      ${shippingCost.toFixed(2)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">GRAND TOTAL:</TableCell>
                    <TableCell className="text-right font-bold text-blue-600">
                      ${grandTotal.toFixed(2)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mb-8">
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Submit Sales Return
        </Button>
      </div>

    </div>
  );
}
