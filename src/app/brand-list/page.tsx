'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  ChevronLeft, 
  ChevronRight,
  ArrowUpDown 
} from 'lucide-react';

interface Brand {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
}

const brands: Brand[] = [
  {
    id: '1',
    name: 'Solit IT Solution',
    description: 'Electronics',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&h=100&fit=crop'
  },
  {
    id: '2',
    name: 'Fafo Food Co.',
    description: 'Food & Grocery',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop'
  },
  {
    id: '3',
    name: 'Coze IT Solution',
    description: 'Electronics',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=100&h=100&fit=crop'
  },
  {
    id: '4',
    name: 'Pikn Podcast Company',
    description: 'Mobile & Electronics',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=100&h=100&fit=crop'
  }
];

const categoryColors: Record<string, string> = {
  Electronics: 'bg-blue-100 text-blue-800 hover:bg-blue-100',
  Food: 'bg-green-100 text-green-800 hover:bg-green-100',
};

export default function BrandListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const filteredBrands = brands.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleBrandSelection = (brandId: string) => {
    setSelectedBrands(prev =>
      prev.includes(brandId)
        ? prev.filter(id => id !== brandId)
        : [...prev, brandId]
    );
  };

  const toggleAllBrands = () => {
    setSelectedBrands(
      selectedBrands.length === filteredBrands.length
        ? []
        : filteredBrands.map(brand => brand.id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-6 pb-4 border-b">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-2xl font-bold text-gray-900">Brand List</h1>
        </div>
        <nav className="flex space-x-2 text-sm">
          <a href="/dashboard" className="text-gray-600 hover:text-gray-900">
            Dashboard
          </a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Brand List</span>
        </nav>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search on this table"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Create Brand
          </Button>
        </div>
      </div>

      {/* Brands Table */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[300px]">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={
                        filteredBrands.length > 0 &&
                        selectedBrands.length === filteredBrands.length
                      }
                      onCheckedChange={toggleAllBrands}
                    />
                    <span className="font-normal">BRAND IMAGE</span>
                  </div>
                </TableHead>
                <TableHead className="font-normal">
                  <div className="flex items-center">
                    BRAND NAME
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="font-normal">
                  <div className="flex items-center">
                    BRAND DESCRIPTION
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="font-normal text-right">ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBrands.map((brand) => (
                <TableRow key={brand.id} className="hover:bg-gray-50/50">
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <Checkbox
                        checked={selectedBrands.includes(brand.id)}
                        onCheckedChange={() => toggleBrandSelection(brand.id)}
                      />
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{brand.name}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary" 
                      className={categoryColors[brand.category] || 'bg-gray-100 text-gray-800'}
                    >
                      {brand.description}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-600 hover:text-gray-900"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-600 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
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
      <div className="flex flex-col sm:flex-row items-center justify-between mt-8 py-4">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <span className="text-sm text-gray-600">Showing product per page</span>
          <select className="text-sm border-0 bg-transparent focus:outline-none focus:ring-0">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
        <div className="flex items-center space-x-1">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 bg-blue-600 text-white hover:bg-blue-700">
            1
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8">
            2
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8">
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