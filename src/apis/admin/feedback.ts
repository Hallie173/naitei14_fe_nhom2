import axios from "axios";
import { Feedback } from "../../features/admin/feedback/types";

export const feedbackApi = {
  getAll: () => axios.get<Feedback[]>("/admin/feedback"),
  reply: (id: number, message: string) =>
    axios.post(`/admin/feedback/${id}/reply`, { message }),
  delete: (id: number) => axios.delete(`/admin/feedback/${id}`),
};
