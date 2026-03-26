// app/create-quotation/page.tsx
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Textarea } from "@/components/ui/textarea";
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

export default function CreateQuotation() {
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
    if (newQuantity < 1) return;

    setProducts(
      products.map((product) => {
        if (product.id === id) {
          const subtotal =
            product.unitCost * newQuantity - product.discount + product.tax;
          return { ...product, quantity: newQuantity, subtotal };
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
    (orderTax / 100) *
      products.reduce(
        (sum, product) => sum + product.unitCost * product.quantity,
        0
      ) +
    shippingCost -
    discount;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/pyle/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Create Quotation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
            Create Quotation
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
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
          <Label htmlFor="customer">Customer</Label>
          <Select value={customer} onValueChange={setCustomer}>
            <SelectTrigger>
              <SelectValue placeholder="Select customer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Victor James</SelectItem>
              <SelectItem value="1">Tony Stark</SelectItem>
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
      <div className="mb-8">
        <Label htmlFor="product-search" className="mb-2 block">
          Choose Product
        </Label>
        <div className="relative">
          <Input
            id="product-search"
            placeholder="Scan / Search product by code"
            className="pl-4 pr-12"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full"
          >
            <SearchIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Products Table */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">
            Selected Products For Quotation
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
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(product.id, product.quantity - 1)
                          }
                        >
                          <MinusIcon className="h-3 w-3" />
                        </Button>
                        <Input
                          type="number"
                          value={product.quantity}
                          onChange={(e) =>
                            updateQuantity(
                              product.id,
                              parseInt(e.target.value) || 1
                            )
                          }
                          className="w-16 text-center"
                          min="1"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(product.id, product.quantity + 1)
                          }
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
                        variant="ghost"
                        size="icon"
                        onClick={() => removeProduct(product.id)}
                        className="text-red-500 hover:text-red-700"
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
        <div className="lg:col-span-3 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="order-tax">Order Tax (%)</Label>
              <div className="relative">
                <Input
                  id="order-tax"
                  type="number"
                  value={orderTax}
                  onChange={(e) => setOrderTax(Number(e.target.value))}
                  placeholder="0"
                  className="pr-12"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  %
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="discount">Discount ($)</Label>
              <div className="relative">
                <Input
                  id="discount"
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(Number(e.target.value))}
                  placeholder="0"
                  className="pr-12"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  $
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="shipping">Shipping Cost ($)</Label>
              <div className="relative">
                <Input
                  id="shipping"
                  type="number"
                  value={shippingCost}
                  onChange={(e) => setShippingCost(Number(e.target.value))}
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

          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Submit Quotation
          </Button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-normal py-2">
                      ORDER TAX:
                    </TableCell>
                    <TableCell className="text-right py-2">
                      $
                      {(
                        (orderTax / 100) *
                        products.reduce(
                          (sum, product) =>
                            sum + product.unitCost * product.quantity,
                          0
                        )
                      ).toFixed(2)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-normal py-2">
                      DISCOUNT:
                    </TableCell>
                    <TableCell className="text-right py-2">
                      ${discount.toFixed(2)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-normal py-2">
                      SHIPPING:
                    </TableCell>
                    <TableCell className="text-right py-2">
                      ${shippingCost.toFixed(2)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold py-2">
                      GRAND TOTAL:
                    </TableCell>
                    <TableCell className="text-right font-bold text-purple-600 py-2">
                      ${grandTotal.toFixed(2)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Icon components (you can replace these with actual icons from your preferred icon library)
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

function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
