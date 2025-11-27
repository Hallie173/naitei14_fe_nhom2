import axios from "axios";

export const usersApi = {
  getAll: () => axios.get("/admin/users"),
  getById: (id: number) => axios.get(`/admin/users/${id}`),
  update: (id: number, data: any) => axios.put(`/admin/users/${id}`, data),
  remove: (id: number) => axios.delete(`/admin/users/${id}`),
};
