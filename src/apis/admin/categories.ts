import axios from "axios";
import { Category } from "../../features/admin/categories/types";

export const categoriesApi = {
  getAll: () => axios.get<Category[]>("/admin/categories"),
  create: (data: Partial<Category>) => axios.post("/admin/categories", data),
  update: (id: number, data: Partial<Category>) =>
    axios.put(`/admin/categories/${id}`, data),
  delete: (id: number) => axios.delete(`/admin/categories/${id}`),
};
