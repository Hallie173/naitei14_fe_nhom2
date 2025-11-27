import axios from "axios";
import { User } from "../../features/admin/users/types";

export const usersApi = {
  getAll: () => axios.get<User[]>("/admin/users"),
  getDetail: (id: number) => axios.get(`/admin/users/${id}`),
  update: (id: number, data: Partial<User>) =>
    axios.put(`/admin/users/${id}`, data),
  delete: (id: number) => axios.delete(`/admin/users/${id}`),
};
