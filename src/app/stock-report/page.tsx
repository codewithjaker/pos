// app/stock-report/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, Trash2, Download, FileText } from "lucide-react";

// Mock data - in a real app, this would come from an API
const stockData = [
  {
    id: 1,
    code: "273-2416",
    product: "Headphones",
    category: "Electronics",
    stock: "50pc",
  },
  {
    id: 2,
    code: "273-2415",
    product: "Mouse",
    category: "Electronics",
    stock: "25pc",
  },
  {
    id: 3,
    code: "273-123",
    product: "Laptop",
    category: "Electronics",
    stock: "10pc",
  },
  {
    id: 4,
    code: "239-143",
    product: "Keyboard",
    category: "Electronics",
    stock: "12pc",
  },
  {
    id: 5,
    code: "273-2410",
    product: "Smart Watch",
    category: "Electronics",
    stock: "100pc",
  },
  {
    id: 6,
    code: "273-2419",
    product: "Laptop",
    category: "Electronics",
    stock: "15pc",
  },
];

export default function StockReportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50/30">
      {/* Header */}
      <div className="flex flex-col space-y-4 p-6 pb-4 md:flex-row md:items-end md:justify-between md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Stock Report</h1>
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/dashboard" className="hover:text-foreground">
              Dashboard
            </a>
            <span>/</span>
            <span className="text-foreground">Stock Report</span>
          </nav>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:flex-wrap">
              {/* Search */}
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search on this table..."
                    className="pl-8 bg-white"
                  />
                </div>
              </div>

              {/* Warehouse Select */}
              <div className="min-w-[200px]">
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
              </div>
            </div>
          </div>

          {/* Export Buttons */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-end gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Excel
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <FileText className="h-4 w-4" />
                PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 pb-6">
        <Card className="border-0 shadow-sm">
          <CardHeader className="px-6 py-4">
            <CardTitle className="text-lg">Stock Overview</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="select-all" />
                      <label
                        htmlFor="select-all"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        CODE
                      </label>
                    </div>
                  </TableHead>
                  <TableHead>PRODUCTS</TableHead>
                  <TableHead>CATEGORY</TableHead>
                  <TableHead>CURRENT STOCK</TableHead>
                  <TableHead className="text-right">ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stockData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Checkbox id={`item-${item.id}`} />
                        <label
                          htmlFor={`item-${item.id}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {item.code}
                        </label>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {item.product}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {item.stock}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          asChild
                        >
                          <a href={`/stock-report/${item.id}`}>
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
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
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Showing product per page</span>
            <Select defaultValue="10">
              <SelectTrigger className="w-[80px]">
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
            <Button variant="outline" size="icon" className="h-8 w-8">
              <span className="sr-only">Previous</span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8">
              1
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8">
              2
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8">
              3
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <span className="sr-only">Next</span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
