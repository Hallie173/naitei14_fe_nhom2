import axios from "axios";

export const ordersApi = {
  getAll: () => axios.get("/admin/orders"),
  getById: (id: number) => axios.get(`/admin/orders/${id}`),
  updateStatus: (id: number, status: string) =>
    axios.put(`/admin/orders/${id}/status`, { status }),
};
