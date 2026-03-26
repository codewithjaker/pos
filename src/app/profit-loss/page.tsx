import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
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
import { Badge } from "@/components/ui/badge";

interface ProfitLossData {
  id: string;
  date: string;
  sales: string;
  purchases: string;
  salesReturn: string;
  purchaseReturn: string;
  revenue: string;
  net: string;
}

const profitData: ProfitLossData[] = [
  {
    id: "1",
    date: "26/09/2023",
    sales: "$7420.00",
    purchases: "$10994.00",
    salesReturn: "$0.00",
    purchaseReturn: "$0.00",
    revenue: "$315.00",
    net: "$1324.00",
  },
  {
    id: "2",
    date: "25/09/2023",
    sales: "$2420.00",
    purchases: "$20994.00",
    salesReturn: "$0.00",
    purchaseReturn: "$0.00",
    revenue: "$415.00",
    net: "$1524.00",
  },
  {
    id: "3",
    date: "22/09/2023",
    sales: "$4520.00",
    purchases: "$7994.00",
    salesReturn: "$0.00",
    purchaseReturn: "$0.00",
    revenue: "$215.00",
    net: "$2324.00",
  },
];

const lossData: ProfitLossData[] = [
  {
    id: "1",
    date: "26/09/2023",
    sales: "$7420.00",
    purchases: "$10994.00",
    salesReturn: "$0.00",
    purchaseReturn: "$0.00",
    revenue: "$315.00",
    net: "$1324.00",
  },
  {
    id: "2",
    date: "25/09/2023",
    sales: "$2420.00",
    purchases: "$20994.00",
    salesReturn: "$0.00",
    purchaseReturn: "$0.00",
    revenue: "$415.00",
    net: "$1524.00",
  },
];

const ProfitLossTable = ({
  data,
  type,
}: {
  data: ProfitLossData[];
  type: "profit" | "loss";
}) => {
  return (
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
          <TableHead>SALES</TableHead>
          <TableHead>PURCHASES</TableHead>
          <TableHead>SALES RETURN</TableHead>
          <TableHead>PURCHASE RETURN</TableHead>
          <TableHead>REVENUE</TableHead>
          <TableHead>{type === "profit" ? "PROFIT NET" : "LOSS NET"}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">
              <div className="flex items-center space-x-2">
                <Checkbox id={`row-${item.id}`} />
                <label
                  htmlFor={`row-${item.id}`}
                  className="text-sm cursor-pointer"
                >
                  {item.date}
                </label>
              </div>
            </TableCell>
            <TableCell>{item.sales}</TableCell>
            <TableCell>{item.purchases}</TableCell>
            <TableCell>{item.salesReturn}</TableCell>
            <TableCell>{item.purchaseReturn}</TableCell>
            <TableCell>{item.revenue}</TableCell>
            <TableCell>
              <Badge
                variant={type === "profit" ? "default" : "destructive"}
                className="text-xs"
              >
                {item.net}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default function ProfitLossPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 pb-4 border-b">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profit & Loss</h1>
        </div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/pyle/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Profit & Loss</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        <div className="lg:col-span-3">
          <Select defaultValue="1">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select warehouse" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Warehouse 01</SelectItem>
              <SelectItem value="2">Warehouse 02</SelectItem>
              <SelectItem value="3">Warehouse 03</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="lg:col-span-9 flex justify-end gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Excel
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            PDF
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <Card className="shadow-sm border-0">
        <CardContent className="p-0">
          <Tabs defaultValue="profit" className="w-full">
            <div className="border-b">
              <TabsList className="p-4 pb-0">
                <TabsTrigger
                  value="profit"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Profit
                </TabsTrigger>
                <TabsTrigger
                  value="loss"
                  className="data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground"
                >
                  Loss
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="profit" className="m-0">
              <div className="p-1">
                <ProfitLossTable data={profitData} type="profit" />
              </div>
            </TabsContent>

            <TabsContent value="loss" className="m-0">
              <div className="p-1">
                <ProfitLossTable data={lossData} type="loss" />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
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

        <div className="flex items-center gap-1">
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

    </div>
  );
}

// Icons (you can replace with actual icons from your preferred library)
const FileText = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const Download = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

const ChevronLeft = ({ className }: { className?: string }) => (
  <svg
    className={className}
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
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg
    className={className}
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
);
