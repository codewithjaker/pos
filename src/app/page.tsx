import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import SalesTarget from "@/components/sales-target";

// Mock data - in a real app, this would come from an API
const statsData = [
  { label: "SALES", value: "$5312.00", icon: "💰" },
  { label: "PURCHASES", value: "$1304.00", icon: "🛒" },
  { label: "SALES RETURN", value: "$314.00", icon: "↩️" },
  { label: "PURCHASES RETURN", value: "$50.00", icon: "🔄" },
];
// const statsData = [
//   {
//     label: "SALES",
//     value: "$5312.00",
//     icon: DollarSign
//   },
//   {
//     label: "PURCHASES",
//     value: "$1304.00",
//     icon: ShoppingCart
//   },
//   {
//     label: "SALES RETURN",
//     value: "$314.00",
//     icon: Undo2
//   },
//   {
//     label: "PURCHASES RETURN",
//     value: "$50.00",
//     icon: RotateCcw
//   }
// ];

const stockAlertData = [
  {
    id: "1",
    code: "87305928",
    product: "Smartphone",
    warehouse: "Warehouse 02",
    quantity: 5,
    alertQuantity: 10,
  },
  {
    id: "2",
    code: "87305912",
    product: "Mask",
    warehouse: "Warehouse 02",
    quantity: 10,
    alertQuantity: 5,
  },
  {
    id: "3",
    code: "87305452",
    product: "Laptop",
    warehouse: "Warehouse 01",
    quantity: 100,
    alertQuantity: 5,
  },
  {
    id: "4",
    code: "87305231",
    product: "Earphone",
    warehouse: "Warehouse 03",
    quantity: 10,
    alertQuantity: 50,
  },
];

const recentInvoicesData = [
  {
    id: "inv_87305901",
    code: "87305901",
    customer: "Jhon Doe",
    amount: 1200.0,
    status: "Due",
  },
  {
    id: "inv_87305902",
    code: "87305902",
    customer: "Angela Carter",
    amount: 450.0,
    status: "Paid",
  },
  {
    id: "inv_87305903",
    code: "87305903",
    customer: "Victor James",
    amount: 980.5,
    status: "Overdue",
  },
  {
    id: "inv_87305904",
    code: "87305904",
    customer: "Jonathon Ronan",
    amount: 633.5,
    status: "Paid",
  },
  {
    id: "inv_87305905",
    code: "87305905",
    customer: "Samantha Lee",
    amount: 770.7,
    status: "Due",
  },
  {
    id: "inv_87305906",
    code: "87305906",
    customer: "Michael Brown",
    amount: 350.75,
    status: "Paid",
  },
  {
    id: "inv_87305907",
    code: "87305907",
    customer: "Emily Davis",
    amount: 420.0,
    status: "Due",
  },
];

const recentSalesData = [
  {
    id: "INV-87305112",
    reference: "87305928",
    customer: "Jhon Doe",
    status: "Completed",
    total: 1200.0,
    paid: 1200.0,
    due: 0.0,
    paymentStatus: "Paid",
  },
  {
    id: "INV-87305113",
    reference: "87305929",
    customer: "Angela Carter",
    status: "Incomplete",
    total: 1450.0,
    paid: 1000.0,
    due: 450.0,
    paymentStatus: "Due",
  },
  {
    id: "INV-87305114",
    reference: "87305927",
    customer: "Victor James",
    status: "Completed",
    total: 1200.0,
    paid: 1200.0,
    due: 0.0,
    paymentStatus: "Paid",
  },
  {
    id: "INV-87305115",
    reference: "87305930",
    customer: "Sophia Miller",
    status: "Completed",
    total: 950.0,
    paid: 950.0,
    due: 0.0,
    paymentStatus: "Paid",
  },
  {
    id: "INV-87305116",
    reference: "87305931",
    customer: "Michael Smith",
    status: "Incomplete",
    total: 1100.0,
    paid: 600.0,
    due: 500.0,
    paymentStatus: "Due",
  },
  {
    id: "INV-87305117",
    reference: "87305932",
    customer: "Emily Johnson",
    status: "Completed",
    total: 700.0,
    paid: 700.0,
    due: 0.0,
    paymentStatus: "Paid",
  },
  {
    id: "INV-87305118",
    reference: "87305933",
    customer: "Daniel Wilson",
    status: "Incomplete",
    total: 1250.0,
    paid: 1000.0,
    due: 250.0,
    paymentStatus: "Due",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <Card key={index} className="shadow-sm border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="text-2xl">{stat.icon}</div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Top Selling Products Chart */}
        <Card className="shadow-sm border-0">
          <CardHeader>
            <CardTitle>Top Selling Products (2023)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Chart: Top Selling Products
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Sales & Purchases */}
        <Card className="shadow-sm border-0">
          <CardHeader>
            <CardTitle>This Weeks Sales & Purchases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Chart: Weekly Sales & Purchases
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Stock Alert */}
        <Card className="shadow-sm border-0">
          <CardHeader>
            <CardTitle>Stock Alert</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>CODE</TableHead>
                  <TableHead>PRODUCT</TableHead>
                  <TableHead>WAREHOUSE</TableHead>
                  <TableHead>QUANTITY</TableHead>
                  <TableHead>ALERT QUANTITY</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stockAlertData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.code}</TableCell>
                    <TableCell>{item.product}</TableCell>
                    <TableCell>{item.warehouse}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      <span className="text-red-500 font-semibold">
                        {item.alertQuantity}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Top Customers */}
        <Card className="shadow-sm border-0">
          <CardHeader>
            <CardTitle>Top 05 Customer (January)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-muted/20 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Chart: Top Customers</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Sales Target */}
        <Card className="shadow-sm border-0">
          <CardHeader>
            <CardTitle>Sales Target</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Weekly</span>
                <span className="font-semibold">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Monthly</span>
                <span className="font-semibold">55%</span>
              </div>
              <Progress value={55} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Yearly</span>
                <span className="font-semibold">67%</span>
              </div>
              <Progress value={67} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Payment Status */}
        <Card className="shadow-sm border-0">
          <CardHeader>
            <CardTitle>Payment Sent & Received (Last 5 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Chart: Payment Status</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Sales Target */}
        {/* <SalesTarget /> */}
      </div>

      {/* Recent Invoices */}
      <Card className="shadow-sm border-0 mb-8">
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>REF. CODE</TableHead>
                <TableHead>CUSTOMER</TableHead>
                <TableHead>AMOUNT</TableHead>
                <TableHead>STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentInvoicesData.map((invoice, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    <a href="#" className="text-purple-600 hover:underline">
                      {invoice.code}
                    </a>
                  </TableCell>
                  <TableCell>{invoice.customer}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        invoice.status === "Paid" ? "default" : "destructive"
                      }
                    >
                      {invoice.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Recent Sales */}
      <Card className="shadow-sm border-0">
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>REFERENCE</TableHead>
                <TableHead>CUSTOMER</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>GRAND TOTAL</TableHead>
                <TableHead>PAID</TableHead>
                <TableHead>DUE</TableHead>
                <TableHead>PAYMENT STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentSalesData.map((sale, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    <a href="#" className="text-purple-600 hover:underline">
                      {sale.reference}
                    </a>
                  </TableCell>
                  <TableCell>{sale.customer}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        sale.status === "Completed" ? "default" : "destructive"
                      }
                    >
                      {sale.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{sale.total}</TableCell>
                  <TableCell>{sale.paid}</TableCell>
                  <TableCell>{sale.due}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        sale.paymentStatus === "Paid"
                          ? "default"
                          : "destructive"
                      }
                    >
                      {sale.paymentStatus}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="mt-12 py-6 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold">© Pyle</span> is proudly owned by{" "}
            <a
              href="https://hibootstrap.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              HiBootstrap
            </a>
          </div>
          <div>
            <p className="text-muted-foreground">
              <span className="font-bold">PYLE</span> - Ultimate Inventory With{" "}
              <span className="font-bold">POS</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
