// app/system-settings/page.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SystemSettings() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
        </div>
        <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
          <a href="/pyle/" className="hover:text-foreground transition-colors">
            Dashboard
          </a>
          <span>/</span>
          <span className="text-foreground">System Settings</span>
        </nav>
      </div>

      {/* System Settings Card */}
      <Card>
        <CardHeader>
          <CardTitle>System Settings</CardTitle>
          <CardDescription>
            Configure your company information and default settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input
                id="company-name"
                placeholder="Pyle Corporation"
                defaultValue="Pyle Corporation"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company-phone">Company Phone Number</Label>
              <Input
                id="company-phone"
                placeholder="990 321 52 36 21"
                defaultValue="990 321 52 36 21"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="default-email">Default Email</Label>
              <Input
                id="default-email"
                placeholder="hello@pyle.com"
                defaultValue="hello@pyle.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="default-currency">Default Currency</Label>
              <Select defaultValue="0">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">USD Dollar</SelectItem>
                  <SelectItem value="1">EUR Euro</SelectItem>
                  <SelectItem value="2">GBP Pound</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="default-language">Default Language</Label>
              <Select defaultValue="0">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">US English</SelectItem>
                  <SelectItem value="1">UK English</SelectItem>
                  <SelectItem value="2">Chinese</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="default-customer">Default Customer</Label>
              <Select defaultValue="0">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select customer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Walk In Customer</SelectItem>
                  <SelectItem value="1">Registered Customer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="default-warehouse">Default Warehouse</Label>
              <Select defaultValue="0">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select warehouse" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Main Warehouse</SelectItem>
                  <SelectItem value="1">Secondary Warehouse</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="footer">Footer</Label>
              <Input
                id="footer"
                placeholder="PYLE - Inventory Management With POS"
                defaultValue="PYLE - Inventory Management With POS"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="developed-by">Developed By</Label>
              <Input
                id="developed-by"
                placeholder="Pyle Corporation"
                defaultValue="Pyle Corporation"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="413 North Las Vegas, NV 89032"
                defaultValue="413 North Las Vegas, NV 89032"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company-logo">Company Logo</Label>
              <Input
                id="company-logo"
                type="file"
                className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
            </div>
          </div>

          <Button>Change Settings</Button>
        </CardContent>
      </Card>

      {/* POS Receipt Settings Card */}
      <Card>
        <CardHeader>
          <CardTitle>POS Receipt Settings</CardTitle>
          <CardDescription>
            Configure what information appears on POS receipts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="show-phone" />
              <Label htmlFor="show-phone">Show Phone Number</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="show-address" />
              <Label htmlFor="show-address">Show Address</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="show-email" />
              <Label htmlFor="show-email">Show Email Address</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="show-customer" />
              <Label htmlFor="show-customer">Show Customer</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="show-tax-discounts" />
              <Label htmlFor="show-tax-discounts">Show Tax & Discounts</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="show-barcode" />
              <Label htmlFor="show-barcode">Show Barcode</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="show-note" />
              <Label htmlFor="show-note">Show Note to Customer</Label>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="customer-note">Note To Customer</Label>
            <Input
              id="customer-note"
              placeholder="Thanks for shopping with Us. Please Come Again."
              defaultValue="Thanks for shopping with Us. Please Come Again."
            />
          </div>

          <Button>Change Settings</Button>
        </CardContent>
      </Card>

      {/* Payment Gateway Card */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Gateway</CardTitle>
          <CardDescription>
            Configure your Stripe payment gateway settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="stripe-key">Stripe Key</Label>
              <Input
                id="stripe-key"
                type="password"
                placeholder="*********************************************"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stripe-secret">Stripe Secret</Label>
              <Input
                id="stripe-secret"
                type="password"
                placeholder="Please leave this field if you haven't changed it"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="delete-stripe" />
            <Label htmlFor="delete-stripe">Delete Stripe API Keys</Label>
          </div>

          <Button>Change Settings</Button>
        </CardContent>
      </Card>

      {/* SMS Configuration Card */}
      <Card>
        <CardHeader>
          <CardTitle>SMS Configuration</CardTitle>
          <CardDescription>
            Configure your Twilio SMS gateway settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="sms-gateway">SMS Gateway</Label>
              <Input
                id="sms-gateway"
                placeholder="Twilio"
                defaultValue="Twilio"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="twilio-sid">Twilio SID</Label>
              <Input id="twilio-sid" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="twilio-token">Twilio Token</Label>
              <Input id="twilio-token" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="twilio-from">Twilio From</Label>
              <Input id="twilio-from" />
            </div>
          </div>

          <Button>Change Settings</Button>
        </CardContent>
      </Card>

      {/* SMTP Configuration Card */}
      <Card>
        <CardHeader>
          <CardTitle>SMTP Configuration</CardTitle>
          <CardDescription>
            Configure your email server settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="smtp-host">Host</Label>
              <Input id="smtp-host" placeholder="smtp.example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="smtp-port">Port</Label>
              <Input id="smtp-port" placeholder="587" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="smtp-username">Username</Label>
              <Input id="smtp-username" placeholder="hello_pyle" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="smtp-password">Password</Label>
              <Input id="smtp-password" type="password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="smtp-encryption">Encryption</Label>
              <Input id="smtp-encryption" placeholder="TLS" />
            </div>
          </div>

          <Button>Change Settings</Button>
        </CardContent>
      </Card>

      {/* Clear Cache Card */}
      <Card>
        <CardHeader>
          <CardTitle>Clear Cache</CardTitle>
          <CardDescription>
            Clear system cache to refresh application data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Clear Cache</Button>
        </CardContent>
      </Card>

    </div>
  );
}
