// app/backup/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
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
  FileText,
  Edit,
  Trash2,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Mock data - in a real app, this would come from an API
const backupData = [
  {
    id: 1,
    date: "1st February",
    time: "10:31",
    size: "32GB",
  },
  {
    id: 2,
    date: "2nd April",
    time: "12:22",
    size: "18GB",
  },
  {
    id: 3,
    date: "12th May",
    time: "7:00",
    size: "12GB",
  },
];

export default function BackupPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      {/* Header Section */}
      <div className="flex flex-col space-y-4 p-6 pb-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Backup</h1>
          </div>
          <div className="mt-2 md:mt-0">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Backup</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* Backup Info Section */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Backup File</p>
                  <p className="text-sm font-medium">
                    Location:{" "}
                    <span className="text-foreground font-semibold">
                      storage/software/Recent/Backup
                    </span>
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit File Location
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Generate Backup
            </Button>
          </div>
        </div>
      </div>

      {/* Backup Table Section */}
      <div className="px-6 flex-1">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Backup History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="select-all" />
                      <label
                        htmlFor="select-all"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        PREVIOUS BACKUP DATE
                      </label>
                    </div>
                  </TableHead>
                  <TableHead className="flex items-center space-x-1">
                    <span>TIME</span>
                    <div className="flex flex-col">
                      <ChevronLeft className="h-3 w-3 -mb-1" />
                      <ChevronRight className="h-3 w-3 -mt-1" />
                    </div>
                  </TableHead>
                  <TableHead className="flex items-center space-x-1">
                    <span>FILE SIZE</span>
                    <div className="flex flex-col">
                      <ChevronLeft className="h-3 w-3 -mb-1" />
                      <ChevronRight className="h-3 w-3 -mt-1" />
                    </div>
                  </TableHead>
                  <TableHead className="text-right">ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {backupData.map((backup) => (
                  <TableRow key={backup.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-3">
                        <Checkbox id={`backup-${backup.id}`} />
                        <label
                          htmlFor={`backup-${backup.id}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {backup.date}
                        </label>
                      </div>
                    </TableCell>
                    <TableCell>{backup.time}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="font-normal">
                        {backup.size}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
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

            {/* Pagination Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-muted-foreground">
                  Showing product per page
                </span>
                <Select defaultValue="10">
                  <SelectTrigger className="w-[70px] h-8">
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
          </CardContent>
        </Card>
      </div>
      
    </div>
  );
}
