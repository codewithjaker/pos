// app/my-profile/page.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function MyProfile() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="mb-6 flex flex-col justify-between border-b pb-4 md:flex-row md:items-end">
        <h1 className="mb-4 text-2xl font-bold md:mb-0">My Profile</h1>
        <nav className="flex items-center space-x-2 text-sm">
          <a
            href="/pyle/"
            className="text-muted-foreground hover:text-foreground"
          >
            Dashboard
          </a>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">My Profile</span>
        </nav>
      </div>

      {/* Form Section */}
      <form className="pb-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Profile Image Upload */}
          <div className="lg:col-span-4">
            <div className="space-y-2">
              <Label htmlFor="profile-image">Add Profile Image</Label>
              <Card className="p-6">
                <CardContent className="flex flex-col items-center justify-center space-y-4 p-6">
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed border-muted">
                    <div className="text-center">
                      <UploadIcon className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Drag & Drop Image here or{" "}
                        <span className="font-semibold text-primary">
                          Select
                        </span>
                      </p>
                    </div>
                    <Input
                      id="profile-image"
                      type="file"
                      className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                      accept="image/*"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Form Fields */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder="Jhonathon"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input
                  id="last-name"
                  type="text"
                  placeholder="Ronan"
                  required
                />
              </div>

              {/* Username */}
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" placeholder="Jhonathon R." />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="236 999 456" />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jhonathon@pyle.com"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>

              {/* Bio */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Add A Bio" rows={4} />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Update Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

// Upload Icon Component
function UploadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}
