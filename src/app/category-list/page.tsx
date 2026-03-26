// app/category-list/page.tsx
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
  BreadcrumbPage,
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
import { Search, PlusCircle, Edit, Trash2, ChevronsUpDown } from "lucide-react";

// Mock data - replace with actual data fetching
const categories = [
  { id: "1", code: "Cat-01", name: "Electronics" },
  { id: "2", code: "Cat-02", name: "Mouse" },
  { id: "3", code: "Cat-03", name: "Laptop" },
  { id: "4", code: "Cat-04", name: "Smart Watch" },
];

export default function CategoryListPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 pb-4 border-b">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Category</h1>
        </div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/dashboard"
                className="text-gray-600 hover:text-gray-900"
              >
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-900">
                Category
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Search and Create Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search categories..."
              className="pl-8 bg-white"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button className="bg-purple-600 hover:bg-purple-700">
            <PlusCircle className="w-4 h-4 mr-2" />
            Create Category
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <Card className="shadow-sm border-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[300px]">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="select-all" />
                    <label
                      htmlFor="select-all"
                      className="text-sm font-medium text-gray-900 cursor-pointer flex items-center"
                    >
                      CATEGORY CODE
                      <ChevronsUpDown className="w-4 h-4 ml-2 text-gray-500" />
                    </label>
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center text-sm font-medium text-gray-900">
                    CATEGORY NAME
                    <ChevronsUpDown className="w-4 h-4 ml-2 text-gray-500" />
                  </div>
                </TableHead>
                <TableHead className="text-right">ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id} className="hover:bg-gray-50/50">
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={`category-${category.id}`} />
                      <label
                        htmlFor={`category-${category.id}`}
                        className="text-sm text-gray-600 cursor-pointer"
                      >
                        {category.code}
                      </label>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {category.name}
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4 text-gray-600" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4 text-gray-600" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pagination Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Showing product per page</span>
          <Select defaultValue="10">
            <SelectTrigger className="w-20 h-8 border-0 shadow-none bg-transparent">
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
  );
}
