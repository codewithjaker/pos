// app/create-purchase/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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
import { Minus, Plus, Search, Trash2 } from "lucide-react";

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

export default function CreatePurchasePage() {
  const products: Product[] = [
    {
      id: "1",
      name: "Smartphone",
      code: "87305928",
      unitCost: 200.0,
      stock: 200,
      quantity: 1,
      discount: 0.0,
      tax: 0.0,
      subtotal: 200.0,
    },
    {
      id: "2",
      name: "Smart Watch",
      code: "56305954",
      unitCost: 100.0,
      stock: 151,
      quantity: 1,
      discount: 0.0,
      tax: 0.0,
      subtotal: 100.0,
    },
    {
      id: "3",
      name: "Laptop",
      code: "32305954",
      unitCost: 600.0,
      stock: 100,
      quantity: 1,
      discount: 0.0,
      tax: 0.0,
      subtotal: 600.0,
    },
    {
      id: "4",
      name: "Headphone",
      code: "56305945",
      unitCost: 900.0,
      stock: 250,
      quantity: 1,
      discount: 0.0,
      tax: 0.0,
      subtotal: 900.0,
    },
  ];

  const summary = {
    orderTax: 0.0,
    discount: 150.0,
    shipping: 50.0,
    grandTotal: 200.0,
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-6 border-b">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-gray-900">
              Create Purchase
            </h1>
          </div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/pyle/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Create Purchase</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="space-y-4">
          <div>
            <Label
              htmlFor="date"
              className="text-sm font-medium text-gray-700 mb-2"
            >
              Date
            </Label>
            <Input id="date" type="date" className="w-full" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label
              htmlFor="supplier"
              className="text-sm font-medium text-gray-700 mb-2"
            >
              Supplier
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select supplier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solid-it">Solid IT Solution</SelectItem>
                <SelectItem value="genx-it">Genx IT</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label
              htmlFor="warehouse"
              className="text-sm font-medium text-gray-700 mb-2"
            >
              Warehouse
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select warehouse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="warehouse-01">Warehouse 01</SelectItem>
                <SelectItem value="warehouse-02">Warehouse 02</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Product Search */}
      <div className="mb-8">
        <Label
          htmlFor="product-search"
          className="text-sm font-medium text-gray-700 mb-2"
        >
          Choose Product
        </Label>
        <div className="relative">
          <Input
            id="product-search"
            placeholder="Scan / Search product by code"
            className="w-full pl-4 pr-12"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Products Table */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Selected Products For Purchase
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
                      <QuantityCounter product={product} />
                    </TableCell>
                    <TableCell>${product.discount.toFixed(2)}</TableCell>
                    <TableCell>${product.tax.toFixed(2)}</TableCell>
                    <TableCell>${product.subtotal.toFixed(2)}</TableCell>
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
          </div>
        </CardContent>
      </Card>

      {/* Order Details */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label
                  htmlFor="order-tax"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  Order Tax
                </Label>
                <div className="relative">
                  <Input
                    id="order-tax"
                    type="number"
                    placeholder="0"
                    className="pr-12"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    %
                  </span>
                </div>
              </div>

              <div>
                <Label
                  htmlFor="shipping-cost"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  Shipping Cost
                </Label>
                <div className="relative">
                  <Input
                    id="shipping-cost"
                    type="number"
                    placeholder="0"
                    className="pr-12"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                    $
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label
                  htmlFor="discount"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  Discount
                </Label>
                <div className="relative">
                  <Input
                    id="discount"
                    type="number"
                    placeholder="0"
                    className="pr-12"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                    $
                  </span>
                </div>
              </div>

              <div>
                <Label
                  htmlFor="status"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  Status
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sent">Sent</SelectItem>
                    <SelectItem value="received">Received</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">ORDER TAX:</span>
                  <span className="text-sm font-semibold">
                    ${summary.orderTax.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">DISCOUNT:</span>
                  <span className="text-sm font-semibold">
                    ${summary.discount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">SHIPPING:</span>
                  <span className="text-sm font-semibold">
                    ${summary.shipping.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-sm font-semibold text-gray-900">
                    GRAND TOTAL:
                  </span>
                  <span className="text-lg font-bold text-blue-600">
                    ${summary.grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Notes and Submit */}
      <div className="space-y-6">
        <div>
          <Label
            htmlFor="notes"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            Notes
          </Label>
          <Textarea
            id="notes"
            placeholder="Add a note"
            rows={4}
            className="resize-none"
          />
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Submit Purchase
        </Button>
      </div>
    </div>
  );
}

// Quantity Counter Component
function QuantityCounter({ product }: { product: Product }) {
  return (
    <div className="flex items-center border rounded-lg w-fit">
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Minus className="h-3 w-3" />
      </Button>
      <Input
        type="text"
        value={product.quantity}
        className="w-12 h-8 border-0 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        readOnly
      />
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Plus className="h-3 w-3" />
      </Button>
    </div>
  );
}




