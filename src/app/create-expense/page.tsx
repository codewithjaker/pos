"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function CreateExpensePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    date: "",
    warehouse: "",
    expenseCategory: "",
    amount: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Expense data:", formData);
    // After successful submission, you might want to redirect
    // router.push('/expenses');
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50/30 flex flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/pyle/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Create Expenses</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Create Expenses</h2>
        </div>

        {/* Form Card */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Expense Information</CardTitle>
            <CardDescription>
              Fill in the details below to create a new expense record.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date Field */}
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Warehouse Field */}
                <div className="space-y-2">
                  <Label htmlFor="warehouse">Warehouse</Label>
                  <Select
                    value={formData.warehouse}
                    onValueChange={(value) => handleChange("warehouse", value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Warehouse" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Warehouse 01</SelectItem>
                      <SelectItem value="2">Warehouse 02</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Expense Category Field */}
                <div className="space-y-2">
                  <Label htmlFor="expenseCategory">Expense Category</Label>
                  <Select
                    value={formData.expenseCategory}
                    onValueChange={(value) =>
                      handleChange("expenseCategory", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Electronics</SelectItem>
                      <SelectItem value="2">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Amount Field */}
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0.00"
                      value={formData.amount}
                      onChange={(e) => handleChange("amount", e.target.value)}
                      className="pl-7"
                    />
                  </div>
                </div>
              </div>

              {/* Details Field */}
              <div className="space-y-2">
                <Label htmlFor="details">Details</Label>
                <Textarea
                  id="details"
                  placeholder="Enter expense details..."
                  rows={4}
                  value={formData.details}
                  onChange={(e) => handleChange("details", e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Create Expense
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              <span className="font-semibold">© Pyle</span> is proudly owned by{" "}
              <a
                href="https://hibootstrap.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
              >
                HiBootstrap
              </a>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-semibold">PYLE</span> - Ultimate Inventory
              With <span className="font-semibold">POS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
