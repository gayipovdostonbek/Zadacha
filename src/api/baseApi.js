import { request } from "./config";

const baseApi = {
  find(id, url) {
    return request.get(`${url}/${id}`);
  },
  async fetchAll(url, data) {
    const res = await request.get(url, data);
    return res;
  },
  async fetchWithParams(url, params) {
    const res = await request.get(url, { params });
    return res;
  },
  async create(url, data) {
    let res = await request.post(url, data);
    return res;
  },
  async createWithParams(url, data = null, params) {
    let res = await request.post(url, data, { params });
    return res;
  },
  update: (id, url, data) => {
    request({ method: "put", url: `${url}/${id}`, data });
  },
  remove: async (id, url) => {
    let res = await request.delete(`${url}/${id}`);
    return res.data.status;
  },
};

export default baseApi;
