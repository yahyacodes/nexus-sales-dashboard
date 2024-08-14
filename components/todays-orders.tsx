"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Package, DollarSign, TrendingUp, Clock } from "lucide-react";

const TodaysOrders = () => {
  return (
    <div>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Today's Orders</CardTitle>
          <CardDescription>You have 12 orders today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="">
            <Card className="mb-4 ">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-8 w-8 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$625.75</div>
                <p className="text-xs text-green-600">+20.1% from yesterday</p>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Completed Orders
                </CardTitle>
                <Package className="h-8 w-8 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-green-600">+2 from yesterday</p>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pending Orders
                </CardTitle>
                <Clock className="h-8 w-8 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-red-500">-1 from yesterday</p>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Average Order Value
                </CardTitle>
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$52.15</div>
                <p className="text-xs text-green-600">+$4.20 from yesterday</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodaysOrders;
