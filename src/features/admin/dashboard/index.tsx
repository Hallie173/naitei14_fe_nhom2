import React, { useEffect, useState } from "react";
import { dashboardApi } from "../../../apis/admin/dashboard";
import ChartSales from "./components/ChartSales";
import ProductTopList from "./components/ProductTopList";

export default function AdminDashboard() {
  const [topProducts, setTopProducts] = useState<any[]>([]);
  const [overview, setOverview] = useState<any>(null);

  useEffect(() => {
    dashboardApi.getTopProducts().then((r: { data: any; }) => setTopProducts(r.data || []));
    dashboardApi.getOverview().then((r: { data: any; }) => setOverview(r.data || {}));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {overview && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="p-4 border rounded">
            Total Sales: {overview.totalSales}
          </div>
          <div className="p-4 border rounded">Orders: {overview.orders}</div>
          <div className="p-4 border rounded">Users: {overview.users}</div>
        </div>
      )}

      <ChartSales />
      <ProductTopList products={topProducts} />
    </div>
  );
}
