"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const popularProducts = [
  {
    name: "Lego Star War edition",
    category: "Electronics",
    sales: 4846,
    amount: "$909.28",
    image: "/api/placeholder/50/50",
  },
  {
    name: "Helmer Miller Sofa (Mint Condition)",
    category: "Cosmetic",
    sales: 4600,
    amount: "$871.46",
    image: "/api/placeholder/50/50",
  },
  {
    name: "iPad Pro 2017 Model",
    category: "Food",
    sales: 1374,
    amount: "$1,609.54",
    image: "/api/placeholder/50/50",
  },
  {
    name: "Gaming Chair, local pickup only",
    category: "Fashion",
    sales: 8811,
    amount: "$2,645.33",
    image: "/api/placeholder/50/50",
  },
  {
    name: "DJ Mavic Pro 2",
    category: "Drinks",
    sales: 9374,
    amount: "$2,889.71",
    image: "/api/placeholder/50/50",
  },
];

const PopularProducts = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Popular Products</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Sales</TableHead>
                <TableHead className="text-right">Total Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {popularProducts.map((product, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src={product.image} alt={product.name} />
                        <AvatarFallback>{product.name[0]}</AvatarFallback>
                      </Avatar>
                      {product.name}
                    </div>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell className="text-right">{product.sales}</TableCell>
                  <TableCell className="text-right">{product.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PopularProducts;
