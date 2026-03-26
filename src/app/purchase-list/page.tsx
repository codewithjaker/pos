// app/purchase-list/page.tsx
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
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

export default function PurchaseListPage() {
  const purchases = [
    {
      id: 1,
      date: "26/09/2023",
      reference: "5389607",
      supplier: "Solid IT Solution",
      warehouse: "Warehouse 01",
      status: "received",
      grandTotal: "$120.00",
      paid: "$120.00",
      due: "$00.00",
      paymentStatus: "paid",
    },
    {
      id: 2,
      date: "25/09/2023",
      reference: "5389607",
      supplier: "Medizo Co.",
      warehouse: "Warehouse 01",
      status: "ordered",
      grandTotal: "$2100.00",
      paid: "$00.00",
      due: "$2100.00",
      paymentStatus: "due",
    },
    {
      id: 3,
      date: "24/09/2023",
      reference: "5389607",
      supplier: "Coze Agency",
      warehouse: "Warehouse 01",
      status: "received",
      grandTotal: "$1210.00",
      paid: "$1210.00",
      due: "$00.00",
      paymentStatus: "paid",
    },
    {
      id: 4,
      date: "23/09/2023",
      reference: "5389607",
      supplier: "Costik Corpo.",
      warehouse: "Warehouse 02",
      status: "received",
      grandTotal: "$1500.00",
      paid: "$1500.00",
      due: "$00.00",
      paymentStatus: "paid",
    },
    {
      id: 5,
      date: "21/09/2023",
      reference: "5389607",
      supplier: "Jeel Beauty Co.",
      warehouse: "Warehouse 01",
      status: "pending",
      grandTotal: "$1100.00",
      paid: "$1000.00",
      due: "$100.00",
      paymentStatus: "partial",
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "received":
        return "default";
      case "ordered":
        return "secondary";
      case "pending":
        return "destructive";
      default:
        return "default";
    }
  };

  const getPaymentStatusVariant = (status: string) => {
    switch (status) {
      case "paid":
        return "default";
      case "due":
        return "destructive";
      case "partial":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/30 p-6">
      {/* Header */}
       <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 pb-6 border-b">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-2xl font-semibold">Purchase List</h1>
        </div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-gray-600">
                Purchase List
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <div className="relative flex-1 w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search on this table"
              className="pl-10 bg-white"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
          <Button variant="outline" className="flex items-center gap-2">
            Excel
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            PDF
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Import
          </Button>
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <PlusCircle className="h-4 w-4" />
            Create Purchase
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
                  <TableHead className="w-[180px]">
                    <div className="flex items-center gap-2">
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
                  <TableHead>SUPPLIER</TableHead>
                  <TableHead>WAREHOUSE</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead>GRAND TOTAL</TableHead>
                  <TableHead>PAID</TableHead>
                  <TableHead>DUE</TableHead>
                  <TableHead>PAYMENT STATUS</TableHead>
                  <TableHead className="text-right">ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchases.map((purchase) => (
                  <TableRow key={purchase.id} className="hover:bg-gray-50/30">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Checkbox id={`purchase-${purchase.id}`} />
                        <span className="text-sm text-gray-600">
                          {purchase.date}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {purchase.reference}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {purchase.supplier}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {purchase.warehouse}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={getStatusVariant(purchase.status)}
                        className="capitalize"
                      >
                        {purchase.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {purchase.grandTotal}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {purchase.paid}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {purchase.due}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={getPaymentStatusVariant(
                          purchase.paymentStatus
                        )}
                        className="capitalize"
                      >
                        {purchase.paymentStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-600 hover:text-red-700"
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
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 pt-6 border-t">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Showing product per page</span>
          <Select defaultValue="10">
            <SelectTrigger className="w-20 h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
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
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
