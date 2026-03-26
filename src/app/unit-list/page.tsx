// app/unit-list/page.tsx
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Search,
  PlusCircle,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  Edit,
  Trash2,
} from "lucide-react";

interface Unit {
  id: string;
  name: string;
  shortName: string;
  baseUnit: string;
  operator: string;
  operationValue: string;
}

const units: Unit[] = [
  {
    id: "1",
    name: "Grams",
    shortName: "g",
    baseUnit: "Kilogram",
    operator: "/",
    operationValue: "1000",
  },
  {
    id: "2",
    name: "Piece",
    shortName: "pc",
    baseUnit: "Piece",
    operator: "\\",
    operationValue: "1",
  },
  {
    id: "3",
    name: "Dozens",
    shortName: "dz",
    baseUnit: "Piece",
    operator: "1",
    operationValue: "12",
  },
  {
    id: "4",
    name: "Kilogram",
    shortName: "kg",
    baseUnit: "Kilogram",
    operator: "1",
    operationValue: "1",
  },
];

export default function UnitListPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 pb-4 border-b">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Unit List</h1>
        </div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/pyle/"
                className="text-gray-600 hover:text-gray-900"
              >
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-900">
                Unit List
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Search and Create Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search On This Table"
              className="pl-10 bg-white"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <PlusCircle className="h-4 w-4 mr-2" />
            Create Unit
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <Card className="mb-6">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
                  <TableHead className="w-[300px]">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="select-all" />
                      <label
                        htmlFor="select-all"
                        className="text-sm font-medium text-gray-900 cursor-pointer"
                      >
                        NAME
                      </label>
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center space-x-1 text-gray-900">
                      <span>SHORT NAME</span>
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center space-x-1 text-gray-900">
                      <span>BASE UNIT</span>
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center space-x-1 text-gray-900">
                      <span>OPERATOR</span>
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center space-x-1 text-gray-900">
                      <span>OPERATION VALUE</span>
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead className="text-right">ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {units.map((unit) => (
                  <TableRow key={unit.id} className="hover:bg-gray-50/50">
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-3">
                        <Checkbox id={`unit-${unit.id}`} />
                        <label
                          htmlFor={`unit-${unit.id}`}
                          className="text-sm font-semibold text-gray-700 cursor-pointer"
                        >
                          {unit.name}
                        </label>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {unit.shortName}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {unit.baseUnit}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {unit.operator}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {unit.operationValue}
                    </TableCell>
                    <TableCell className="text-right">
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
          </div>
        </CardContent>
      </Card>

      {/* Pagination Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Showing product per page</span>
          <Select defaultValue="10">
            <SelectTrigger className="w-20 border-0 shadow-none text-gray-900">
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
            <ChevronLeft className="h-4 w-4 text-purple-600" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 bg-purple-600 text-white hover:bg-purple-700"
          >
            1
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8">
            2
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8">
            3
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4 text-purple-600" />
          </Button>
        </div>
      </div>

    </div>
  );
}
