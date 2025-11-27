import axios from "axios";

export const productsApi = {
  getAll: () => axios.get("/admin/products"),
  getById: (id: number) => axios.get(`/admin/products/${id}`),
  create: (data: any) => axios.post("/admin/products", data),
  update: (id: number, data: any) => axios.put(`/admin/products/${id}`, data),
  delete: (id: number) => axios.delete(`/admin/products/${id}`),
};