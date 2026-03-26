// app/warehouse-list/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, PlusCircle, ChevronsUpDown, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

// Mock data - in a real app, this would come from an API
const warehouseData = [
  {
    id: 1,
    name: "Warehouse 01",
    phone: "990 32 64 970",
    email: "any1994@gmail.com",
    country: "United States",
    city: "Los Angeles",
  },
  {
    id: 2,
    name: "Warehouse 02",
    phone: "234 32 64 970",
    email: "viki478@gmail.com",
    country: "United States",
    city: "New York",
  },
  {
    id: 3,
    name: "Warehouse 03",
    phone: "990 32 64 235",
    email: "jeny19@gmail.com",
    country: "Canada",
    city: "Ottawa",
  },
];

export default function WarehouseListPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Section */}
      <div className="flex-1 space-y-6 p-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b">
          <div>
            <h1 className="text-2xl font-bold">Warehouse</h1>
          </div>
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-foreground">
                    Warehouse
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Search and Actions Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex-1 w-full sm:max-w-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search on this table"
                className="pl-10 bg-white"
              />
            </div>
          </div>
          <div>
            <Button asChild className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              <Link href="/create-warehouse">
                <PlusCircle className="h-4 w-4" />
                Create Warehouse
              </Link>
            </Button>
          </div>
        </div>

        {/* Table Section */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">
                      <div className="flex items-center gap-2">
                        <Checkbox id="select-all" />
                        <label
                          htmlFor="select-all"
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          NAME
                          <ChevronsUpDown className="h-4 w-4" />
                        </label>
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        PHONE
                        <ChevronsUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        EMAIL
                        <ChevronsUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        COUNTRY
                        <ChevronsUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        CITY
                        <ChevronsUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="text-right">ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {warehouseData.map((warehouse) => (
                    <TableRow key={warehouse.id}>
                      <TableCell className="font-medium">
                        {warehouse.name}
                      </TableCell>
                      <TableCell>{warehouse.phone}</TableCell>
                      <TableCell>{warehouse.email}</TableCell>
                      <TableCell>{warehouse.country}</TableCell>
                      <TableCell>{warehouse.city}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={`/warehouse/${warehouse.id}/edit`}>
                              <Edit className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Pagination Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Showing product per page</span>
            <Select defaultValue="10">
              <SelectTrigger className="w-20 border-0 shadow-none p-0 h-auto">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="30">30</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
