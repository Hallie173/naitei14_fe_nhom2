import React, { useEffect, useState } from "react";
import { categoriesApi } from "./api";
import { Category } from "./types";
import CategoryForm from "./components/CategoryForm";
import CategoryTable from "./components/CategoryTable";

export default function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  const load = () => {
    categoriesApi.getAll().then((r) => setCategories(r.data || []));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <CategoryForm onSuccess={load} />
      <CategoryTable categories={categories} onRefresh={load} />
    </div>
  );
}
