import React from "react";

export default function ProductTopList({
  products = [],
}: {
  products?: any[];
}) {
  const safeProducts = Array.isArray(products) ? products : [];

  return (
    <div className="p-4 border rounded mt-4">
      <h2 className="font-bold mb-2">Top Products</h2>
      <ul className="list-disc ml-6">
        {safeProducts.map((p) => (
          <li key={p.id}>
            {p.name} - {p.sales}
          </li>
        ))}
      </ul>
    </div>
  );
}
