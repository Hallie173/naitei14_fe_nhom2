import React from "react";
import { Order } from "../types";

interface Props {
  orders?: Order[] | null;
  onSelect: (order: Order) => void;
}

export default function OrderTable({ orders = [], onSelect }: Props) {
  const safeOrders = Array.isArray(orders) ? orders : [];

  if (safeOrders.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 border mt-3">
        No orders found.
      </div>
    );
  }

  return (
    <table className="table-auto w-full border mt-3">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="p-2">ID</th>
          <th className="p-2">User</th>
          <th className="p-2">Total</th>
          <th className="p-2">Status</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {safeOrders.map((o) => (
          <tr key={o.id} className="border-b hover:bg-gray-50">
            <td className="p-2">{o.id}</td>
            <td className="p-2">{o.userId}</td>
            <td className="p-2">${o.total}</td>
            <td className="p-2">{o.status}</td>
            <td className="p-2">
              <button
                onClick={() => onSelect(o)}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
