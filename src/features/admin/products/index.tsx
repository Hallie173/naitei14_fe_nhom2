import React, { useEffect, useState } from "react";
import { productsApi } from "./api";
import { Product } from "./types";
import ProductTable from "./components/ProductTable";
import ProductDetail from "./components/ProductDetail";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Product | null>(null);

  useEffect(() => {
    productsApi.getAll().then((r) => setProducts(r.data || []));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductTable products={products} onSelect={setSelected} />
      <ProductDetail product={selected} />
    </div>
  );
}
