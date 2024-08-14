import Header from "@/components/header";
import PopularProducts from "@/components/popular-products";
import RecentOrders from "@/components/recent-orders";
import SalesChart from "@/components/sales-chart";
import Sidebar from "@/components/sidebar";
import Stats from "@/components/stats";
import TodaysOrders from "@/components/todays-orders";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-4">
          <Header />
          <Stats />
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 mb-4">
            <div className="col-span-4">
              <SalesChart />
            </div>
            <div className="cols-span-1">
              <TodaysOrders />
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-6 gap-4">
            <div className="col-span-2">
              <RecentOrders />
            </div>
            <div className="col-span-4">
              <PopularProducts />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
