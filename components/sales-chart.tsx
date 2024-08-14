"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 150 },
  { month: "Feb", sales: 200 },
  { month: "Mar", sales: 180 },
  { month: "Apr", sales: 300 },
  { month: "May", sales: 100 },
  { month: "Jun", sales: 400 },
  { month: "Jul", sales: 300 },
  { month: "Aug", sales: 200 },
  { month: "Sep", sales: 250 },
  { month: "Oct", sales: 300 },
  { month: "Nov", sales: 250 },
  { month: "Dec", sales: 250 },
];

const SalesChart = () => {
  return (
    <div>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={640}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesChart;
