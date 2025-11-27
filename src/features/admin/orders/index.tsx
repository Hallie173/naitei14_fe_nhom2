import React, { useEffect, useState } from "react";
import { ordersApi } from "./api";
import { Order } from "./types";
import OrderTable from "./components/OrderTable";
import OrderDetail from "./components/OrderDetail";

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selected, setSelected] = useState<Order | null>(null);

  useEffect(() => {
    ordersApi.getAll().then((r) => setOrders(r.data || []));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <OrderTable orders={orders} onSelect={setSelected} />
      <OrderDetail order={selected} />
    </div>
  );
}
