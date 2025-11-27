import React from "react";
import { useForm } from "react-hook-form";
import { categoriesApi } from "../api";
import { Category } from "../types";

export default function CategoryForm({ onSuccess }: { onSuccess: () => void }) {
  const { register, handleSubmit, reset } = useForm<Partial<Category>>();

  const onSubmit = async (data: Partial<Category>) => {
    await categoriesApi.create(data);
    reset();
    onSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-2 p-4 border mt-4"
    >
      <input
        {...register("name", { required: true })}
        className="border p-2 w-full"
        placeholder="Category name"
      />
      <textarea
        {...register("description")}
        className="border p-2 w-full"
        placeholder="Description"
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        type="submit"
      >
        Create
      </button>
    </form>
  );
}
