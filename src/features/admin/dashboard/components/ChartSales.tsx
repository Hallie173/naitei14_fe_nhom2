import React, { useEffect, useState } from "react";
import { dashboardApi } from "../../../../apis/admin/dashboard";

export default function ChartSales() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    dashboardApi.getSales().then((r) => setData(r.data || []));
  }, []);

  return (
    <div className="p-4 border rounded mt-4">
      <h2 className="font-bold mb-2">Sales Chart</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
