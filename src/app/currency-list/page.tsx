"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  PlusCircle,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Currency {
  id: string;
  code: string;
  name: string;
  symbol: string;
}

const currencies: Currency[] = [
  { id: "1", code: "USD", name: "US Dollar", symbol: "$" },
  { id: "2", code: "EUR", name: "Euro", symbol: "€" },
  { id: "3", code: "GBP", name: "Pound Sterling", symbol: "£" },
  { id: "4", code: "CNY", name: "Chinese Yuan", symbol: "¥" },
];

export default function CurrencyListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCurrencies = currencies.filter(
    (currency) =>
      currency.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      currency.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleCurrencySelection = (currencyId: string) => {
    setSelectedCurrencies((prev) =>
      prev.includes(currencyId)
        ? prev.filter((id) => id !== currencyId)
        : [...prev, currencyId]
    );
  };

  const toggleSelectAll = () => {
    setSelectedCurrencies(
      selectedCurrencies.length === filteredCurrencies.length
        ? []
        : filteredCurrencies.map((currency) => currency.id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50/30 flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6 pb-6 border-b">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Currency List
          </h1>
        </div>
        <nav className="flex items-center space-x-2 text-sm">
          <a
            href="/dashboard"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Dashboard
          </a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Currency List</span>
        </nav>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex-1 w-full md:max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search on this table"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <PlusCircle className="w-4 h-4 mr-2" />
            Create Currency
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card className="shadow-sm border-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[300px]">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={
                        filteredCurrencies.length > 0 &&
                        selectedCurrencies.length === filteredCurrencies.length
                      }
                      onCheckedChange={toggleSelectAll}
                    />
                    <span className="text-sm font-medium">CURRENCY CODE</span>
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">CURRENCY NAME</span>
                    <div className="flex flex-col">
                      <ChevronLeft className="h-3 w-3 -mb-1" />
                      <ChevronRight className="h-3 w-3 -mt-1" />
                    </div>
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">SYMBOL</span>
                    <div className="flex flex-col">
                      <ChevronLeft className="h-3 w-3 -mb-1" />
                      <ChevronRight className="h-3 w-3 -mt-1" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="text-right">ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCurrencies.map((currency) => (
                <TableRow key={currency.id} className="hover:bg-gray-50/50">
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <Checkbox
                        checked={selectedCurrencies.includes(currency.id)}
                        onCheckedChange={() =>
                          toggleCurrencySelection(currency.id)
                        }
                      />
                      <span className="font-medium text-gray-900">
                        {currency.code}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {currency.name}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {currency.symbol}
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end items-center space-x-3">
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
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 py-6 border-t">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Showing product per page</span>
          <Select
            value={itemsPerPage.toString()}
            onValueChange={(value) => setItemsPerPage(Number(value))}
          >
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
        <div className="flex items-center space-x-1">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-purple-100 text-purple-700 border-purple-200"
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
