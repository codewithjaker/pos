// app/transfer-list/page.tsx
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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Search,
  Filter,
  Download,
  Upload,
  PlusCircle,
  Eye,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function TransferListPage() {
  const transfers = [
    {
      id: 1,
      date: "26/12/2023",
      reference: "3489603",
      fromWarehouse: "Warehouse 02",
      toWarehouse: "Warehouse 01",
      totalItems: 5,
      grandTotal: "$120.00",
      status: "completed",
    },
    {
      id: 2,
      date: "25/12/2023",
      reference: "3289605",
      fromWarehouse: "Warehouse 02",
      toWarehouse: "Warehouse 01",
      totalItems: 7,
      grandTotal: "$234.00",
      status: "completed",
    },
    {
      id: 3,
      date: "24/12/2023",
      reference: "4589603",
      fromWarehouse: "Warehouse 02",
      toWarehouse: "Warehouse 01",
      totalItems: 10,
      grandTotal: "$213.00",
      status: "completed",
    },
    {
      id: 4,
      date: "23/12/2023",
      reference: "6789606",
      fromWarehouse: "Warehouse 02",
      toWarehouse: "Warehouse 01",
      totalItems: 12,
      grandTotal: "$140.00",
      status: "completed",
    },
    {
      id: 5,
      date: "22/12/2023",
      reference: "2896034",
      fromWarehouse: "Warehouse 02",
      toWarehouse: "Warehouse 01",
      totalItems: 15,
      grandTotal: "$432.00",
      status: "completed",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col space-y-6 bg-gray-50/30 p-4 md:p-6">
      {/* Header Section */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-end md:justify-between md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Transfer List</h1>
          <Breadcrumb className="mt-2">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/pyle/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Transfer List</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            <Input
              placeholder="Search on this table"
              className="pl-10 md:w-[300px]"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Excel
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            PDF
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Import
          </Button>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Create Transfer
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <Card className="shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">
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
                  <TableHead>FROM WAREHOUSE</TableHead>
                  <TableHead>TO WAREHOUSE</TableHead>
                  <TableHead>TOTAL ITEMS</TableHead>
                  <TableHead>GRAND TOTAL</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead className="text-right">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transfers.map((transfer) => (
                  <TableRow key={transfer.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Checkbox id={`transfer-${transfer.id}`} />
                        <span className="text-sm text-muted-foreground">
                          {transfer.date}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {transfer.reference}
                    </TableCell>
                    <TableCell>{transfer.fromWarehouse}</TableCell>
                    <TableCell>{transfer.toWarehouse}</TableCell>
                    <TableCell>{transfer.totalItems}</TableCell>
                    <TableCell>{transfer.grandTotal}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="bg-green-50 text-green-700 hover:bg-green-50"
                      >
                        Completed
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
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

      {/* Pagination */}
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">
            Showing product per page
          </span>
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
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="h-9 w-9">
            1
          </Button>
          <Button variant="ghost" size="sm" className="h-9 w-9">
            2
          </Button>
          <Button variant="ghost" size="sm" className="h-9 w-9">
            3
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t pt-4">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold">© Pyle</span> is proudly owned by{" "}
            <a
              href="https://hibootstrap.com/"
              className="font-semibold hover:underline"
            >
              HiBootstrap
            </a>
          </div>
          <div className="text-sm text-muted-foreground md:text-right">
            <span className="font-semibold">PYLE</span> - Ultimate Inventory
            With <span className="font-semibold">POS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
