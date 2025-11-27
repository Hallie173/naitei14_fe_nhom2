import React from "react";
import { Product } from "../types";

interface Props {
  products?: Product[] | null;
  onSelect: (p: Product) => void;
}

export default function ProductTable({ products, onSelect }: Props) {
  const safeProducts = Array.isArray(products) ? products : [];
  if (safeProducts.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 border mt-3">
        No product found.
      </div>
    );
  }

  return (
    <table className="w-full border">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">ID</th>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Price</th>
          <th className="p-2 border">Stock</th>
          <th className="p-2 border">Category</th>
        </tr>
      </thead>

      <tbody>
        {safeProducts.map((p) => (
          <tr
            key={p.id}
            className="cursor-pointer hover:bg-gray-50"
            onClick={() => onSelect(p)}
          >
            <td className="p-2 border">{p.id}</td>
            <td className="p-2 border">{p.name}</td>
            <td className="p-2 border">${p.price}</td>
            <td className="p-2 border">{p.stock}</td>
            <td className="p-2 border">{p.categoryId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
