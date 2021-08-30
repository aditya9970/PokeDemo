import API from "./axois";

export const list = (pagination) => {
  console.log(pagination);
  return API.get(`/pokemon`, { params: pagination || "" });
};

export const get = (name) => {
  return API.get(`/pokemon/${name}`);
};
