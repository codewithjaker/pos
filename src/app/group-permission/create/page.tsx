"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PermissionGroup {
  title: string;
  permissions: {
    id: string;
    label: string;
  }[];
}

export default function CreateGroupPermission() {
  const [role, setRole] = useState("");
  const [roleDescription, setRoleDescription] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState<Set<string>>(
    new Set()
  );

  const permissionGroups: PermissionGroup[] = [
    {
      title: "Users Management",
      permissions: [
        { id: "test_1", label: "View" },
        { id: "test_2", label: "Create" },
        { id: "test_3", label: "View All Records Of All Users" },
        { id: "test_4", label: "Edit" },
        { id: "test_5", label: "Delete" },
      ],
    },
    {
      title: "Users Permission",
      permissions: [
        { id: "test_6", label: "View" },
        { id: "test_7", label: "Create" },
        { id: "test_8", label: "Edit" },
        { id: "test_9", label: "Delete" },
      ],
    },
    {
      title: "Products",
      permissions: [
        { id: "test_10", label: "View" },
        { id: "test_11", label: "Create" },
        { id: "test_12", label: "Barcode" },
        { id: "test_13", label: "Edit" },
        { id: "test_14", label: "Delete" },
        { id: "test_15", label: "Import Products" },
      ],
    },
    {
      title: "Adjustments",
      permissions: [
        { id: "test_16", label: "View" },
        { id: "test_17", label: "Create" },
        { id: "test_18", label: "Edit" },
        { id: "test_19", label: "Delete" },
      ],
    },
    {
      title: "Transfer",
      permissions: [
        { id: "test_20", label: "View" },
        { id: "test_21", label: "Create" },
        { id: "test_22", label: "Edit" },
        { id: "test_23", label: "Delete" },
      ],
    },
    {
      title: "Expenses",
      permissions: [
        { id: "test_24", label: "View" },
        { id: "test_25", label: "Create" },
        { id: "test_26", label: "Edit" },
        { id: "test_27", label: "Delete" },
      ],
    },
    {
      title: "Sales",
      permissions: [
        { id: "test_28", label: "View" },
        { id: "test_29", label: "Create" },
        { id: "test_30", label: "Point Of Sales" },
        { id: "test_31", label: "Edit" },
        { id: "test_32", label: "Delete" },
      ],
    },
    {
      title: "Purchase",
      permissions: [
        { id: "test_33", label: "View" },
        { id: "test_34", label: "Create" },
        { id: "test_35", label: "Edit" },
        { id: "test_36", label: "Delete" },
      ],
    },
    {
      title: "Quotation",
      permissions: [
        { id: "test_37", label: "View" },
        { id: "test_38", label: "Create" },
        { id: "test_39", label: "Edit" },
        { id: "test_40", label: "Delete" },
      ],
    },
    {
      title: "Sales Return",
      permissions: [
        { id: "test_41", label: "View" },
        { id: "test_42", label: "Create" },
        { id: "test_43", label: "Edit" },
        { id: "test_44", label: "Delete" },
      ],
    },
    {
      title: "Purchase Return",
      permissions: [
        { id: "test_45", label: "View" },
        { id: "test_46", label: "Create" },
        { id: "test_47", label: "Edit" },
        { id: "test_48", label: "Delete" },
      ],
    },
    {
      title: "Payment Status",
      permissions: [
        { id: "test_49", label: "View" },
        { id: "test_50", label: "Create" },
        { id: "test_51", label: "Edit" },
        { id: "test_52", label: "Delete" },
      ],
    },
    {
      title: "Payment Purchase",
      permissions: [
        { id: "test_53", label: "View" },
        { id: "test_54", label: "Create" },
        { id: "test_55", label: "Edit" },
        { id: "test_56", label: "Delete" },
      ],
    },
    {
      title: "Payment Returns",
      permissions: [
        { id: "test_57", label: "View" },
        { id: "test_58", label: "Create" },
        { id: "test_59", label: "Edit" },
        { id: "test_60", label: "Delete" },
      ],
    },
    {
      title: "Customer List",
      permissions: [
        { id: "test_61", label: "View" },
        { id: "test_62", label: "Create" },
        { id: "test_63", label: "Import Customer" },
        { id: "test_64", label: "Edit" },
        { id: "test_65", label: "Delete" },
      ],
    },
    {
      title: "Supplier List",
      permissions: [
        { id: "test_66", label: "View" },
        { id: "test_67", label: "Create" },
        { id: "test_68", label: "Import Supplies" },
        { id: "test_69", label: "Edit" },
        { id: "test_70", label: "Delete" },
      ],
    },
    {
      title: "Report List",
      permissions: [
        { id: "test_71", label: "Reports Payment Sales" },
        { id: "test_72", label: "Reports Payment Purchases" },
        { id: "test_73", label: "Reports Sales Return Payments" },
        { id: "test_74", label: "Reports Purchases Return Payments" },
        { id: "test_75", label: "Product Quantity Alerts" },
        { id: "test_76", label: "Warehouse Stock Chart" },
        { id: "test_78", label: "Customer Report" },
        { id: "test_79", label: "Profit & Loss" },
        { id: "test_80", label: "Sale Report" },
        { id: "test_81", label: "Purchase Report" },
      ],
    },
    {
      title: "System Settings",
      permissions: [
        { id: "test_82", label: "System Settings" },
        { id: "test_83", label: "Brand" },
        { id: "test_84", label: "Warehouse" },
        { id: "test_85", label: "Backup" },
        { id: "test_86", label: "Category" },
        { id: "test_87", label: "Currency" },
        { id: "test_88", label: "Unit" },
      ],
    },
  ];

  const handlePermissionChange = (permissionId: string) => {
    setSelectedPermissions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(permissionId)) {
        newSet.delete(permissionId);
      } else {
        newSet.add(permissionId);
      }
      return newSet;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      role,
      roleDescription,
      permissions: Array.from(selectedPermissions),
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 pb-4 border-b">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
            Create Group Permission
          </h1>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/pyle/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Create Group Permission</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Main Form */}
        <Card className="shadow-sm border-0">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit}>
              {/* Role Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <Label
                    htmlFor="role"
                    className="text-sm font-medium text-gray-700"
                  >
                    Role
                  </Label>
                  <Input
                    id="role"
                    type="text"
                    placeholder="Enter Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="roleDescription"
                    className="text-sm font-medium text-gray-700"
                  >
                    Role Description
                  </Label>
                  <Input
                    id="roleDescription"
                    type="text"
                    placeholder="Role Description"
                    value={roleDescription}
                    onChange={(e) => setRoleDescription(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Permission Groups */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {permissionGroups.map((group) => (
                  <Card key={group.title} className="bg-gray-800 border-0">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-sm font-medium text-white">
                        {group.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {group.permissions.map((permission) => (
                          <div
                            key={permission.id}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={permission.id}
                              checked={selectedPermissions.has(permission.id)}
                              onCheckedChange={() =>
                                handlePermissionChange(permission.id)
                              }
                              className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                            />
                            <Label
                              htmlFor={permission.id}
                              className="text-sm font-normal text-gray-200 cursor-pointer"
                            >
                              {permission.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md transition-colors"
                >
                  Change Group Permission
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
