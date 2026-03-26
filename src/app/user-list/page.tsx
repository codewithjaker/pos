// app/user-list/page.tsx
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
  Eye,
  Edit,
  Trash2,
  Plus,
} from "lucide-react";

interface User {
  id: string;
  image: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  status: "active" | "inactive";
}

const users: User[] = [
  {
    id: "1",
    image:
      "data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABkVSURBVHgBfVtZrF3XWf7WPvvM586j7Rvb8RwnsZMqoUlbdaASEFGgUFEJISHocx/gide+8sR7XyqEhAQSUCQoPEADVJAGWmVok9h1PPve+PpOZ572sPjW2ms6NxbHvdecs8f1T9///f+/rwBff/q9fz6bxvhenucvCYhFCQkhBPgGiAhCfeB39c490Lv0drUf6gu36YP1fv1fyuJ085Obd9jz3dGiuJe6jN6qzhXmuvweCfddXVMfa3br/eYV6e2i2KavJ/V56mMpEt/PIvkn3/ntr9wT3/n7N8/mqXyHBy6a9fDQqPgY3FfYC9pFqT1RsXLhbgQnsPouEL6iQmwRwRxVKJGnVcslTLMMjTjGMMnctcyFYFUdAU459nwYJWijSMwYBk7h+hrtKBUvx9VS5c9RkoteFP8S7oJWEBIswixFSLfdKscKWixCuO+SO5UlZHD9Er+dWZ7Dta01xCLHv97YQWeSuOUWgvpvhUAAZu4zqwRh7mV1otYQRVhEFd+Lq+X46zNnhxczWrA6c1oXCG5hDhbBEmVgUG4+MV9HZzTFMM2t5IXQ/HV5fQ5fvnwaaZ7j3z58gDGPKZdKzpJ2OZFbUqEw41zGd0KbFlLKwKXdZuClmK9AQi+4tPESyCWBYxeYvVpxTuSdXhSCTbIcVyjYo86IAkkMJqneXuI59faxcW0Lg9EYkyTFXJzTGMoLSpTk4NF4hlf08FJKqMgaJpLJkH9FhZCOsOcO8tyLQhY53hLzFUjoBZc2XgK55DGMZ2PuOSOg/pYXiy1x2zXMBTSYpxv1Cl7Y2IfI5pDmyhNyxOkYjflFjBnbm5fq6CeO5vQpLdRgLaWUoIS2oBJJKJQPRJbHcJIMEt1T+LJ9+RrZCI7HzJsRZozOcGvGXbNvmyvI8EUn7tR81Qs1y1M2q5nSppqYqZbVZ5KvZqUqY3QaK6g3WqiV8hjs7yNpN1EulzFbLqJWrWJ2tI6ZWhnVUhFj9QrG6hVUigXUKyXUykWUiwWUCnnks1nkc1lkjYz6zGYyyGQMGPyOjGHo9w0DGcP0fQb7Df3Z4P8z9H0ZfY6hPzP4XQa/z5DvN9R3GvJ9fG/wO+V7M/wd8h2GvJcx9Gf6vQw/jxnyXfJ7Mvx9GfU9hjov8rvyO+Wc5PzUuWbkfORz+T3yXfJ7DXUO8jvkfM1zVufO3y3XJ9ci1ybXKNcq1yzXLtcg1yLXI9ck1yXXJ9cp1yvXLdcvMoj8IovIMDKMjCPjiUwiW8aXWWQWWUWOkWtkGxlH1pF5ZB/ZRwciC8lEZCLZkIxIViQzkh3JkGRJMiXZkgxKFiWTkk3JqGRVMitZlixLpiXbknHJumResi8dIB0hXSGdIR0inSIdI10jnSMdJF0knSSdJR0mnSadJh0nnSedKB0pnSkdKt0qXSudKx0sXSydLB0tXS2dLR0uXS6dLh0vXS+dLx0wXTCdMB0xXTGdMR0ynTKdMh0znTOdMx00nTSdNJ01nTWdNh03nTedOB05nTmdOh07nTudPB09nT2dPp0/nT+dQJ1BnUKdQ51EnUWdRp1HnUidSZ1KnUydTJ1NnU6dT51QnVGdUp1TnVSdVZ1WnVedWJ1ZnVqdW51cnV2dXp1fnWCdYZ1inWOdZJ1lnWadZ51onWmdap1rnWydbZ1unW+dcJ1xnXKdc510nXWddp13nXideZ16nXudfJ19nX6df52AnYGdgp2DnYSdhZ2GnYediJ2JnYqdi52MnY2djp2PnZCdkZ2SnZOdlJ2VnZadl52YnZmdmp2bnZydnZ2enZ+doJ2hnaKdo52knaWdhJ2GnYedip2LnYydjZ2OnY+dkJ2RnZKdk52UnZWdlp2XnZidmZ2anZudnJ2dnZ6dn52gnaGdop2jnaSdpZ2mnaedqJ2pnaqdq52sna2drp2vnbCdsZ2ynbOdtJ21nbaduJ25nbqdu528nb2dvp2/ncCdwZ3CncOdxJ3Fncadx53Incmdyp3LncydzZ3Onc+d0J3RndKd053UndWd1p3Xndid2Z3andud3J3dnd6d353gneGd4p3jneSd5Z3mneid6Z3qneud7J3tne6d753wnfGd8p3znfSd9Z32nfed+J35nfqd+538nf2d/p3/ngCeAZ4CngOeBJ4FngaeB54IngmeCp4LngyeDZ4Ong+eEJ4RnhKeE54UnhWeFp4XnhieGZ4anhueHJ4dnh6eH54gniGeIp4jniSeJZ4mnieeKJ4pniqeK54sni2eLp4vnjCeMZ4ynjOeNJ41njaeN544njmeOp47njyePZ4+nj+eQJ5BnkKeQ55EnkWeRp5HnkieSZ5KnkueTJ5Nnk6eT55QnlGeUp5TnlSeVZ5WnleeWJ5ZnlqeW55cnl2eXp5fnmCeYZ5inmOeZJ5lnmaeZ55onmmeap5rnmyebZ5unm+ecJ5xnnKec550nnWedp53nnifeZ96n3uffJ99n36ff5+An4Gfgp+Dn4SfhZ+Gn4efiJ+Jn4qfi5+Mn42fjp+Pn5CfkZ+Sn5OflJ+Vn5afl5+Yn5mfmp+bn5yfnZ+en5+foJ+hn6Kfo5+kn6Wfpp+nn6ifqZ+qn6ufrJ+tn66fr5+wn7Gfsp+zn7SftZ+2n7efuJ+5n7qfu5+8n72fvp+/n8CfwZ/Cn8OfxJ/Fn8afx5/In8mfyp/Ln8yfzZ/On8+f0J/Rn9Kf05/Un9Wf1p/Xn9if2Z/an9uf3J/dn96f35/gn+Gf4p/jn+Sf5Z/mn+ef6J/pn+qf65/sn+2f7p/vn/Cf8Z/yn/Of9J/1n/af95/4n/mf+p/7n/yf/Z/+n/+fAKABoAKgA6AEoAWgBqAHoAigCaAKoAugDKANoA6gD6AQoBGgEqAToBSgFaAWoBegGKAZoBqgG6AcoB2gHqAfoCCgIaAioCOgJKAloCagJ6AooCmgKqAroCygLaAuoC+gMKAxoDKgM6A0oDWgNqA3oDigOaA6oDugPKA9oD6gP6BAoEGgQqBDoESgRaBGoEegSKBJoEqgS6BMoE2gTqBPoFCgUaBSoFOgVKBVoFagV6BYoFmgWqBboFygXaBeoF+gYKBhoGKgY6BkoGWgZqBnoGigaaBqoGugbKBtoG6gb6BwoHGgcqBzoHSgdaB2oHegeKB5oHqge6B8oH2gfqB/oICggaCCoIOghKCFoIagh6CIoImg",
    firstName: "Angela",
    lastName: "Carter",
    username: "Angela C.",
    email: "any1994@gmail.com",
    phone: "1990 32 64 970",
    status: "active",
  },
  {
    id: "2",
    image:
      "data:image/webp;base64,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",
    firstName: "Victor",
    lastName: "James",
    username: "Victor J.",
    email: "vicky128@gmail.com",
    phone: "990 12 64 333",
    status: "active",
  },
  // Add more users as needed...
];

export default function UserListPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold text-gray-900">User List</h1>
          </div>
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/pyle/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>User List</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-6">
        {/* Filters and Actions */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Left Side - Filter and Search */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search On This Table"
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
              </div>

              {/* Right Side - Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <Button variant="outline" className="flex items-center gap-2">
                  Excel
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  PDF
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Import
                </Button>
                <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4" />
                  Create User
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="select-all" />
                        <label
                          htmlFor="select-all"
                          className="text-sm font-medium"
                        >
                          IMAGE
                        </label>
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        FIRST NAME
                        <span className="text-gray-400">↕</span>
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        LAST NAME
                        <span className="text-gray-400">↕</span>
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        USERNAME
                        <span className="text-gray-400">↕</span>
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        EMAIL
                        <span className="text-gray-400">↕</span>
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        PHONE
                        <span className="text-gray-400">↕</span>
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        STATUS
                        <span className="text-gray-400">↕</span>
                      </div>
                    </TableHead>
                    <TableHead className="text-right">ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center space-x-4">
                          <Checkbox id={`user-${user.id}`} />
                          <img
                            src={user.image}
                            alt={`${user.firstName} ${user.lastName}`}
                            className="h-8 w-8 rounded-full object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        {user.firstName}
                      </TableCell>
                      <TableCell>{user.lastName}</TableCell>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            user.status === "active" ? "default" : "destructive"
                          }
                        >
                          {user.status === "active" ? "Active" : "Inactive"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <span className="text-sm text-gray-600">
              Showing product per page
            </span>
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
    </div>
  );
}
