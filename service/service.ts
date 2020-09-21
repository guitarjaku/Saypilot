import http from "./http-common";

const getAll = (url: string) => {
  return http.get(url);
};

const get = (url: string, id: string) => {
  return http.get(`${url}/${id}`);
};

const create = (url: string, data: any) => {
  return http.post(url, data);
};

const update = (url: string, id: string, data: any) => {
  return http.put(`${url}/${id}`, data);
};

const remove = (url: string, id: string) => {
  return http.delete(`${url}/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
};
