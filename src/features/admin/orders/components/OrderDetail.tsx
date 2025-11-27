import React from "react";
import { Order } from "../types";

interface Props {
  order: Order | null;
}

export default function OrderDetail({ order }: Props) {
  if (!order) return <div className="mt-3">Select an order</div>;

  return (
    <div className="p-4 border rounded mt-4 bg-white shadow">
      <h2 className="text-xl font-bold mb-2">Order #{order.id}</h2>
      <p>User: {order.userId}</p>
      <p>Status: {order.status}</p>
      <p>Total: {order.total.toLocaleString()} VND</p>

      <h3 className="font-semibold mt-4 mb-2">Items</h3>
      <ul className="list-disc ml-6">
        {order.items.map((it) => (
          <li key={it.productId}>
            {it.name} — {it.quantity} × {it.price.toLocaleString()} VND
          </li>
        ))}
      </ul>
    </div>
  );
}
