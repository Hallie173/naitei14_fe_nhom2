import React, { useState } from "react";
import { productsApi } from "../../../apis/admin/products";

export default function CreateProduct() {
  const [form, setForm] = useState({ name: "", price: 0, categoryId: 0 });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await productsApi.create(form);
    alert("Product created");
  };

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-bold mb-3">Create Product</h2>

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
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Create
      </button>
    </div>
  );
}
