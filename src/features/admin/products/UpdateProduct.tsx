import React, { useEffect, useState } from "react";
import { productsApi } from "../../../apis/admin/products";

interface Props {
  productId: number;
}

export default function UpdateProduct({ productId }: Props) {
  const [form, setForm] = useState({ name: "", price: 0, categoryId: 0 });

  useEffect(() => {
    productsApi
      .getById(productId)
      .then(
        (r: {
          data: React.SetStateAction<{
            name: string;
            price: number;
            categoryId: number;
          }>;
        }) => setForm(r.data)
      );
  }, [productId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await productsApi.update(productId, form);
    alert("Product updated");
  };

  return (
    <div className="p-4 border rounded bg-white shadow mt-4">
      <h2 className="text-xl font-bold mb-3">Update Product</h2>

      <div className="mb-3">
        <label className="block mb-1">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Price</label>
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Category ID</label>
        <input
          name="categoryId"
          type="number"
          value={form.categoryId}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Update
      </button>
    </div>
  );
}
