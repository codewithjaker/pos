// app/expense-list/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
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
import {
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  PlusCircle,
  Download,
  FileText,
} from "lucide-react";

interface Expense {
  id: string;
  date: string;
  reference: string;
  warehouse: string;
  category: string;
  amount: number;
  details: string;
}

const expenses: Expense[] = [
  {
    id: "1",
    date: "26/12/2023",
    reference: "3489603",
    warehouse: "Warehouse 02",
    category: "Electronics",
    amount: 105,
    details: "Latest Electronics",
  },
  {
    id: "2",
    date: "25/12/2023",
    reference: "3289605",
    warehouse: "Warehouse 02",
    category: "Mobile Phone",
    amount: 50,
    details: "Huwei 370i",
  },
  {
    id: "3",
    date: "24/12/2023",
    reference: "4589603",
    warehouse: "Warehouse 02",
    category: "Lifestyle",
    amount: 48,
    details: "Daily Selling Products",
  },
  {
    id: "4",
    date: "23/12/2023",
    reference: "6789606",
    warehouse: "Warehouse 02",
    category: "Electronics",
    amount: 100,
    details: "Most Selling Products",
  },
  {
    id: "5",
    date: "22/12/2023",
    reference: "2896034",
    warehouse: "Warehouse 02",
    category: "Laptop",
    amount: 43,
    details: "Macbook Pro 2022",
  },
  {
    id: "6",
    date: "21/12/2023",
    reference: "8389605",
    warehouse: "Warehouse 02",
    category: "Headphone",
    amount: 67,
    details: "Best Headphone",
  },
];

export default function ExpenseListPage() {
  return (
    <div className="min-h-screen bg-gray-50/30 p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-2xl font-bold text-gray-900">Expenses List</h1>
          <nav className="flex text-sm text-gray-500 mt-2">
            <a href="/dashboard" className="hover:text-gray-700">
              Dashboard
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Expenses List</span>
          </nav>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search on this table" className="pl-10" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Excel
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            PDF
          </Button>
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <PlusCircle className="h-4 w-4" />
            Create Expenses
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="select-all" />
                      <label
                        htmlFor="select-all"
                        className="text-sm font-medium cursor-pointer"
                      >
                        DATE
                      </label>
                    </div>
                  </TableHead>
                  <TableHead>REFERENCE</TableHead>
                  <TableHead>WAREHOUSE</TableHead>
                  <TableHead>CATEGORY</TableHead>
                  <TableHead>AMOUNT</TableHead>
                  <TableHead>DETAILS</TableHead>
                  <TableHead className="text-right">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expenses.map((expense) => (
                  <TableRow key={expense.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Checkbox id={`expense-${expense.id}`} />
                        <label
                          htmlFor={`expense-${expense.id}`}
                          className="text-sm text-gray-500"
                        >
                          {expense.date}
                        </label>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {expense.reference}
                    </TableCell>
                    <TableCell>{expense.warehouse}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="capitalize">
                        {expense.category}
                      </Badge>
                    </TableCell>
                    <TableCell>${expense.amount}</TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {expense.details}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-600 hover:text-red-700"
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

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>Showing product per page</span>
          <Select defaultValue="10">
            <SelectTrigger className="w-20">
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
