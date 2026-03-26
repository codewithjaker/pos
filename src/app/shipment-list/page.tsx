// app/shipment-list/page.tsx
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Search,
  FileDown,
  Filter,
  ChevronLeft,
  ChevronRight,
  Edit,
  X,
  Trash2,
} from "lucide-react";

interface Shipment {
  id: string;
  date: string;
  reference: string;
  saleReference: string;
  customer: string;
  warehouse: string;
  status: "delivered" | "packed" | "cancelled";
}

const shipments: Shipment[] = [
  {
    id: "1",
    date: "26/09/2023",
    reference: "5389607",
    saleReference: "S - 2234",
    customer: "Jane Ronan",
    warehouse: "Warehouse 01",
    status: "delivered",
  },
  {
    id: "2",
    date: "25/09/2023",
    reference: "5389607",
    saleReference: "S - 1234",
    customer: "Victor james",
    warehouse: "Warehouse 01",
    status: "packed",
  },
  {
    id: "3",
    date: "24/09/2023",
    reference: "5389607",
    saleReference: "S - 1234",
    customer: "Jhon Doe",
    warehouse: "Warehouse 02",
    status: "delivered",
  },
  {
    id: "4",
    date: "23/09/2023",
    reference: "5389607",
    saleReference: "S- 3453",
    customer: "Angela Carter",
    warehouse: "Warehouse 01",
    status: "delivered",
  },
  {
    id: "5",
    date: "21/09/2023",
    reference: "5389607",
    saleReference: "S - 22345",
    customer: "Jenifer Lora",
    warehouse: "Warehouse 03",
    status: "cancelled",
  },
];

const getStatusVariant = (status: Shipment["status"]) => {
  switch (status) {
    case "delivered":
      return "default";
    case "packed":
      return "secondary";
    case "cancelled":
      return "destructive";
    default:
      return "outline";
  }
};

export default function ShipmentListPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 pb-4 border-b">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Shipment</h1>
        </div>
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <a href="/pyle/" className="hover:text-foreground transition-colors">
            Dashboard
          </a>
          <span>/</span>
          <span className="text-foreground font-medium">Shipment</span>
        </nav>
      </div>

      {/* Search and Export Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex-1 w-full sm:max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search on this table"
              className="pl-10 bg-white"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <FileDown className="h-4 w-4" />
            Excel
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FileDown className="h-4 w-4" />
            PDF
          </Button>
        </div>
      </div>

      {/* Shipments Table */}
      <Card className="mb-6">
        <CardContent className="p-0">
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px]">
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
                  <TableHead>SALE REFERENCE</TableHead>
                  <TableHead>CUSTOMER</TableHead>
                  <TableHead>WAREHOUSE</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead className="text-right">ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shipments.map((shipment) => (
                  <TableRow key={shipment.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Checkbox id={`shipment-${shipment.id}`} />
                        <label
                          htmlFor={`shipment-${shipment.id}`}
                          className="text-sm text-muted-foreground cursor-pointer"
                        >
                          {shipment.date}
                        </label>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {shipment.reference}
                    </TableCell>
                    <TableCell>{shipment.saleReference}</TableCell>
                    <TableCell>{shipment.customer}</TableCell>
                    <TableCell>{shipment.warehouse}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(shipment.status)}>
                        {shipment.status.charAt(0).toUpperCase() +
                          shipment.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end items-center space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
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
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-8">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
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
        <div className="flex items-center space-x-1">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
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
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Filter Modal - You can implement this with a Dialog component */}
      {/* <FilterDialog /> */}
    </div>
  );
}
