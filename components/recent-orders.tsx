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

const recentOrders = [
  {
    name: "Hand Lotion",
    price: "$5.22",
    time: "3 mins ago",
    image: "/api/placeholder/50/50",
  },
  {
    name: "Magic Massage",
    price: "$11.70",
    time: "3 mins ago",
    image: "/api/placeholder/50/50",
  },
  {
    name: "Makeup Kit",
    price: "$8.99",
    time: "5 mins ago",
    image: "/api/placeholder/50/50",
  },
  {
    name: "Lip Balm",
    price: "$6.48",
    time: "6 mins ago",
    image: "/api/placeholder/50/50",
  },
  {
    name: "Hair Balm",
    price: "$14.81",
    time: "7 mins ago",
    image: "/api/placeholder/50/50",
  },
];

const RecentOrders = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead className="text-right">Total Amount</TableHead>
                <TableHead className="text-right">Time Ordered</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src={order.image} alt={order.name} />
                        <AvatarFallback>{order.name[0]}</AvatarFallback>
                      </Avatar>
                      {order.name}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{order.price}</TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    {order.time}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentOrders;
