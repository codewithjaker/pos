// app/create-purchase-return/page.tsx
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

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

export default function CreatePurchaseReturn() {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [supplier, setSupplier] = useState<string>("0");
  const [warehouse, setWarehouse] = useState<string>("0");
  const [orderTax, setOrderTax] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [status, setStatus] = useState<string>("0");
  const [notes, setNotes] = useState<string>("");
  
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Smartphone",
      code: "87305928",
      unitCost: 200.00,
      stock: 200,
      quantity: 1,
      discount: 0,
      tax: 0,
      subtotal: 200.00
    },
    {
      id: "2",
      name: "Smart Watch",
      code: "56305954",
      unitCost: 100.00,
      stock: 151,
      quantity: 1,
      discount: 0,
      tax: 0,
      subtotal: 100.00
    },
    {
      id: "3",
      name: "Laptop",
      code: "32305954",
      unitCost: 600.00,
      stock: 100,
      quantity: 1,
      discount: 0,
      tax: 0,
      subtotal: 600.00
    },
    {
      id: "4",
      name: "Headphone",
      code: "56305945",
      unitCost: 900.00,
      stock: 250,
      quantity: 1,
      discount: 0,
      tax: 0,
      subtotal: 900.00
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        const quantity = Math.max(0, Math.min(newQuantity, product.stock));
        const subtotal = quantity * product.unitCost - product.discount + product.tax;
        return { ...product, quantity, subtotal };
      }
      return product;
    }));
  };

  const removeProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const calculateGrandTotal = () => {
    const subtotal = products.reduce((sum, product) => sum + product.subtotal, 0);
    const taxAmount = (subtotal * orderTax) / 100;
    return subtotal + taxAmount - discount + shippingCost;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      date,
      supplier,
      warehouse,
      products,
      orderTax,
      discount,
      shippingCost,
      status,
      notes,
      grandTotal: calculateGrandTotal()
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="mb-6">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/pyle/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Create Purchase Return</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex justify-between items-end border-b pb-4">
          <h1 className="text-2xl font-bold">Create Purchase Return</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Basic Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="supplier">Supplier</Label>
            <Select value={supplier} onValueChange={setSupplier}>
              <SelectTrigger>
                <SelectValue placeholder="Select supplier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Solid IT Solution</SelectItem>
                <SelectItem value="1">Genx IT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="warehouse">Warehouse</Label>
            <Select value={warehouse} onValueChange={setWarehouse}>
              <SelectTrigger>
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

        {/* Product Search */}
        <div className="mb-6">
          <Label htmlFor="product-search">Choose Product</Label>
          <div className="relative mt-2">
            <Input
              id="product-search"
              placeholder="Scan / Search product by code"
              className="pl-4 pr-12"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3"
            >
              <SearchIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Table */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Selected Products For Purchase Return</CardTitle>
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
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.code}</TableCell>
                      <TableCell>${product.unitCost.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {product.stock}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(product.id, product.quantity - 1)}
                            disabled={product.quantity <= 0}
                          >
                            <MinusIcon className="h-3 w-3" />
                          </Button>
                          <Input
                            type="number"
                            value={product.quantity}
                            onChange={(e) => updateQuantity(product.id, parseInt(e.target.value) || 0)}
                            className="w-16 text-center"
                            min="0"
                            max={product.stock}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(product.id, product.quantity + 1)}
                            disabled={product.quantity >= product.stock}
                          >
                            <PlusIcon className="h-3 w-3" />
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
                        >
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Order Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="order-tax">Order Tax (%)</Label>
                <Input
                  id="order-tax"
                  type="number"
                  value={orderTax}
                  onChange={(e) => setOrderTax(parseFloat(e.target.value) || 0)}
                  placeholder="0"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="discount">Discount ($)</Label>
                <Input
                  id="discount"
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                  placeholder="0"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="shipping">Shipping Cost ($)</Label>
                <Input
                  id="shipping"
                  type="number"
                  value={shippingCost}
                  onChange={(e) => setShippingCost(parseFloat(e.target.value) || 0)}
                  placeholder="0"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Sent</SelectItem>
                    <SelectItem value="1">Received</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

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
          </div>

          {/* Order Summary */}
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">ORDER TAX:</TableCell>
                    <TableCell className="text-right">
                      ${((products.reduce((sum, p) => sum + p.subtotal, 0) * orderTax) / 100).toFixed(2)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">DISCOUNT:</TableCell>
                    <TableCell className="text-right">${discount.toFixed(2)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">SHIPPING:</TableCell>
                    <TableCell className="text-right">${shippingCost.toFixed(2)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">GRAND TOTAL:</TableCell>
                    <TableCell className="text-right font-bold text-purple-600">
                      ${calculateGrandTotal().toFixed(2)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Submit Button */}
        <div className="flex justify-start">
          <Button type="submit" size="lg">
            Submit Purchase Return
          </Button>
        </div>
      </form>
    </div>
  );
}

// Icon components (you can replace these with actual icons from your preferred library)
function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}