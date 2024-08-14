"use client";

import React from "react";
import { Users, Package, DollarSign, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Stats = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mb-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Orders</CardTitle>
          <Package className="h-8 w-8 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">365</div>
          <p className="text-xs text-green-600">+4.1% from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
          <DollarSign className="h-8 w-8 text-red-500 p-1" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$5365</div>
          <p className="text-xs text-red-600">-33.3% from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Sales</CardTitle>
          <TrendingDown className="h-8 w-8 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">860+</div>
          <p className="text-xs text-red-600">-13.9% from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Customers</CardTitle>
          <Users className="h-8 w-8 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1800+</div>
          <p className="text-xs text-green-600">+8.8% last week</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Stats;
