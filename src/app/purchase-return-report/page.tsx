import { Card, CardContent } from "@/components/ui/card";
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
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
} from "lucide-react";

interface PurchaseReturn {
  date: string;
  reference: string;
  returnId: string;
  supplier: string;
  paidBy: string;
  amount: string;
}

const purchaseReturns: PurchaseReturn[] = [
  {
    date: "26/09/2023",
    reference: "5389607",
    returnId: "RT - 3212",
    supplier: "Solid IT Solution",
    paidBy: "Cash",
    amount: "$120.00",
  },
  {
    date: "25/09/2023",
    reference: "5389607",
    returnId: "RT - 3123",
    supplier: "Medizo Co.",
    paidBy: "Cash",
    amount: "$2100.00",
  },
  {
    date: "24/09/2023",
    reference: "5389607",
    returnId: "RT - 3100",
    supplier: "Coze Agency",
    paidBy: "Cash",
    amount: "$1210.00",
  },
  {
    date: "23/09/2023",
    reference: "5389607",
    returnId: "RT - 3001",
    supplier: "Costik Corpo.",
    paidBy: "Cash",
    amount: "$1500.00",
  },
  {
    date: "21/09/2023",
    reference: "5389607",
    returnId: "RT - 2345",
    supplier: "Jeel Beauty Co.",
    paidBy: "Cash",
    amount: "$1100.00",
  },
  {
    date: "19/09/2023",
    reference: "5389607",
    returnId: "RT - 3152",
    supplier: "Eeza Corporation",
    paidBy: "Cash",
    amount: "$15300.00",
  },
];

export default function PurchaseReturnReport() {
  return (
    <div className="min-h-screen bg-gray-50/30 flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 pb-6 border-b">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Purchase Return Report
          </h1>
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a
              href="/pyle/"
              className="hover:text-foreground transition-colors"
            >
              Dashboard
            </a>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">
              Purchase Return Report
            </span>
          </nav>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search On This Table"
              className="pl-10 bg-white"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Excel
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            PDF
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card className="shadow-sm border-0">
        <CardContent className="p-0">
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="font-normal text-sm text-muted-foreground ps-6">
                    DATE
                  </TableHead>
                  <TableHead className="font-normal text-sm text-muted-foreground">
                    REFERENCE
                  </TableHead>
                  <TableHead className="font-normal text-sm text-muted-foreground">
                    RETURN
                  </TableHead>
                  <TableHead className="font-normal text-sm text-muted-foreground">
                    SUPPLIER
                  </TableHead>
                  <TableHead className="font-normal text-sm text-muted-foreground">
                    PAID BY
                  </TableHead>
                  <TableHead className="font-normal text-sm text-muted-foreground text-right pe-6">
                    AMOUNT
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchaseReturns.map((returnItem, index) => (
                  <TableRow key={index} className="border-b hover:bg-muted/50">
                    <TableCell className="ps-6 font-medium">
                      <span className="text-sm text-muted-foreground">
                        {returnItem.date}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {returnItem.reference}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {returnItem.returnId}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {returnItem.supplier}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {returnItem.paidBy}
                    </TableCell>
                    <TableCell className="text-sm font-semibold text-muted-foreground text-right pe-6">
                      {returnItem.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 py-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Showing product per page</span>
          <Select defaultValue="10">
            <SelectTrigger className="w-20 border-0 shadow-none bg-transparent">
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
            size="icon"
            className="h-8 w-8 bg-primary text-primary-foreground"
          >
            1
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            2
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
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
