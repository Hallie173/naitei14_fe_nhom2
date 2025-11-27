import axios from "axios";
import { Order } from "../../features/admin/orders/types";

export const ordersApi = {
  getAll: () => axios.get<Order[]>("/admin/orders"),
  getDetail: (id: number) => axios.get(`/admin/orders/${id}`),
  updateStatus: (id: number, status: string) =>
    axios.put(`/admin/orders/${id}/status`, { status }),
  delete: (id: number) => axios.delete(`/admin/orders/${id}`),
};
