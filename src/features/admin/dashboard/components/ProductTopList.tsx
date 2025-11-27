import React from "react";
import { TopProduct } from "../../../../apis/admin/dashboardIndex";

interface Props {
  products?: TopProduct[];
}

export default function ProductTopList({ products = [] }: Props) {
  const safeProducts = Array.isArray(products) ? products : [];

  return (
    <div className="p-4 border rounded mt-4">
      <h2 className="font-bold mb-2">Top Products</h2>
      <ul className="list-disc ml-6">
        {safeProducts.map((p) => (
          <li key={p.id}>
            {p.name} - {p.sales} sales
          </li>
        ))}
      </ul>
    </div>
  );
}
