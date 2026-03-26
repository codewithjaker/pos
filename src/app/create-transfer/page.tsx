// app/create-transfer/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Trash2 } from "lucide-react";

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

export default function CreateTransfer() {
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [fromWarehouse, setFromWarehouse] = useState<string>("");
  const [toWarehouse, setToWarehouse] = useState<string>("");
  const [orderTax, setOrderTax] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [status, setStatus] = useState<string>("sent");
  const [notes, setNotes] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Smartphone",
      code: "87305928",
      unitCost: 200.0,
      stock: 200,
      quantity: 1,
      discount: 0,
      tax: 0,
      subtotal: 200.0,
    },
    {
      id: "2",
      name: "Smart Watch",
      code: "56305954",
      unitCost: 100.0,
      stock: 151,
      quantity: 1,
      discount: 0,
      tax: 0,
      subtotal: 100.0,
    },
    {
      id: "3",
      name: "Laptop",
      code: "32305954",
      unitCost: 600.0,
      stock: 100,
      quantity: 1,
      discount: 0,
      tax: 0,
      subtotal: 600.0,
    },
    {
      id: "4",
      name: "Headphone",
      code: "56305945",
      unitCost: 900.0,
      stock: 250,
      quantity: 1,
      discount: 0,
      tax: 0,
      subtotal: 900.0,
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          const quantity = Math.max(0, Math.min(newQuantity, product.stock));
          const subtotal = quantity * product.unitCost;
          return { ...product, quantity, subtotal };
        }
        return product;
      })
    );
  };

  const removeProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const grandTotal =
    products.reduce((sum, product) => sum + product.subtotal, 0) +
    shippingCost -
    discount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      date,
      fromWarehouse,
      toWarehouse,
      products,
      orderTax,
      discount,
      shippingCost,
      status,
      notes,
      grandTotal,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header & Breadcrumb */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-4 border-b">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Create Transfer</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/pyle/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Create Transfer</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

          <div className="space-y-2">
            <Label htmlFor="fromWarehouse">From Warehouse</Label>
            <Select value={fromWarehouse} onValueChange={setFromWarehouse}>
              <SelectTrigger>
                <SelectValue placeholder="Select Warehouse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Warehouse 01</SelectItem>
                <SelectItem value="2">Warehouse 02</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="toWarehouse">To Warehouse</Label>
            <Select value={toWarehouse} onValueChange={setToWarehouse}>
              <SelectTrigger>
                <SelectValue placeholder="Select Warehouse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Warehouse 01</SelectItem>
                <SelectItem value="2">Warehouse 02</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Search */}
        <div className="mb-8">
          <Label htmlFor="productSearch" className="mb-2 block">
            Choose Product
          </Label>
          <div className="relative">
            <Input
              id="productSearch"
              placeholder="Scan / Search product by code"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12"
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
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-6">
              Selected Products For Transfer
            </h2>
            <div className="border rounded-lg">
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
                        <div className="flex items-center space-x-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(product.id, product.quantity - 1)
                            }
                            disabled={product.quantity <= 0}
                          >
                            <MinusIcon className="h-3 w-3" />
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
                            max={product.stock}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(product.id, product.quantity + 1)
                            }
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

        {/* Order Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="orderTax">Order Tax</Label>
                <div className="relative">
                  <Input
                    id="orderTax"
                    type="number"
                    value={orderTax}
                    onChange={(e) =>
                      setOrderTax(parseFloat(e.target.value) || 0)
                    }
                    placeholder="0"
                    className="pr-12"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    %
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="discount">Discount</Label>
                <div className="relative">
                  <Input
                    id="discount"
                    type="number"
                    value={discount}
                    onChange={(e) =>
                      setDiscount(parseFloat(e.target.value) || 0)
                    }
                    placeholder="0"
                    className="pr-12"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="shipping">Shipping Cost</Label>
                <div className="relative">
                  <Input
                    id="shipping"
                    type="number"
                    value={shippingCost}
                    onChange={(e) =>
                      setShippingCost(parseFloat(e.target.value) || 0)
                    }
                    placeholder="0"
                    className="pr-12"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sent">Sent</SelectItem>
                    <SelectItem value="received">Received</SelectItem>
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
            <CardContent className="p-6">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">ORDER TAX:</TableCell>
                    <TableCell className="text-right">
                      ${orderTax.toFixed(2)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">DISCOUNT:</TableCell>
                    <TableCell className="text-right">
                      ${discount.toFixed(2)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">SHIPPING:</TableCell>
                    <TableCell className="text-right">
                      ${shippingCost.toFixed(2)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">GRAND TOTAL:</TableCell>
                    <TableCell className="text-right font-bold text-purple-600">
                      ${grandTotal.toFixed(2)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Submit Button */}
        <div className="mb-20">
          <Button type="submit" size="lg">
            Create Transfer
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

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
