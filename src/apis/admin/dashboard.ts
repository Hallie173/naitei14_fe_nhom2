import axios from "axios";

export const dashboardApi = {
  getSales: () => axios.get("/admin/dashboard/sales"),
  getTopProducts: () => axios.get("/admin/dashboard/top-products"),
  getOverview: () => axios.get("/admin/dashboard/overview"),
};
