import React, { useEffect, useState } from "react";
import { ordersApi } from "./api";
import { Order } from "./types";
import OrderTable from "./components/OrderTable";
import OrderDetail from "./components/OrderDetail";

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selected, setSelected] = useState<Order | null>(null);

  const loadOrders = async () => {
    try {
      const res = await ordersApi.getAll(); // mock API trả trực tiếp dữ liệu
      setOrders(Array.isArray(res) ? res : []);
    } catch (error) {
      console.error("Failed to load orders", error);
      setOrders([]);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <OrderTable orders={orders} onSelect={setSelected} />
      <OrderDetail order={selected} />
    </div>
  );
}
